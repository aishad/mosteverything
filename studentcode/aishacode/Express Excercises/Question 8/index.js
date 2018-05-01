const express = require ('express')
const app = express();
var bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

var webpage =
`
<form action="/submitForm" method="POST">
Username: <input type="text" name="username" />
Password: <input type="text" name="password" />
repeatPassword: <input type="text" name="repeatPassword" />
<input type="submit"/>
</form>
`

app.get('/', (req, res) => res.send(webpage))
app.post('/submitForm', (req, res) => {

    var username = req.body.username
    var password = req.body.password
    var repeatPassword = req.body.repeatPassword

     if (username.length >1 && password.length >1 && repeatPassword === password){
            res.send("success")
     }
     else  res.send("failure")
    
    
    })
    
    
    app.listen(3000, () => console.log('Example app listening on port 3000!'))

