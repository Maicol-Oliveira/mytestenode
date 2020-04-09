const express = require('express')
const app = express()
app.use( (req, res) => {
    res.status(200).send({
        mensagem: 'Maicol Teste'
    })
})


module.exports = app