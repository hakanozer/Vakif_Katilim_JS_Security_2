import { userModel } from "../models/userModel"
import { db } from "../utils/db"

export const userSave = async ( name: string, email: string, password: string ) => {
    await db
    return await userModel.create({name, email, password})
}

export const userLogin = async (email: string) => {
    await db
    return await userModel.findOne({email})
}