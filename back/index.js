const express = require('express')
const path = require('path')

const router = require('./router')

const app = express()
const PORT = 5000

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.json())
app.use('/uploads', express.static(path.resolve(__dirname, 'uploads'), ))
app.use('/', router)

app.listen(PORT, () => {
    console.log(PORT, 'Server has been starter')
})