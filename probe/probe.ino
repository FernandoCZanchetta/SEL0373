/*Board - Arduino IDE: ESP32 Dev Module*/
//#define ISDEBUG 1
//#define ISPRETTYDEBUG 1

TaskHandle_t ParseGPSTaskHandle;
TaskHandle_t ParseBMPTaskHandle;
TaskHandle_t ParseMPUTaskHandle;
TaskHandle_t ParseDHTTaskHandle;
TaskHandle_t ParseCameraTaskHandle;

#include "SPI.h"
#include "Wire.h"
#include "Adafruit_BMP280.h"

enum class PARSE_ERROR_CODES {
  PARSE_SUCCESS,
  PARSE_DATA_NOT_APPENDED,
  PARSE_DATA_NOT_PRINTED
};
using parse_error_t = PARSE_ERROR_CODES;

#define GPIO_BUZZER 24

#define BUZZER_PWM_CHANNEL 0 //Avoid use of channels 2, 3, 10, 11, as they make use of timer 1, which is being used for other purposes.
//More info in: https://github.com/espressif/arduino-esp32/blob/master/cores/esp32/esp32-hal-ledc.c
#define NO_TONE_FREQUENCY 0
#define BUZZER_FREQUENCY 6000
#define BUZZER_FREQUENCY_RESOLUTION 13 //bits
#define BUZZER_DURATION 750

//Pinos referentes ao BMP (I2C):
#define BMP_SDA 10
#define BMP_SCL 11
Adafruit_BMP280 bmp;

void parse_GPS (*pvParameters) {
  for( ; ; ) {
    float latitude, longitude, altitude;
    float hours, minutes, seconds;

  
    GPS.pegar_dados();

  
    //MQTT data transmission
    MQTT.publish(tópico---->latitude);
    MQTT.enviar_dados(tópico---->longitude);
    MQTT.enviar_dados(tópico---->altitude);
    MQTT.enviar_dados(tópico---->hours);
    MQTT.enviar_dados(tópico---->minutes);
    MQTT.enviar_dados(tópico---->seconds);
    

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
    MQTT.enviar_dados(tópico---->pressure);
    MQTT.enviar_dados(tópico---->BMP_temperature);

  
    #ifdef ISPRETTYDEBUG
    Serial.println("Pressão: " + (String) pressure + "\n");
    Serial.println("Temperatura_BMP: " + (String) temperature + "\n");
    #endif
  }
}

void parse_MPU (*pvParameters) {
  for( ; ; ) {
    float a_x, a_y, a_z;
    float angle_x, angle_y, angle_z;

  
    MPU.pegar_dados();

  
    //MQTT data transmission
    MQTT.enviar_dados(tópico---->x_aceleration);
    MQTT.enviar_dados(tópico---->y_aceleration);
    MQTT.enviar_dados(tópico---->z_aceleration);
    MQTT.enviar_dados(tópico---->x_angle);
    MQTT.enviar_dados(tópico---->y_angle);
    MQTT.enviar_dados(tópico---->z_angle);


    #ifdef ISPRETTYDEBUG
    Serial.println("Aceleração Eixo-X: " + (String )a_x + "\n");
    Serial.println("Aceleração Eixo-Y: " + (String )a_y + "\n");
    Serial.println("Aceleração Eixo-Z: " + (String )a_z + "\n");
    Serial.println("Ângulo Eixo-X: " + (String )angle_x + "\n");
    Serial.println("Ângulo Eixo-Y: " + (String )angle_y + "\n");
    Serial.println("Ângulo Eixo-Z: " + (String )angle_z + "\n");
    #endif
  }
}

void parse_DHT (*pvParameters) {
  for( ; ; ) {
    float humidity, temperature;

  
    DHT.pegar_dados();

  
    //MQTT data transmission
    MQTT.enviar_dados(tópico---->humidity);
    MQTT.enviar_dados(tópico---->DHT_temperature);


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

  [SPI.begin(...)];
  
  [Wire.begin(...)];
  [Wire1.begin(...)];

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

}
  
void setup_DHT() {

}
  
void setup_Camera() {

}

void buzz() {
  ledcWriteTone(BUZZER_PWM_CHANNEL, BUZZER_FREQUENCY);
  delay(BUZZER_DURATION);
  ledcWriteTone(BUZZER_PWM_CHANNEL, NO_TONE_FREQUENCY);
  
  #ifdef ISDEBUG
  Serial.println("BIP!\n");
  #endif
}