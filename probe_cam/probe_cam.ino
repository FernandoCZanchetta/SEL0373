/*Board - Arduino IDE: ESP32 Dev Module*/
//#define ISDEBUG 1
//#define ISPRETTYDEBUG 1

TaskHandle_t ParseCameraTaskHandle;

#include "Wire.h"
#include "Wifi.h"
#include "Adafruit_MQTT.h"
#include "Adafruit_MQTT_Client.h"

enum class PARSE_ERROR_CODES {
  PARSE_SUCCESS,
  PARSE_DATA_NOT_APPENDED,
  PARSE_DATA_NOT_PRINTED
};
using parse_error_t = PARSE_ERROR_CODES;

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

  setup_Camera(); 

  UBaseType_t uxHighWaterMarkParseCamera = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_Camera, "Parse Camera", uxHighWaterMarkParseCamera, NULL, 5, &ParseCameraTaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse Camera' criada com sucesso!\n");
  }

  Serial.println("Setup da sonda concluído!");
}

void loop() {

}

void setup_Camera() {

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