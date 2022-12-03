import express from 'express'
import { userSave } from './services/userService'
const app = express()

/*
userSave("Veli Bil", "veli@mail.com", "12345" ).then(item => {
    console.log(item);
}).catch(err => {
    console.log(err.message);
})
*/

const port = 3000
app.listen(port, ()=> {
    console.log("http://localhost:"+port);
})