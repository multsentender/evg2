const express = require('express')
const router = require('./router')

const app = express()


app.use('/', router)

app.listen(8000, () => {
    console.log(8000, 'Server has been starter')
})