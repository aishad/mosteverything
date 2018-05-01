const express = require('express')
const app = express()
const fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))


let info={}

try {
    info = JSON.parse(fs.readFileSync('passwords.json').toString())
} catch(err) {}

app.get('/', (req, res)=>{

    res.send(

        `<form action ="/signup" method="post">
        Username <input name="username" />
        Password <input name="password" />
        <input type="submit">
        </form>
        <form action ="/login" method="post">
        Username <input name="username" />
        Password <input name="password" />
        <input type="submit">
        </form>
        `)

})

app.post('/signup', (req,res) =>{
    let str= req.body.toString()
    let parsed  = str.split("&").map(s => s.split('='))
    let username = parsed[0][1];
    let password = parsed[1][1]
    info[username]= password
    fs.writeFileSync('passwords.txt', JSON.stringify(info))
    res.send("submitted");
});


app.post('/login', (req,res) =>{
    let str= req.body.toString()
    let parsed  = str.split('&').map(s => s.split('='))
    let username = parsed[0][1];
    let userProvidedPassword = parsed[1][1]
    if (info[username]=== userProvidedPassword){
    fs.writeFileSync('passwords.txt', JSON.stringify(info))
    res.send("login successful");
    } else {
        res.send("login failed")
    }
});


app.listen(3000, ()=>console.log("listening"))
