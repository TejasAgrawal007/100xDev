const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000


app.use(express.json())

const users = [{
    name : "Tejas",
    kidneys : [{
        healthy: false
    }]
}];


app.get("/", (req, res) => {
    const tejasKidneys = users[0].kidneys;
    const numberOfKidneys = tejasKidneys.length;
    let numberOfHealthKidneys = 0;

    for (let i = 0; i < tejasKidneys.length; i++) {
       if (tejasKidneys[i].healthy) {
            numberOfHealthKidneys = numberOfHealthKidneys + 1 
       }
    }

    const unnumberOfHealthKidneys = numberOfKidneys - numberOfHealthKidneys;


    res.json({
        tejasKidneys,
        numberOfKidneys,
        unnumberOfHealthKidneys
    })
})



app.post("/", (req, res) => {
    const isHealthy = req.body.isHealthy
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done!"
    })
})


app.put("/", (req, res) => {
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy = true;   
    }
    res.json({   
        msg: "Done Put!"
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})