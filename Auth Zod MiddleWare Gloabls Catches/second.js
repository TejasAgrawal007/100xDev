// Middlewares

const express = require('express')
const app = express()
const port = 3000


app.use(express.json())


let numberOfRequest = 0;

function calculateRequest(req, res, next){

    numberOfRequest++;
    console.log(numberOfRequest);
    next();

}

app.use(calculateRequest)

app.get('/healthCheckup', (req, res) => {
  console.log(req.body)
  res.json({
    msg : "Hi there!"
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})