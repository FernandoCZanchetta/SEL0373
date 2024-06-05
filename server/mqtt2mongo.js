const { MongoClient } = require('mongodb');
const mongodbURI = 'mongodb://username:password@server.mongohq.com:port/database';
const mongodbClient = new MongoClient(mongodbURI);
const dbName = 'SharpProbe';
const collectionName = '';

async function appendData (doc) {
    try {
        const db = mongodbClient.db(dbName);
        const collection = db.collection(collectionName);

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
        latitude: "",
        longitude: "",
    }

    appendData(document);
}

main()
    .then(console.log)
    .catch(console.error)
    .finally(async () => await mongodbClient.close());

/*var dotenv = require('dotenv').config();
var mqtt = require('mqtt');
var deviceRoot = "demo/device/";
var collection, client;

function setupCollection (err, db) {
    if (err) throw err;

    collection = db.collection("test_mqtt");
    client = mqtt.createClient(1883, 'localhost');
    client.subscribe(deviceRoot + "+");
    client.on('message', insertEvent);
}*/