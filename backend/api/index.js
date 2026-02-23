import { connectDB } from '../src/lib/db.js';
import app from '../src/server.js';

// Ensure DB is connected before handling requests
export default async function handler(req, res) {
    await connectDB();
    return app(req, res);
}
