const express =require('express')
const user = require('./user')
const app = express()

app.get('/user',(req,res)=>{
res.json((user))
})
app.get('/user/:id',(req,res)=>{
    let id = req.params.id
    res.json((user[id-1]))
    })

app.listen(5001, () =>{
console.log("running on port 5001")
})
