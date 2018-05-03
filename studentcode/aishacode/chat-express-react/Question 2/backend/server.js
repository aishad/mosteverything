const express = require('express')
const app = express()
const bodyParser = require('body-parser');

let serverState = {
    messages: []
}

app.use(bodyParser.raw({ type: "*/*" }))

app.get('/messages', (req,res)=>{
res.send(JSON.stringify(serverState.messages))
})

app.post('/sendmessage', (req, res) =>{
    let body = JSON.parse(req.body.toString())
    serverState.messages.push(body)
    res.send("OK!")
})

app.listen(4000)