/*Board - Arduino IDE: ESP32 Dev Module*/
//#define ISDEBUG 1
//#define ISPRETTYDEBUG 1

TaskHandle_t ParseGPSTaskHandle;
TaskHandle_t ParseBMPTaskHandle;
TaskHandle_t ParseMPUTaskHandle;
TaskHandle_t ParseDHTTaskHandle;
TaskHandle_t ParseCameraTaskHandle;

#include "Adafruit_Sensor.h"
#include "Wire.h"
#include "Adafruit_BMP280.h"
#include "Adafruit_MPU6050.h"
#include "DHT.h"
#include "Wifi.h"
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

enum class PARSE_ERROR_CODES {
  PARSE_SUCCESS,
  PARSE_DATA_NOT_APPENDED,
  PARSE_DATA_NOT_PRINTED
};
using parse_error_t = PARSE_ERROR_CODES;

//Pinos referentes ao Buzzer:
#define GPIO_BUZZER 24
#define BUZZER_PWM_CHANNEL 0 //Avoid use of channels 2, 3, 10, 11, as they make use of timer 1, which is being used for other purposes.
//More info in: https://github.com/espressif/arduino-esp32/blob/master/cores/esp32/esp32-hal-ledc.c
#define NO_TONE_FREQUENCY 0
#define BUZZER_FREQUENCY 6000
#define BUZZER_FREQUENCY_RESOLUTION 13 //bits
#define BUZZER_DURATION 750

//Pinos referentes ao MPU:
#define MPU_SLC 22
#define MPU_SDA 21
Adafruit_MPU6050 mpu;

//Pinos referentes ao BMP (I2C):
#define BMP_SDA 10
#define BMP_SCL 11
Adafruit_BMP280 bmp;

//Pinos referentes ao DHT:
#define DHT_GPIO 2
#define DHTTYPE DHT22
DHT dht(DHT_GPIO, DHTTYPE);

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

void parse_GPS (*pvParameters) {
  for( ; ; ) {
    float latitude, longitude, altitude;
    float hours, minutes, seconds;

  
    GPS.pegar_dados();

  
    //MQTT data transmission
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/latitude").publish(latitude);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/longitude").publish(longitude);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/altitude").publish(altitude);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/horas").publish(hours);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/minutos").publish(minutes);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/segundos").publish(seconds);
    

    #ifdef ISPRETTYDEBUG
    Serial.println("Latitude: " + (String )latitude + "\n");
    Serial.println("Longitude: " + (String )latitude + "\n");
    Serial.println("Altitude: " + (String )latitude + "\n");
    Serial.println("Horas: " + (String )latitude + "\n");
    Serial.println("Minutos: " + (String )latitude + "\n");
    Serial.println("Segundos: " + (String )latitude + "\n");
    #endif
  }
}

void parse_BMP (*pvParameters) {
  for( ; ; ) {
    float pressure, temperature;

  
    temperature = bmp.readTemperature();
    pressure = bmp.readPressure();

  
    //MQTT data transmission
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/pressão").publish(pressure);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/temperatura_bmp").publish(temperature);

  
    #ifdef ISPRETTYDEBUG
    Serial.println("Pressão: " + (String) pressure + "\n");
    Serial.println("Temperatura_BMP: " + (String) temperature + "\n");
    #endif
  }
}

void parse_MPU (*pvParameters) {
  for( ; ; ) {
    sensors_event_t a, g;
    mpu.getEvent(&a, &g);


    //MQTT data transmission
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/aceleração_x").publish(a.acceleration.x);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/aceleração_y").publish(a.acceleration.y);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/aceleração_z").publish(a.acceleration.z);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/angulo_x").publish(g.gyro.x);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/angulo_y").publish(g.gyro.y);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/angulo_z").publish(g.gyro.z);


    #ifdef ISPRETTYDEBUG
    Serial.println("Aceleração Eixo-X: " + (String) a.acceleration.x + "\n");
    Serial.println("Aceleração Eixo-Y: " + (String) a.acceleration.y + "\n");
    Serial.println("Aceleração Eixo-Z: " + (String) a.acceleration.z + "\n");
    Serial.println("Ângulo Eixo-X: " + (String) g.gyro.x + "\n");
    Serial.println("Ângulo Eixo-Y: " + (String) g.gyro.y + "\n");
    Serial.println("Ângulo Eixo-Z: " + (String) g.gyro.z + "\n");
    #endif
  }
}

void parse_DHT (*pvParameters) {
  for( ; ; ) {
    float humidity, temperature;

    humidity = dht.readHumidity();
    temperature = dht.readTemperature();
  
    //MQTT data transmission
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/umidade").publish(humidity);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/temperatura_dht").publish(temperature);


    #ifdef ISPRETTYDEBUG
    Serial.println("Umidade: " + (String )humidity + "\n");
    Serial.println("Temperatura_DHT: " + (String )temperature + "\n");
    #endif
  }
}

