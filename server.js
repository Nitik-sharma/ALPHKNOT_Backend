import express from "express";
import cors from "cors"
import bookCallRoutes from "./src/routes/bookCall.route.js";
import talent from "./src/routes/hireTalent.route.js"
import jobApplication from "./src/routes/jobApplication.route.js"
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://alph-knot.vercel.app",
      "https://alphknot.com",
      "https://www.alphknot.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

// middleware
app.use(express.json());

// routes
app.use("/api/book-call", bookCallRoutes);
app.use("/api/talent",talent)
app.use("/api/job-application",jobApplication)
// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});