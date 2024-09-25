
const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const { MongoClient, ObjectId } = require('mongodb');
const { init_db, get_db} = require ('./db');
const { get_collection, update_data_in_collection, register_data_in_collection } = require ('./user/db')
const compression = require('compression');

app.use(compression());

app.use(bodyParser.json({ limit: "200mb",  extended: false, parameterLimit: 1000000 }));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });
  


app.listen(3000, async () => {
    await init_db();
    console.log('server started');
  });

app.get('/', (req,res)=> {
    res.sendStatus(200)
})

app.get('/user/:wallet', async (req,res)=>{
  
    let all_users =  await get_collection('users')

    let user = all_users.find( user => user._id.toLowerCase().includes(req.params.wallet.toLowerCase()))

    if (!user) {
        let new_user = {
            _id: req.params.wallet.toLowerCase(),
            name:'',
            backupAddress:'',
            balance:[],
            inventory:[],
            open_orders:[],
            stake:[]
        }
        await register_data_in_collection('users', new_user);

        let all_users =  await get_collection('users')

        let user = all_users.filter( user => user._id.toLowerCase().includes(req.params.wallet.toLowerCase()))

        res.send(user)
    } else {
        res.send(user)
    }

})

app.post('/user/update', async (req,res) => {
    console.log(req.body.user)
    res.sendStatus(200)
})