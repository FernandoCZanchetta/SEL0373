/*Board - Arduino IDE: ESP32 Dev Module*/
//#define ISDEBUG 1
//#define ISPRETTYDEBUG 1

#include "WiFi.h"
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"
#include "esp_camera.h"


//WROVER-KIT PIN Map
#define CAMERA_MODEL_WROVER_KIT
#include "camera_pins.h"

#define CAM_XCLK_FREQ 20000000 //EXPERIMENTAL: Set to 16MHz on ESP32-S2 or ESP32-S3 to enable EDMA mode
#define JPEG_QUALITY 4         //Originaly is 12
#define FB_COUNT 1             //When jpeg mode is used, if fb_count more than one, the driver will work in continuous mode.

static camera_config_t camera_config = {
  .pin_pwdn  = PWDN_GPIO_NUM,
  .pin_reset = RESET_GPIO_NUM,
  .pin_xclk = XCLK_GPIO_NUM,
  .pin_sccb_sda = SIOD_GPIO_NUM,
  .pin_sccb_scl = SIOC_GPIO_NUM,

  .pin_d7 = Y9_GPIO_NUM,
  .pin_d6 = Y8_GPIO_NUM,
  .pin_d5 = Y7_GPIO_NUM,
  .pin_d4 = Y6_GPIO_NUM,
  .pin_d3 = Y5_GPIO_NUM,
  .pin_d2 = Y4_GPIO_NUM,
  .pin_d1 = Y3_GPIO_NUM,
  .pin_d0 = Y2_GPIO_NUM,
  .pin_vsync = VSYNC_GPIO_NUM,
  .pin_href = HREF_GPIO_NUM,
  .pin_pclk = PCLK_GPIO_NUM,

  .xclk_freq_hz = CAM_XCLK_FREQ,
  .ledc_timer = LEDC_TIMER_0,
  .ledc_channel = LEDC_CHANNEL_0,

  .pixel_format = PIXFORMAT_JPEG,     //YUV422,GRAYSCALE,RGB565,JPEG
  .frame_size = FRAMESIZE_UXGA,       //QQVGA-UXGA, For ESP32, do not use sizes above QVGA when not JPEG. The performance of the ESP32-S series has improved a lot, but JPEG mode always gives better frame rates.

  .jpeg_quality = JPEG_QUALITY,       //0-63, for OV series camera sensors, lower number means higher quality
  .fb_count = FB_COUNT, 
  .grab_mode = CAMERA_GRAB_WHEN_EMPTY //CAMERA_GRAB_LATEST. Sets when buffers should be filled
};

//Definições referentes ao Wifi:
#define WLAN_SSID "LabMicros"
#define WLAN_PASS "seluspeesc@"
WiFiClient client;

//Definições referentes ao mqtt:
#define MQTT_SERVER "igbt.eesc.usp.br"
#define MQTT_SERVERPORT 1883
#define MQTT_USERNAME "mqtt"
#define MQTT_KEY "mqtt_123_abc"
Adafruit_MQTT_Client mqtt(&client, MQTT_SERVER, MQTT_SERVERPORT, MQTT_USERNAME, MQTT_KEY);
Adafruit_MQTT_Subscribe takephoto = Adafruit_MQTT_Subscribe(&mqtt, "sharp_probe/request_photo");


void parse_Camera (uint32_t a) {
  camera_fb_t * fb = esp_camera_fb_get();

  mqtt.publish("sharp_probe/send_photo", fb->buf, fb->len);
  
  //return the frame buffer back to the driver for reuse
  esp_camera_fb_return(fb);
}

void setup() {
  Serial.begin(115200);
  Serial.println("Comunicação SERIAL estabelecida!\n");

  WiFi.begin(WLAN_SSID, WLAN_PASS);
  
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  takephoto.setCallback(parse_Camera);

  mqtt.subscribe(&takephoto);

  MQTT_connect();

  setup_Camera();

  Serial.println("Setup da sonda concluído!");
}

void loop() {
  MQTT_connect();

  mqtt.processPackets(10000);

  if(!mqtt.ping()) {
    mqtt.disconnect();
  }
}

void setup_Camera() {
  esp_err_t err = esp_camera_init(&camera_config);
  if (err != ESP_OK) {
    ESP_LOGE(TAG, "Camera Init Failed");
  }
}

void MQTT_connect() {
  int8_t ret;
  uint8_t retries = 5;

  if (mqtt.connected()) {
    return;
  }

  while ((ret = mqtt.connect()) != 0) { //Connect will return 0 for connected
    Serial.println(mqtt.connectErrorString(ret));
    Serial.println("Retrying MQTT connection in 5 seconds...");
    
    mqtt.disconnect();
    
    delay(5000);
    
    retries--;

    if (retries == 0) {
      //Basically die and wait for WDT to reset me
      while (1);
    }
  }
}