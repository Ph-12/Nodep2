const express = require('express')
const app = express()
const port = 3000
const chamarotas = require("./routes/rotas")

app.use(express.json())

app.use("/chamarotas", chamarotas)

app.get('/', (req, res) => {
     res.send('Hello World!')
})

app.listen(port, () => {
     console.log(`Example app listening at http://localhost:${port}`)
})

