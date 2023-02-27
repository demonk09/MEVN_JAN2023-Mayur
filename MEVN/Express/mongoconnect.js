let MongoClient = require('mongodb').MongoClient;
const url ="mongodb://localhost:27017/";

(async()=>{
    let client = await MongoClient.connect(url,{useNewUrlParser:true});
    let db=client.db('social');
    try
})