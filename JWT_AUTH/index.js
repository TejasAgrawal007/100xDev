
const jwt = require('jsonwebtoken')
const z = require('zod')

const jwtPassword = "secret"

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);

function signJWT(token) {
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature = jwt.sign({
        username,
    }, jwtPassword)

    return signature;
}


function decodeJWT(token) {
    const decoded = jwt.decode(token)

    if (decoded) {
        return true
    } else {
        return false
    }
}


// console.log(decodeJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVqYXMgQWdyYXdhbCIsImFjY051bSI6IjkxNzIzOTAxODciLCJpYXQiOjE3MzM3NDM3MTF9.6RoSPeXBrVCh85jBGh2NQ8rxfus3YRQNkD91AaA3on8"));  // True


let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVGVqYXMgQWdyYXdhbCIsImFjY051bSI6IjkxNzIzOTAxODciLCJpYXQiOjE3MzM3NDM3MTF9.6RoSPeXBrVCh85jBGh2NQ8rxfus3YRQNkD91AaA3on8"

function verifyJWT(token) {
    let ans = true;
    try {
        jwt.verify(token, jwtPassword);

    } catch (error) {
        ans = false
    }

    return ans;
}

let result = verifyJWT(token)
console.log(result);
