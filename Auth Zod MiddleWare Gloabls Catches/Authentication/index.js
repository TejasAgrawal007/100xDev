const mongoose = require('mongoose')
const express = require("express")
const app = express()
const PORT = 3000

mongoose.connect("mongodb+srv://tejasagrawal36:oljrQnv7y7O288dl@cluster0.qhy14.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


const User = mongoose.model("Users", {
  username: String, email: String,
  password: String
});


app.post("/signup", async (req, res) => {

  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;


  const userExists = await User.findOne({ email: email });

  if (userExists) {
    return res.status(400).send("User Already Exists")
  }

  const user = new User({
    name: username,
    email: email,
    password: password
  });
  user.save();
  res.json({
    "msg": "User Created Successfully!"
  })

})



app.listen(PORT)