import express from "express";
import routes from "./routes";
import dotenv from "dotenv";
import cors from 'cors';

dotenv.config();
const app = express();
const frontEndAddress = "http://localhost:3000";
const port = process.env.PORT || 3030; // Use a default port if the PORT environment variable is not set

app.use(express.json());
// Enable All CORS Requests
app.use(cors({ origin: `${frontEndAddress}` }));

app.get("/", (req, res) => {
    res.send("Ready.");
});

// Use routes
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running: http://localhost:${port}`);
});
