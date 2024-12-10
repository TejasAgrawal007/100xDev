// Bad Way to Do this....

const express = require('express')
const app = express()
const port = 3000

app.get('/heathCheckup', (req, res) => {

    const username = req.headers.username;
    const password = req.headers.password;
    const kidenyID = req.query.kidenyID;

    if (!(username === "tejas" && password === "pass")) {
        res.status(400).json({ msg: "Something went wrong with your kideny!" })
        return
    }
 

    if (kidenyID == 1 || kidenyID == 2) {
        res.json({
            msg: "Your kideny is fine!"
        })
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})