/*
  This code sends files to user, when He types out address in the browser.
*/

const express = require('express')
const app = express()
app.use(express.static('public'))
app.listen(3000, () => {
  console.log('HTTP server started. Game files are being served at localhost:3000')
})