import mongoose from 'mongoose'
import { ENV } from './env.js'


export const connectDB = async() => {
    try {
      const conn =  await mongoose.connect(ENV.DB_URL);
      console.log("connected to database:", conn.connection.host)
    } catch (error) {
        console.log("error in connecting db:",error);
        process.exit(1); //0 means success, 1 means failure
    }
}