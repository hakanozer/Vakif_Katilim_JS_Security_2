import { productModel } from "../models/productModel"
import { db } from "../utils/db"

export const productSave = async (userID:string, title: string, price: string) => {
  await db
  return await productModel.create({userID, title, price})
}

export const productList = async (userID:string) => {
    await db
    return await productModel.find({userID})
}