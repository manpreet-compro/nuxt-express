const express = require('express')
const cors = require('cors')
const app = express()
const port = 8080

app.use(function(req, res, next) {
  res.setHeader('charset', 'utf-8')
  next();
})

app.use(cors())

app.get('/count', (req, res) => {
  res.json({
    count: 1454
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})