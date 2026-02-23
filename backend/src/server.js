import express from 'express'
import dotenv from 'dotenv'
import { ENV } from './lib/env.js'
import { connectDB } from './lib/db.js'
import cors from 'cors'
import { serve } from 'inngest/express'
import { inngest, functions } from './lib/inngest.js'
import { clerkMiddleware } from '@clerk/express'
import chatRoutes from './routes/chatRoutes.js'
import sessionRoutes from './routes/sessionRoutes.js'


dotenv.config()
const app = express()

// middlewares
app.use(express.json());
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true }));

app.use("/api/inngest", serve({ client: inngest, functions }));
app.use(clerkMiddleware())
app.use("/api/chat", chatRoutes);
app.use("/api/sessions", sessionRoutes);

app.get("/health", (req, res) => {
    res.status(200).json({ msg: "api is up and running" });
});

// Connect to DB then start server (for local dev)
if (process.env.NODE_ENV !== "production") {
    const startServer = async () => {
        try {
            await connectDB();
            app.listen(ENV.PORT || 5001, () => {
                console.log("server running on:", ENV.PORT || 5001);
            });
        } catch (error) {
            console.error("Error starting the server:", error);
        }
    };
    startServer();
}

export default app;
