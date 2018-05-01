const express = require ('express')
const app = express();
var bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));


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
    
    var query1=req.body.username
    var query2=req.body.password
    
    if (query1.length > 10 && query2.length >10){
        res.send("Success!")
    }
    else res.send("Failure!!")
    
});    


app.listen(3000, () => console.log('Example app listening on port 3000!'))

/*
let contents=req.body.toString().split('&');
let firstPart = contents[0]
let secontPart = contents[1]
let userPrt = firstPart.split("=")
let pswPrt = secondPart.split("=")
username = userPrt[1]
password = pswPrt[1]

if (username.length >1 && password.length >=10)

*/