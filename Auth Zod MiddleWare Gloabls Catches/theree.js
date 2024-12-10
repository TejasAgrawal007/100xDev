// Assignment

const express = require('express')
const app = express()
const port = 3000


app.use(express.json())



let numberOfRequest = 0;
let responseTime = 0;
let totalResponseTime = 0;


function calculateRequest(req, res, next)
{

    const start = Date.now();
    numberOfRequest++;
    const end = Date.now();

    responseTime = end - start;
    totalResponseTime = totalResponseTime + responseTime

    
    console.log(numberOfRequest)
    console.log(`Total Response time = ${totalResponseTime}ms`);
    

    next();
}

app.use(calculateRequest)

function auth(req, res, next)
{
    const username = req.headers.username;
    const password = req.headers.password;

    if(!(username === "tejas" && password === "pass"))
    {
        res.status(400).json({msg: "Something went wrong..."})
        return
    }
    next();
}


function checkKidenyId(req, res, next)
{
    const kidenyID = parseInt(req.query.kidenyID);

    if (!(kidenyID === 1 || kidenyID === 2)) {
        res.status(400).json({msg: "Check your kideny!"})
        return
    }
    next();
}


app.get("/kidenyCheckUp", auth, checkKidenyId, (req, res) => {

    res.json({msg: "Everything is Fine 😁🙌 "})

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})