import mongoose from 'mongoose';
const url = "mongodb://localhost:27017/project_vakif_katilim"
const option = {
    useNewUrlParser: true,
    dbName: "project_vakif_katilim",
}
export const db = mongoose.connect(url,option)