void parse_Camera (*pvParameters) {
  for( ; ; ) {
    variável imagem; //ver na biblioteca de Camera da ESP32

    if(MQTT.read(tópico---->pictures) == true) {
      Camera.tirar_foto() //ver na biblioteca de Camera ESP32
  
      //MQTT data transmission
      MQTT.attach(tópico---->pictures); //.attach para enviar uma foto e .publish para enviar texto, como foi nas outras funções (fernandao disse de cabeca, pesquisar melhor)
    }
  }
}

void setup() {
  Serial.begin(115200);
  Serial.println("Comunicação SERIAL estabelecida!\n");
  
  Wire.begin(MPU_SDA, MPU_SCL);
  Wire1.begin(BMP_SDA, MPU_SCL); 

  WiFi.begin(WLAN_SSID, WLAN_PASS);
  
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  MQTT_connect();

  setup_GPS();
  
  setup_BMP();
  
  setup_MPU();
  
  setup_DHT();
  
  setup_Camera(); 

  pinMode(GPIO_BUZZER, OUTPUT);
  Serial.println("Modo dos pinos definidos!\n");

  //The function above will be used to vinculate the buzzer pin with one of the PWM channel, in order to generate the waveform needed
  ledcSetup(GPIO_BUZZER, BUZZER_FREQUENCY, BUZZER_FREQUENCY_RESOLUTION);
  ledcAttachPin(GPIO_BUZZER, BUZZER_PWM_CHANNEL);
  Serial.println("Canal PWM do buzzer configurado!\n");

  UBaseType_t uxHighWaterMarkParseGPS = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_GPS, "Parse GPS", uxHighWaterMarkParseGPS, NULL, 2, &ParseGPSTaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse GPS' criada com sucesso!\n");
  }

  UBaseType_t uxHighWaterMarkParseBMP = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_BMP, "Parse BMP", uxHighWaterMarkParseBMP, NULL, 2, &ParseBMPTaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse BMP' criada com sucesso!\n");
  }

  UBaseType_t uxHighWaterMarkParseMPU = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_MPU, "Parse MPU", uxHighWaterMarkParseMPU, NULL, 2, &ParseMPUTaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse MPU' criada com sucesso!\n");
  }

  UBaseType_t uxHighWaterMarkParseDHT = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_DHT, "Parse DHT", uxHighWaterMarkParseDHT, NULL, 2, &ParseDHTTaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse DHT' criada com sucesso!\n");
  }

  UBaseType_t uxHighWaterMarkParseCamera = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_Camera, "Parse Camera", uxHighWaterMarkParseCamera, NULL, 2, &ParseCameraTaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse Camera' criada com sucesso!\n");
  }

  buzz();
}

void loop() {

}

void setup_GPS() {

}
  
void setup_BMP() {
  if (!bmp.begin()) {
    Serial.println("Could not find a valid BMP280 sensor, check wiring or try a different address!");
  }

  /* Default settings from datasheet. */
  bmp.setSampling(Adafruit_BMP280::MODE_NORMAL,     /* Operating Mode. */
                  Adafruit_BMP280::SAMPLING_X2,     /* Temp. oversampling */
                  Adafruit_BMP280::SAMPLING_X16,    /* Pressure oversampling */
                  Adafruit_BMP280::FILTER_X16,      /* Filtering. */
                  Adafruit_BMP280::STANDBY_MS_500); /* Standby time. */
}
  
void setup_MPU() {
  if (!mpu.begin()) {
    Serial.println("Failed to find MPU6050 chip");
  }

  mpu.setAccelerometerRange(MPU6050_RANGE_2_G);

  mpu.setGyroRange(MPU6050_RANGE_250_DEG);

  mpu.setFilterBandwidth(MPU6050_BAND_5_HZ);

}

void setup_DHT() {
  dht.begin();
}
  
void setup_Camera() {

}

void MQTT_connect() {
  int8_t ret;

  // Stop if already connected.
  if (mqtt.connected()) {
    return;
  }

  uint8_t retries = 3;
  while ((ret = mqtt.connect()) != 0) { // connect will return 0 for connected
       Serial.println(mqtt.connectErrorString(ret));
       Serial.println("Retrying MQTT connection in 5 seconds...");
       mqtt.disconnect();
       delay(5000);  // wait 5 seconds
       retries--;
       if (retries == 0) {
         // basically die and wait for WDT to reset me
         while (1);
       }
  }
}

void buzz() {
  ledcWriteTone(BUZZER_PWM_CHANNEL, BUZZER_FREQUENCY);
  delay(BUZZER_DURATION);
  ledcWriteTone(BUZZER_PWM_CHANNEL, NO_TONE_FREQUENCY);
  
  #ifdef ISDEBUG
  Serial.println("BIP!\n");
  #endif
}