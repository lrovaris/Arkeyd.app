let md5 = require('md5')

const db_utils = require('../db.js');
const {ObjectId} = require("mongodb");

async function get_collection(collection) {
    let db_conn = await db_utils.get_db();

    return new Promise((resolve, reject) => {
        db_conn.collection(collection).find({}).toArray((err, result) =>{
            if(err){
                reject(err);
            }
            else {
                resolve(result);
            }
        });
    });
}



async function register_data_in_collection(collection, data) {

    let db_conn = await db_utils.get_db();

    return new Promise((resolve, reject) => {
        db_conn.collection(collection).insertOne(data, (err, result) => {
            if(err){
                reject(err);
            }else {
                resolve(result);
            }
        });
    });
}

async function update_data_in_collection(collection, data) {

    let db_conn = await db_utils.get_db();

    return new Promise((resolve, reject) => {
        db_conn.collection(collection).replaceOne({name: data.name }, data,{w: "majority", upsert: false} ,(err, result) =>{

            if(err){
                reject(err);
                register_data_in_collection(collection, data);
            }else{
                if(result.modifiedCount < 1) {
                    register_data_in_collection(collection, data);
                }
                resolve(result);

            }
        });
    });
}

module.exports = { get_collection, update_data_in_collection, register_data_in_collection };
