const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url)

const dbName = 'p2-node';
var _db;

//Conexao sem perde a conexao

function connectDB(callback) {
     client.connect(function (err) {
          console.log("Conexão feita com sucesso")
          _db = client.db(dbName)
          callback(err)
     })
}


const readdocument = async () => {
     const collection = _db.collection(
          'p2-node-collection'
          );

     const results = await collection.find({}).toArray();

     return results
}

// Teste banco
connectDB(async () => {
     const results = await readdocument()
     console.log(results)
})