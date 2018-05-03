const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.raw({ type: "*/*" }))

let serverState ={
    messages: []
}

app.get('/messages', (req,res) =>{
    res.send(JSON.stringify(serverState.messages))
})

app.post('/sendmessage', (req, res) =>{
    console.log("hello")
    let body = JSON.parse(req.body.toString())
    serverState.messages.push(body)
    res.send("ok") 
})


app.listen(4000, ()=>console.log("listening..."))