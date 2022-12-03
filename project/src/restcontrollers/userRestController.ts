import express from "express";
import { userLogin } from "../services/userService";
import { decrypt } from "../utils/util";
export const userRestController = express.Router()

userRestController.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    userLogin(email).then(item => {
        const sendItem = {
            status: false,
            result: {}
        }
        
        if (item) {
            const newPass = decrypt(item.password!)
            if (newPass == password) {
                sendItem.status = true
                sendItem.result = item
            }else {
                sendItem.result = "Email or Passwor Not Valid"
            }
            
        }else {
            sendItem.result = "Email or Passwor Not Valid"
        }
        res.json(sendItem)

    })
})