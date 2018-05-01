const express = require('express');
const app = express();
const fs = require('fs')


app.get('/hello', (req,res)=>{

    for (let i = 0; i<=100; i++){
        var a = (fs.readFileSync('numbers.txt').toString())
        console.log(a)
        fs.writeFileSync('numbers.txt', a+'\n'+i)
}
    res.send("100 numbers were written to a file")
})


app.listen(3000, console.log("im listening"))