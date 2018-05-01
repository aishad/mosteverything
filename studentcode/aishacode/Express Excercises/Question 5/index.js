
const express = require('express')
const app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

var webpage =

`
<form action="/postendpoint" method="POST">
  Username: <input type="text" name="username"/>
  Password: <input type="text" name="password"/>
  <input type="submit"/>
</form>
`

app.get('/', (req, res) => res.send(webpage))
app.post('/postendpoint', (req, res) => {


     var input =(JSON.parse(req.body.toString()))

    if(input.username.length > 1 && input.password.length > 1){
    res.send("Success")}

    else res.send("Failure")

     
})



app.listen(3000, () => console.log('Example app listening on port 3000!'))