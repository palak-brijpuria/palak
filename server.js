const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const app1 = require("./routes/emp") 

app.use(bodyparser.json())

app.use(function(req, res, next) 
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use("/emps",app1)

app.listen(9898, ()=>
{
    console.log("Server listening at port 9898")
})
//976390275
