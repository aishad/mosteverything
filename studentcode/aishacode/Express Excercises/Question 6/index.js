const express = require ('express')
const app = express();
var bodyParser = require ('body-parser')
app.use(bodyParser.raw({ type: '*/*' }))



app.post('/postendpoint', (req, res) => {


if (JSON.parse(req.body).username ==='foo' && JSON.parse(req.body).password ==='bar'){
res.send("success")
}
else  res.send("failure")


})


app.listen(3000, () => console.log('Example app listening on port 3000!'))


//let contents=JSON.parse(re.body.toString
//if(contents['username']==='foo' &&
//contents['password']==='bar')