import express from "express";
import cors from "cors"
import bookCallRoutes from "./src/routes/bookCall.route.js";
import talent from "./src/routes/hireTalent.route.js"
import jobApplication from "./src/routes/jobApplication.route.js"
import { configDotenv } from "dotenv";

configDotenv();
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://13.49.78.176",
      "https://alph-knot.vercel.app/",
    ],
    credentials: true,
  })
);
const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/book-call", bookCallRoutes);
app.use("/api/talent",talent)
app.use("/api/job-application",jobApplication)
// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});no

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});