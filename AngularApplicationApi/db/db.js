//https://rxdb.info/quickstart.html
//https://github.com/pubkey/rxdb/blob/master/examples/node/src/database.js

require('babel-polyfill');

const database = {};

const {createRxDatabase,
    addRxPlugin} = require('../node_modules/rxdb');

const {RxDBDevModePlugin} = require('../node_modules/rxdb/plugins/dev-mode');

const {getRxStorageDexie} = require('../node_modules/rxdb/plugins/storage-dexie');

addRxPlugin(RxDBDevModePlugin);

const angularApplicationApiSchema = {};

const create = async ()=>{
    
    const database = await createRxDatabase({
        name: 'angularapplicationapidb',
        storage: getRxStorageDexie()
    });
    
    await database.addCollections({
    'angularApplicationApi':{
        'schema': angularApplicationApiSchema
    }});
};

let databasePromise;
database.get = async () =>{
    if(!databasePromise){
        databasePromise = create();
    }
    return databasePromise;
};

module.exports = database;