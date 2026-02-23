import { connectDB } from '../backend/src/lib/db.js';
import app from '../backend/src/server.js';

export default async function handler(req, res) {
    await connectDB();
    return app(req, res);
}
