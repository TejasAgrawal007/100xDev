const z = require('zod')

// function validateInput(arr){

//     const schema = z.array(z.number());

//     const response = schema.safeParse(arr);

//     console.log(response);
// }

// validateInput(["1",2,3]);



function validateInput(obj){

    const schema = z.object({
        email : z.string().email(),
        password : z.string().min(8),
    })

    const response = schema.safeParse(obj);
    console.log(response);
}

validateInput({
    email : "tejas@gmail.com",
    password : "123456789"
})