import mongoose from 'mongoose'
import { ENV } from './env.js'

// Cache the connection across serverless function invocations
let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

export const connectDB = async() => {
    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        cached.promise = mongoose.connect(ENV.DB_URL).then((mongoose) => mongoose);
    }

    try {
        cached.conn = await cached.promise;
        console.log("connected to database:", cached.conn.connection.host);
        return cached.conn;
    } catch (error) {
        cached.promise = null;
        console.log("error in connecting db:", error);
        throw error;
    }
}