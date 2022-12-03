import express from 'express'
import xss from 'xss'
import { productList, productSave } from '../services/productService'
export const productRestController = express.Router()

productRestController.post('/product/add', (req, res) => {
    const title = xss(req.body.title)
    console.log(title);
    
    const price = req.body.price
    const userID = req.session.userID
    const sendItem = {
        status: false,
        result: {}
    }
    productSave(userID!, title, price).then(item => {
        if (item) {
            sendItem.status = true
            sendItem.result = item
        }
        res.json(sendItem)
    })
})



productRestController.get('/product/list', (req, res) => {
    const userID = req.session.userID
    const sendItem = {
        status: false,
        result: {}
    }
    productList(userID!).then(items => {
        sendItem.status = true
        sendItem.result = items
        res.json(sendItem)
    })
})