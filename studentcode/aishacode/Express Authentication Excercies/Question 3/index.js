const express = require('express')
const app = express()
const fs = require('fs')
var bodyParser = require('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))

let signup=
`
<form action ="/signup" method="post">
Username <input name="username" />
Password <input  name="password" />
<button type="submit">Submit</button>
</form>
`

let login=
`
<form action="/login" method="post>
Username <input name="username" />
Password <input name="password" />
<button type="submit>Submit</button>
</form>
`

let data = fs.readFileSync('./data.txt');

app.get('/', (req, res)=>{

    res.send(signup)

})

app.get('/login', )

app.post('/signup', (req, res)=>{

    let contents = (req.body.toString())
    let parts =contents.split("&").map((elem) =>elem.split("="))
    let username = parts[0][1]
    let password = parts[1][1]

    if(data[username]){
        res.send("./login")
        if (data[username] === username && data[username].password === password)
        res.send("You're logged in!")
        else res.send("Wrong password, try again")
    }
    else {
        data[username] = {password}
        fs.writeFileSync('data.txt', JSON.stringify(data))
        res.send("You've created an accout!")
    }
})

app.listen(3000)