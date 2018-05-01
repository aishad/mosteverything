const express = require('express');
const app = express();
const fs = require('fs')


    var content = (fs.readFileSync('../Question 2/numbers.txt').toString())
    var numbers = content.split("\n")
    var sum = 0;
    for (let i = 0; i<numbers.length; i++){
        sum = sum + Number(numbers[i])
    }

app.get("/hello", (req, res) =>{

    fs.writeFileSync('numbers.txt',  sum)

res.send("im listening");

})



app.listen(3000)


// let fs = require('fs')
// let fileContents = fs.readFileSync('./numbers.text')
// let asString = fileContents.toString()
// let splitUp = asString.split('\n')
// splitU = splitUp.filter(x => x.length>0)
// let sum = splitUp.forEach(x => sum += parseInt(x))

// OR 
// plutUp = splitUp.filter(x =>x.length>)
// splitUp = splitUp.map(x => parseInt(x))
// let sum = splitUp.reduce((a,b) =>a+b, 0)