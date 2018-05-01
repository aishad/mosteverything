const express = require('express')
const app = express()


app.get('/hello',function(req,res){
    res.send('<html><body><h1>hello world</h1></<body></html>')
})
app.listen(3000, function(){
    console.log("the server is running")
})
