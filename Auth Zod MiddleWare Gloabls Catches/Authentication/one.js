const express = require('express')
const jwt = require('jsonwebtoken');
const app = express()
const port = 3000

app.use(express.json())
const jwtPassword = "123456";

const ALL_USERS = [
    {
        username: "tejas@gmail.com",
        password: 123,
        name: "Tejas Agrawal",
    },
    {
        username: "dipu@gmail.com",
        password: 456,
        name: "Dipti Agrawal"
    },
    {
        username: "kushi@gmail.com",
        password: 789,
        name: "Khushi Agrawal"
    }
];

function userExists(username, password) {

    let userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExists = true
        }
    }
    return userExists;
}

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            msg: "User does not existis in our DB"
        })
    };

    let token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token,
    })
});


app.get("/users", (req, res) => {
    const token = req.headers.authorization
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;

        // return the list of users other this username


        users: ALL_USERS.filter(function (value) {
            if (value.username == username) {
                return false
            } else {
                return true
            }
        })
    } catch (err) {
        return res.status(403).json({
            msg: "Invalid Token"
        })
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  