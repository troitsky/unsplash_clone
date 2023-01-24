const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')
const bodyParser = require('body-parser');


const app = express()
const port = 3000
const imageRouter = require('./routers/imageRouter')

async function main() {
  mongoose.set('strictQuery', true);
  await mongoose.connect('mongodb://127.0.0.1:27017/unsplashClone') 
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

main().then(() => console.log("Database connected!")).catch(err => console.log(err));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(express.static('uploads'))

app.use('/', imageRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})