const { MongoClient, ObjectId } = require('mongodb');
const url = 'mongodb+srv://bbtc-api:D4vHmLDqX8QOUFPU@cluster0.ohn9rls.mongodb.net/?';
const dbName = 'arkeyd_exchange';
let db;


async function init_db(){
    MongoClient.connect(url, async function(err, client) {

        if (err) throw err;
      
        db = await client.db(dbName);
      
      });
}

async function get_db() {
    return db || await init_db()
}

module.exports = {
    init_db,
    get_db
};
