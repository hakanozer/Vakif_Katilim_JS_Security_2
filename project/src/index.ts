import bodyParser from 'body-parser'
import express from 'express'
import session from 'express-session'
import mongoSanitize from 'express-mongo-sanitize'
const app = express()

// session config
declare module 'express-session' {
    interface SessionData {
        userID:string
    }
}
const sessionConfig = {
    secret: 'appSession',
    resave: false,
    saveUninitialized: true,
}
app.use(session(sessionConfig))


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

// global filter
app.use((req, res, next) => {
    const url = req.url
    if (url === "/api/v1/login") {
        next()
    }else {
        const userID = req.session.userID
        if (userID) {
            next()
        }else {
            res.json({
                status: false,
                result: "Login Fail"
            })
        }
    }
})


// RestApi
import { userRestController } from './restcontrollers/userRestController'
import { productRestController } from './restcontrollers/productRestController'
app.use('/api/v1', [
    userRestController,
    productRestController
])


const port = 3000
app.listen(port, ()=> {
    console.log("http://localhost:"+port);
})

