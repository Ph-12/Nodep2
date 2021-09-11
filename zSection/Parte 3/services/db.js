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

const findDocuments = async () => {
     const collection = _db.collection('p2-node-collection');
     try {
          const results = await collection.find({}).toArray();
          return results
     } catch (error) {
          throw new Error(error)
     }
}

const insertDocuments = async (document) => {
     const collection = _db.collection('p2-node-collection');
     try {
          const results = await collection.insertOne(document);
          return results
     } catch (error) {
          throw new Error(error)
     }
}

const updateDocuments = async (document) => {
     const collection = _db.collection('p2-node-collection');
     try {
          const results = await collection.updateOne({ _id: document._id }, { $set: document });
          return results
     } catch (error) {
          throw new Error(error)
     }
}

const removeDocuments = async (document) => {
     const collection = _db.collection('p2-node-collection');
     try {
          const results = await collection.deleteOne({ _id: document._id });
          return results
     } catch (error) {
          throw new Error(error)
     }
}

// Teste banco
// connectDB(async () => {
//      const results = await findDocuments ()
//      console.log(results)
// })

module.exports = {
     connectDB,
     findDocuments,
     insertDocuments,
     updateDocuments,
     removeDocuments
}