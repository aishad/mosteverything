const express = require('express');
const app = express();
const fs = require('fs')


    let content = (fs.readFileSync('../Question 2/numbers.txt').toString())
    let numbers = content.split("\n")
    // numbers=numbers.filter(x=>x.length >0)
    let reversedNumbers = numbers.reverse()
    //let toWrite = reversedNumbers.join('\n')
    //fs.writefileSync('reversed.text', toWrite)


app.get("/hello", (req, res) =>{
    for (let i = 0; i<reversedNumbers.length; i++){
    fs.writeFileSync('numbers.txt',  reversedNumbers[i]+'\n')
    }
res.send("im listening");

})



app.listen(3000)

