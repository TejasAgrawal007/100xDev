// Input Validations

const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.post('/heathCheckUp', (req, res) => {

    // kideneys = [1, 2]

    
    const kidenys = req.body.kidenys;

    // if(!kidenys){
    //     res.json({msg:"Wrong Input!"})
    // }


    const kideneysLength = kidenys.length;

    res.send(`You Have ${kideneysLength} Kidneys`)


    // Gloabls Catches

    app.use(function(err, req, res, next){
        res.json({
            msg: "Something went wrong with the server!"
        })
    })
  
})   

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})