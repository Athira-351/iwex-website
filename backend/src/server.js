import express from "express";
import cors from "cors";
import db from "./config/db.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend running successfully!" });
});

app.get("/api/test", (req, res) => {
  db.query("SELECT 'Hello World' AS msg", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results[0]);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
