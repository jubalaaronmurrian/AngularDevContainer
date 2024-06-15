const db = require('../db/db');
const router = require("express").Router();
let database=undefined;


router.get('/positionreport/:id', async (req, res, next) => {

    if(database == undefined){
        database = await initDatabase();
    }

    let positionreport = await database.positionreport.find({
        selector: {
            id: {
                $eq: req.params['id']
            }
        }
    }).exec();
    res.send(positionreport);
});

router.get('/positionreport', async (req, res, next) => {

    if(database == undefined){
        database = await initDatabase();
    }

    let positionreport = await database.positionreport.find().exec();
    res.send(positionreport);
});

router.post('/positionreport', async (req, res, next) => {

    if(database == undefined){
        database = await initDatabase();
    }

    const json = req.body;
    await database.positionreport.insert(json);
    res.status(201).json(json);
});

const initDatabase = async()=>{

const { getRxStorageMemory } = require('../node_modules/rxdb/plugins/storage-memory');
const rxDatabaseConfiguration = {
    name: 'angularapplicationapidb',
    storage: getRxStorageMemory()
};

const positionReportSchema = require('../db/schemas/positionReportSchema');
const rxDatabaseCollections = {
    positionreport: {
        schema: positionReportSchema
    }
};

//Create database
const database = await db.get(rxDatabaseConfiguration,rxDatabaseCollections);
//Seed database
await database.positionreport.insert({
    "id": "1",
    "time": "2023-01-29T08:24:32",
    "latitude": 28.38803482055664,
    "longitude": -80.60678100585938,
    "altitude": -31,
    "pressure": 1025.8500000000001,
    "altitudePressure": -104.38,
    "height": -0.11,
    "velocityX": 0,
    "velocityY": 0,
    "velocityZ": 0,
    "horizontalAccuracy": 10,
    "verticalAccuracy": 4,
    "speedAccuracy": 4,
    "timeReceived": "2023-01-29T08:24:32.341412",
    "uasId": "1596F350916066929723",
    "seqNumber": 21,
    "geoHash": "djn9mxzumc5x",
    "insideRegion": true,
    "belowMaxAltitude": true,
    "inOtherRegion": false,
    "myRegionInvaded": false,
    "private": false,
    "flightId": "0af0624f-b2b5-49de-99e7-aa77d0eca24f"
});

return database;

};

module.exports = router;