import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoutes from "./routes/bookRoutes.js";

// 1. Configuration
dotenv.config();
const app = express();

// 2. Middleware
app.use(cors());
app.use(express.json());

// 3. Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ DB Error", err));

// --- SRE HEALTH CHECK (The "Pulse") ---
// Placed before other routes to ensure it's always accessible
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
// ---------------------------------------

// 4. API Routes
app.use("/api/books", bookRoutes);

// Root Route (Optional: Just to see if API is up)
app.get("/", (req, res) => res.send("📚 API Running"));

// 5. Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
