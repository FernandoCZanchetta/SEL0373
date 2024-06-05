const dotenv = require('dotenv').config()
const { MongoClient } = require('mongodb');
const mongodbURI = `mongodb+srv://${encodeURIComponent(process.env.MONGO_USERNAME)}:${encodeURIComponent(process.env.MONGO_PASSWORD)}@${process.env.MONGO_CLUSTER}.qieglpc.mongodb.net/?retryWrites=true&w=majority&appName=${process.env.MONGO_APPNAME}`;
const mongodbClient = new MongoClient(mongodbURI);

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

async function main () {
    await mongodbClient.connect();
    console.log('Connected successfully to server');

    const document = {
        _packet_id: 1,
        _location: {
            _latitude: -11.031942,
            _longitude: -28.193829,
            _altitude: 842.139284,
        },
        _time: {
            _year: 2024,
            _month: 6,
            _day: 19,
            _hour: 18,
            _minute: 29,
            _second: 41,
        },
        _BME_readings: {
            _altitude: 852.124921,
            _humidity: 43.124015,
            _pressure: 149.124912,
            _temperature: 24.140214,
        },
        _MPU_readings: {
            _ax: 9.149211,
            _ay: 0.149112,
            _az: 0.219124,
            _gx: 230.149124,
            _gy: 184.240129,
            _gz: 78.140124,
            _temperature: 27.124912,
        },
        _DHT_readings: {
            _humidity: 33.214012,
            _temperature: 29.140129,
            _heatindex: 29.847124,
        },
    };

    appendData(document);
}

main()
    .then(console.log)
    .catch(console.error)
    //.finally(await mongodbClient.close());

/*var mqtt = require('mqtt');
var deviceRoot = "demo/device/";
var collection, client;

function setupCollection (err, db) {
    if (err) throw err;

    collection = db.collection("test_mqtt");
    client = mqtt.createClient(1883, 'localhost');
    client.subscribe(deviceRoot + "+");
    client.on('message', insertEvent);
}*/