const express = require('express')
const app = express()
app.use( (req, res) => {
    res.status(200).send('<h1>Isso é apenas um teste</h1>')
})


module.exports = app