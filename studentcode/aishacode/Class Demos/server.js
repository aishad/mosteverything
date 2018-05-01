const fs=require('fs')


fs.writeFileSync('./aisha2.txt', 'This is a test againc and again')
console.log(fs.readFileSync('./aisha2.txt').toString())
