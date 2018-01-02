'use strict'

const app = require('./app')
const config = require('./config')

app.listen(config.port, (err, res) => {
    if (err) {
        return console.log(`Error al iniciar API WATSON: ${err}`)
    }
    console.log(`API WATSON corriendo en http://localhost:${config.port}`)
})
