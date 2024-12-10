// ZOD Validations

const express = require('express')
const zod = require('zod')
const app = express()
const port = 3000

app.use(express.json())

const schema = zod.array(zod.number());

/*

  // Example

  email : string => string
  password : altest 8 letters
  country : "In", "US"

*/

const schemaExample = zod.object({
  emai : zod.string,
  password : zod.string,
  country: z.literal("IN").or(z.literal("US"))
})

app.post('/healthCheckUp', (req, res) => {
    
    const kideneys = req.body.kideneys;
    const response = schema.safeParse(kideneys);

    if (!response.success) {
      res.status(411).json({
        msg : "Invalid Input 😢"
      })
    }else{
      res.send(response)
    }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})