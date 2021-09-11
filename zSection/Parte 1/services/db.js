const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'p2-node';
const client = new MongoClient(url)

//Conexao sem perde a conexao

client.connect(function (err) {
     assert.equal(null, err)
     console.log("Conexão feita com sucesso")

     const db = client.db(dbName)
     client.close()
})