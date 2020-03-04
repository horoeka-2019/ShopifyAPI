const path = require('path')
const express = require('express')
const cors = require('cors')


const server = express()

const router = require('./routes/routes')

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
server.use(cors()) // our server is 3000 our client is 8080

server.use('/api/v1', router)



module.exports = server