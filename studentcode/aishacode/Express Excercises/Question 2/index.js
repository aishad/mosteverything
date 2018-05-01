const express = require('express')
const app = express()



function getColor(){
    return color = Math.random()*256;
}

app.get('/hello',function(req,res){
    res.send('<html><body bgcolor=rgb('+getColor()+','+getColor()+','+getColor()+')><h1> Hello World</h1></body></html>')
    
})
app.listen(3000, function(){
    console.log("the server is running")
})
