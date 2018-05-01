var express = require ('express')
var app =express()
app.get('/', (req,res)=>{
    res.send("Goodbye World");
})
app.listen(3000, console.log("Javascript rocks!"))