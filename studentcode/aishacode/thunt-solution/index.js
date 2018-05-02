var fetch = require('node-fetch')
fetch('http://localhost:3000')
.then(x => x.text())
.then(y => console.log(y))
.then(()=>fetch('http://localhost:3000/Bloviate'))
.then(x => x.text())
.then(y => console.log(y))
.then(()=>fetch('http://localhost:3000/Discombobulate',
{
    method:"PUT",
    body: "Allegator"
})
.then(res=>{return res.text()})
.then(data => console.log(data)))
.then(()=> fetch('http://localhost:3000/Dudgeon',
{
    method:"PUT",
    body:"Fartlek"
})
.then(res=>res.text())
.then(data=>console.log(data)))
.then(()=>fetch('http://localhost:3000/Ecdysiast'))
.then(x=>x.text())
.then(y=>console.log(y))
.then(()=>fetch('http://localhost:3000/Codswallop'))
.then(x=>x.text())
.then(y=>console.log(y))
.then(()=> fetch('http://localhost:3000/Billingsgate',
{
    method:"PUT",
    body:"Canoodle"
})
.then(res=>res.text())
.then(data=>console.log(data)))
.then(()=> fetch('http://localhost:3000/Donnybrook',
{
    method:"POST",
    body:"Catercornered"
})
.then(res=>res.text())
.then(data=>console.log(data)))


