const express = require('express')
const app = express()


app.get('/home', function (req, res) { res.send(req.query.foo) })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

