import connection from "./db/conn.js";
import express from "express";
import studentrouter from "./routes/student.js";
import workrouter from "./routes/worksnaps.js";
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use("/api", studentrouter);
app.use("/api", workrouter);
//Database
connection();

//test api
app.get("/", (req, res) => {
  res.send("Working!");
});

//Listening
app.listen(PORT, () => {
  console.log(`Server is up on PORT:${PORT}`);
});
