
const jwt = require('jsonwebtoken')
const z = require('zod')

const jwtPassword = "secret"

const emailSchema = z.string().email();
const passwordSchema = z.string().min(6);

function signJWT(username, password)
{
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        return null;
    }

    const signature = jwt.sign({
        username
    }, jwtPassword)

    return signature;
}


let result = signJWT("tejas@gmail.com", "123456");
console.log(result);



