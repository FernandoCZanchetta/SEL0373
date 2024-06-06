const dotenv = require('dotenv').config();
const { MongoClient } = require('mongodb');
const mongodbURI = `mongodb+srv://${encodeURIComponent(process.env.MONGO_USERNAME)}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_CLUSTER}.qieglpc.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_APPNAME}`;
const mongodbClient = new MongoClient(mongodbURI);
const mqtt = require('mqtt');
const mqttClient = mqtt.connect(`mqtt://${process.env.MQTT_HOST}`, { username: process.env.MQTT_USERNAME , password: process.env.MQTT_PASSWORD });

const mqttTopics = [
    "sharp_probe/latitude",
    "sharp_probe/longitude",
    "sharp_probe/altitude",
    "sharp_probe/ano",
    "sharp_probe/mes",
    "sharp_probe/dia",
    "sharp_probe/hora",
    "sharp_probe/minuto",
    "sharp_probe/segundo",
    "sharp_probe/pressão",
    "sharp_probe/temperatura_BME",
    "sharp_probe/altitude_BME",
    "sharp_probe/umidade_BME",
    "sharp_probe/aceleração_x",
    "sharp_probe/aceleração_y",
    "sharp_probe/aceleração_z",
    "sharp_probe/angulo_x",
    "sharp_probe/angulo_y",
    "sharp_probe/angulo_z",
    "sharp_probe/temperatura_mpu",
    "sharp_probe/umidade_dht",
    "sharp_probe/temperatura_dht",
    "sharp_probe/sensação_termica",
];

var latitude = 0, longitude = 0, altitude = 0, year = 0, month = 0, day = 0, hour = 0, minute = 0, second = 0;
var pressure = 0, temperature_BME = 0, altitude_BME = 0, humidity_BME = 0;
var a_x = 0, a_y = 0, a_z = 0, g_x = 0, g_y = 0, g_z = 0, temperature_MPU = 0;
var humidity_DHT = 0, temperature_DHT = 0, heatindex = 0;
var pcktid = 0;

async function appendData (doc) {
    try {
        const db = mongodbClient.db(process.env.MONGO_DBNAME);
        const collection = db.collection(process.env.MONGO_COLLECTIONNAME);

        const result = await collection.insertOne(doc);

        console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } catch (error) {
        console.error(error);
    }
}

async function parseMQTT () {

    mqttClient.on('message', (topic, message) => {
        switch(topic) {
            case mqttTopics[0]: {
                latitude = message;
                return createDocument();
            }
            case mqttTopics[1]: {
                longitude = message;
                return createDocument();
            }
            case mqttTopics[2]: {
                altitude = message;
                return createDocument();
            }
            case mqttTopics[3]: {
                year = message;
                return createDocument();
            }
            case mqttTopics[4]: {
                month = message;
                return createDocument();
            }
            case mqttTopics[5]: {
                day = message;
                return createDocument();
            }
            case mqttTopics[6]: {
                hour = message;
                return createDocument();
            }
            case mqttTopics[7]: {
                minute = message;
                return createDocument();
            }
            case mqttTopics[8]: {
                second = message;
                return createDocument();
            }
            case mqttTopics[9]: {
                pressure = message;
                return createDocument();
            }
            case mqttTopics[10]: {
                temperature_BME = message;
                return createDocument();
            }
            case mqttTopics[11]: {
                altitude_BME = message;
                return createDocument();
            }
            case mqttTopics[12]: {
                humidity_BME = message;
                return createDocument();
            }
            case mqttTopics[13]: {
                a_x = message;
                return createDocument();
            }
            case mqttTopics[14]: {
                a_y = message;
                return createDocument();
            }
            case mqttTopics[15]: {
                a_z = message;
                return createDocument();
            }
            case mqttTopics[16]: {
                g_x = message;
                return createDocument();
            }
            case mqttTopics[17]: {
                g_y = message;
                return createDocument();
            }
            case mqttTopics[18]: {
                g_z = message;
                return createDocument();
            }
            case mqttTopics[19]: {
                temperature_MPU = message;
                return createDocument();
            }
            case mqttTopics[20]: {
                humidity_DHT = message;
                return createDocument();
            }
            case mqttTopics[21]: {
                temperature_DHT = message;
                return createDocument();
            }
            case mqttTopics[22]: {
                heatindex = message;
                return createDocument();
            }
        };
    });
}

async function createDocument () {
    const document = {
        _packet_id: pcktid,
        _location: {
            _latitude: parseFloat(latitude.toString()),
            _longitude: parseFloat(longitude.toString()),
            _altitude: parseFloat(altitude.toString()),
        },
        _time: {
            _year: parseInt(year.toString()),
            _month: parseInt(month.toString()),
            _day: parseInt(day.toString()),
            _hour: parseInt(hour.toString()),
            _minute: parseInt(minute.toString()),
            _second: parseInt(second.toString()),
        },
        _BME_readings: {
            _altitude: parseFloat(altitude_BME.toString()),
            _humidity: parseFloat(humidity_BME.toString()),
            _pressure: parseFloat(pressure.toString()),
            _temperature: parseFloat(temperature_BME.toString()),
        },
        _MPU_readings: {
            _ax: parseFloat(a_x.toString()),
            _ay: parseFloat(a_y.toString()),
            _az: parseFloat(a_z.toString()),
            _gx: parseFloat(g_x.toString()),
            _gy: parseFloat(g_y.toString()),
            _gz: parseFloat(g_z.toString()),
            _temperature: parseFloat(temperature_MPU.toString()),
        },
        _DHT_readings: {
            _humidity: parseFloat(humidity_DHT.toString()),
            _temperature: parseFloat(temperature_DHT.toString()),
            _heatindex: parseFloat(heatindex.toString()),
        },
    };

    appendData(document);

    pcktid++;
}

async function main () {
    await mongodbClient.connect();
    console.log('Connected successfully to server');
    
    mqttClient.subscribe(mqttTopics);
    console.log('Subscribed successfully to this topics:');
    console.log(mqttTopics);
    
    parseMQTT();
}

main()
    .then(console.log)
    .catch(console.error)
    //.finally(await mongodbClient.close());