import mongoose from "mongoose";
const Schema = mongoose.Schema

const productSchema = new Schema({
    userID: String,
    title: String,
    price: String,
})

export const productModel = mongoose.model('product', productSchema)