import express from "express";
import bookCallRoutes from "./src/routes/bookCall.route.js";
import { configDotenv } from "dotenv";

configDotenv();

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/api/book-call", bookCallRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Server is running");
});

// start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});