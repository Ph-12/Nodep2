var express = require('express');
var rotas = express.Router();
const db = require('../services/db')
const { ObjectId } = require('mongodb');
// define the home page route
db.connectDB(() => {

     const checkBody = (req, res, next) => {
          if ("_id" in req.body) {
               req.body._id = ObjectId(req.body._id)
          }
          next()
     }

     rotas.get('/read', async (req, res) => {
          const results = await db.findDocuments()
          res.send(results)
          console.log(results)
     });
     
     rotas.post('/creat', async (req, res) => {
          const results = await db.insertDocuments(req.body)
          res.send(results)
          console.log(req.body)
     });

     rotas.patch('/update', checkBody, async (req, res) => {
          const results = await db.updateDocuments(req.body)
          res.send(results)
          console.log(req.body)
     });
     
     rotas.delete('/delete', checkBody, async (req, res) => {
          const results = await db.removeDocuments(req.body)
          res.send(results)
          console.log(req.body)
     });

})


module.exports = rotas;