const express =require('express')
const employees = require('./employees')
const app = express()

app.get('/employees',(req,res)=>{
res.json((employees))
})
app.get('/employees/:id',(req,res)=>{
    let id = req.params.id
    res.json((employees[id-1]))
    })

app.listen(5001, () =>{
console.log("running on port 5001")
})
