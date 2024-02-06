import express from "express";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000; // Use a default port if the PORT environment variable is not set

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Ready.");
});

// Use routes
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
