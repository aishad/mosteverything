const express = require('express');
const app = express();
const fs = require('fs')

app.get('/home',  (req, res) =>{

for (let i =0; i<10; i++){
   var a = (fs.readFileSync('numbers.txt').toString())
    fs.writeFileSync('numbers.txt',  a+'\n'+ Math.floor(Math.random()*100))
}
res.send("Writting numbers....")
})

app.listen(3000, console.log("listening"))
