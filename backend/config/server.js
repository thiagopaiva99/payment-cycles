const bodyParser = require('body-parser')
const express    = require('express')
const server     = express()
const port       = 3003

server.use( bodyParser.urlencoded({ extended: true }) )
server.use( bodyParser.json() )

server.listen(port, () => console.log( `Server running on port ${port}.` ))
