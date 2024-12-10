const jwt = require("jsonwebtoken")

const value = {
    name : "Tejas Agrawal",
    accNum : "9172390187"
};

// const token = jwt.sign(value, "Secret")
const token = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVqYXMgQWdyYXdhbCIsImFjY051bSI6IjkxNzIzOTAxODciLCJpYXQiOjE3MzM3NDM3MTF9.6RoSPeXBrVCh85jBGh2NQ8rxfus3YRQNkD91AaA3on8", "Secret")

console.log(token);
