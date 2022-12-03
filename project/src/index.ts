import bodyParser from 'body-parser'
import express from 'express'
import { userSave } from './services/userService'
import mongoSanitize from 'express-mongo-sanitize'
const app = express()



// Body-parser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// mongoSanitize config
/*
{
    "email": "zehra@mail.com",
    "password": {"$ne": null}
}
*/
app.use(
    mongoSanitize({
        onSanitize: ({ req, key }) => {
        console.log(req.ip);
        },
    })
);


// RestApi
import { userRestController } from './restcontrollers/userRestController'
app.use('/api/v1', [
    userRestController
])


const port = 3000
app.listen(port, ()=> {
    console.log("http://localhost:"+port);
})

