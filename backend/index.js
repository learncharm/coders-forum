const connectToMongo = require("./db");
const express = require('express')
var cors = require('cors')

connectToMongo();

const app = express()
const port = 5000

app.use(cors())
app.use(express.json());   // this middleware is used for req.body

// available routes

app.use('/api/category',require('./routes/category'));
app.use('/api/auth',require('./routes/auth'));
app.use('/api/thread',require('./routes/thread'));
app.use('/api/comment',require('./routes/comment'));

app.listen(port, () => {
  console.log(`Coders-Forum app listening on port ${port}`)
})
