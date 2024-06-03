//https://rxdb.info/quickstart.html
//https://github.com/pubkey/rxdb/blob/master/examples/node/src/database.js

require('babel-polyfill');

const Database = {};

const { createRxDatabase,
    addRxPlugin } = require('../node_modules/rxdb');

const { RxDBDevModePlugin } = require('../node_modules/rxdb/plugins/dev-mode');

const { getRxStorageMemory } = require('../node_modules/rxdb/plugins/storage-memory');

addRxPlugin(RxDBDevModePlugin);

const positionReportSchema = {
    title: 'Position Report Schema',
    description: 'DroneTag position report',
    version: 0,
    primaryKey: 'id',
    type: 'object',
    properties: {
        "id": {
            type: 'string',
            primary: true,
            maxLength: 100
        },
        "time": {
            type: 'string',
            maxLength: 100
        },
        "latitude": {
            type: 'number'
        },
        "longitude": {
            type: 'number'
        },
        "altitude": {
            type: 'number'
        },
        "pressure": {
            type: 'number'
        },
        "altitudePressure": {
            type: 'number'
        },
        "height": {
            type: 'number'
        },
        "velocityX": {
            type: 'number'
        },
        "velocityY": {
            type: 'number'
        },
        "velocityZ": {
            type: 'number'
        },
        "horizontalAccuracy": {
            type: 'number'
        },
        "verticalAccuracy": {
            type: 'number'
        },
        "speedAccuracy": {
            type: 'number'
        },
        "timeReceived": {
            type: 'string',
            maxLength: 100
        },
        "uasId": {
            type: 'string',
            maxLength: 200
        },
        "seqNumber": {
            type: 'integer'
        },
        "geoHash": {
            type: 'string',
            maxLength: 200
        },
        "insideRegion": {
            type: 'boolean'
        },
        "belowMaxAltitude": {
            type: 'boolean'
        },
        "inOtherRegion": {
            type: 'boolean'
        },
        "myRegionInvaded": {
            type: 'boolean'
        },
        "private": {
            type: 'boolean'
        },
        "flightId": {
            type: 'string',
            maxLength: 250
        }
    },
    required: ['id']
};

const create = async () => {

    const database = await createRxDatabase({
        name: 'angularapplicationapidb',
        storage: getRxStorageMemory()
    });

    await database.addCollections({
        positionreport: {
            schema: positionReportSchema
        }
    });

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

let databasePromise=null;
Database.get = async () => {
    if (!databasePromise) {
        databasePromise = create();
    }
    return databasePromise;
};

module.exports = Database;