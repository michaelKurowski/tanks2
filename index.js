/*
  This code sends files to user, when He types out address in the browser.
*/

const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  next()
})
app.use(express.static('public'))
app.listen(3200, () => {
  console.log('HTTP server started. Game files are being served at localhost:3200')
})