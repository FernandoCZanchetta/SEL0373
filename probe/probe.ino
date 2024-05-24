/*Board - Arduino IDE: ESP32 Dev Module*/
//#define ISDEBUG 1
//#define ISPRETTYDEBUG 1

TaskHandle_t ParseGPSTaskHandle;
TaskHandle_t ParseBMETaskHandle;
TaskHandle_t ParseMPUTaskHandle;
TaskHandle_t ParseDHTTaskHandle;

#include "Adafruit_Sensor.h"
#include "Wire.h"
#include "Adafruit_BME280.h"
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
#define MPU_SDA 20
#define MPU_SCL 21
#define MPU_I2C_ADRESS 0x68
Adafruit_MPU6050 mpu;

//Pinos referentes ao BME (I2C):
#define BME_SDA 8
#define BME_SCL 9
#define BME_I2C_ADDRESS 0x76
#define SEALEVELPRESSURE_HPA (1013.25)
Adafruit_BME280 bme;

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

void parse_BME (*pvParameters) {
  for( ; ; ) {
    float pressure, temperature, altitude, humidity;

  
    temperature = bme.readTemperature();
    pressure = bme.readPressure();
    altitude = bme.readAltitude(SEALEVELPRESSURE_HPA);
    humidity = bme.readHumidity();

  
    //MQTT data transmission
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/pressão").publish(pressure);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/temperatura_bme").publish(temperature);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/altitude_bme").publish(altitude);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/humidade_bme").publish(humidity);

  
    #ifdef ISPRETTYDEBUG
    Serial.println("Pressão: " + (String) pressure + " hPa");
    Serial.println("Temperatura BME: " + (String) temperature + " °C");
    Serial.println("Altitude BME: " + (String) altitude + " m");
    Serial.println("Humidade BME: " + (String) humidity + " %");
    #endif
  }
}

void parse_MPU (*pvParameters) {
  for( ; ; ) {
    sensors_event_t a, g, temp;
    mpu.getEvent(&a, &g, &temp);


    //MQTT data transmission
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/aceleração_x").publish(a.acceleration.x);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/aceleração_y").publish(a.acceleration.y);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/aceleração_z").publish(a.acceleration.z);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/angulo_x").publish(g.gyro.x);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/angulo_y").publish(g.gyro.y);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/angulo_z").publish(g.gyro.z);
    Adafruit_MQTT_Publish(&mqtt, "sharp_probe/temperatura_mpu").publish(temp.temperature);


    #ifdef ISPRETTYDEBUG
    Serial.println("Aceleração Eixo-X: " + (String) a.acceleration.x + " m/s^2");
    Serial.println("Aceleração Eixo-Y: " + (String) a.acceleration.y + " m/s^2");
    Serial.println("Aceleração Eixo-Z: " + (String) a.acceleration.z + " m/s^2");
    Serial.println("Ângulo Eixo-X: " + (String) g.gyro.x + " rad/s");
    Serial.println("Ângulo Eixo-Y: " + (String) g.gyro.y + " rad/s");
    Serial.println("Ângulo Eixo-Z: " + (String) g.gyro.z + " rad/s");
    Serial.println("Temperatura MPU: " + (String) temp.temperature + " °C");
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

void setup() {
  Serial.begin(115200);
  Serial.println("Comunicação SERIAL estabelecida!\n");
  
  Wire.begin(BME_SDA, BME_SCL);
  Wire1.begin(MPU_SDA, MPU_SCL); 

  WiFi.begin(WLAN_SSID, WLAN_PASS);
  
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }

  MQTT_connect();

  setup_GPS();
  
  setup_BME();
  
  setup_MPU();
  
  setup_DHT(); 

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

  UBaseType_t uxHighWaterMarkParseBME = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_BME, "Parse BME", uxHighWaterMarkParseBME, NULL, 2, &ParseBMETaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse BME' criada com sucesso!\n");
  }

  UBaseType_t uxHighWaterMarkParseMPU = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_MPU, "Parse MPU", uxHighWaterMarkParseMPU, NULL, 2, &ParseMPUTaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse MPU' criada com sucesso!\n");
  }

  UBaseType_t uxHighWaterMarkParseDHT = 100 * configMINIMAL_STACK_SIZE;

  if ((xTaskCreate(parse_DHT, "Parse DHT", uxHighWaterMarkParseDHT, NULL, 2, &ParseDHTTaskHandle)) == pdPASS) {
    Serial.println("Tarefa 'Parse DHT' criada com sucesso!\n");
  }

  buzz();
}

void loop() {

}

void setup_GPS() {

}
  
void setup_BME() {
  if (!bme.begin(BME_I2C_ADDRESS, &Wire)) {
    Serial.println("Could not find a valid BME280 sensor, check wiring or try a different address!");
  }

  /* Default settings from datasheet. */
  bme.setSampling(Adafruit_BME280::MODE_NORMAL,       /* Operating Mode */
                  Adafruit_BME280::SAMPLING_X16,      /* Temperature Oversampling */
                  Adafruit_BME280::SAMPLING_X16,      /* Pressure Oversampling */
                  Adafruit_BME280::FILTER_X16,        /* Humidity Oversampling */
                  Adafruit_BME280::FILTER_OFF,        /* Filtering */      
                  Adafruit_BME280::STANDBY_MS_0_5);   /* Standby Time */
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

void buzz() {
  ledcWriteTone(BUZZER_PWM_CHANNEL, BUZZER_FREQUENCY);
  delay(BUZZER_DURATION);
  ledcWriteTone(BUZZER_PWM_CHANNEL, NO_TONE_FREQUENCY);
  
  #ifdef ISDEBUG
  Serial.println("BIP!\n");
  #endif
}