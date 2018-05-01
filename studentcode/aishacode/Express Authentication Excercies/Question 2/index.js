const express = require('express');
const app = express();
const fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

let webpage2 =
    `
<form action= "/create" method="post">
What is your favourite pet?
<input name="animal" />
<button type="submit">Submit</button>
 </form>
`

let webpage =
    `
<form action= "/login" method="post">
Username<input name="username" />
Password<input name="password" />
<button type="submit">Submit</button>
 </form>
`

let info = fs.readFileSync('./data.txt');
let username;

app.get('/hello', (req, res) => {

    res.send(webpage);
})


app.post('/login', (req, res) => {

    let contents = (req.body.toString()); console.log(contents)
    let parts = contents.split("&").map((elem) => elem.split("="))
    username = parts[0][1]
    let password = parts[1][1]
    if (info[username]) {
        if(info[username].animal)
            res.send("I like " + info[username].animal)
        else res.send(webpage2)
    }
    else {
        let animal = ""
        info[username] = {password, animal}
         fs.writeFileSync('data.txt', JSON.stringify(info));
        res.send(webpage2)
    }
})

app.post('/create', (req,res)=>{
    let contents = (req.body.toString()); console.log(contents)
    let part = contents.split("=")
    info[username].animal = part[1]
    res.send("I like "+ part[1])
})


app.listen(3000, console.log("listening..."))