
import express from 'express'
import http from 'http'
import cors from 'cors'
import { json, urlencoded } from 'body-parser'
import controllers from './controllers/mailController'

const express = 'express'
const app = express()
 
app.use(cors())
 
app.use(json({ limit: '5mb' }))
app.use(urlencoded({ limit: '5mb' }))

app.use(express.static('public'))

const server = http.createServer(app)
 
app.route('/api/send_mail')
   .post(controllers.send)

const port = process.env.PORT || 3000

server.listen(port, function () {
    console.log('Express server listening on %d, in %s mode', port, app.get('env'))
});