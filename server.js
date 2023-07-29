const express = require("express");
const app = express();

const cors = require("cors");

const studentRoutes = require("./students/routes");
const port = 7000;
app.use(express.json());

// Allow requests from 'http://localhost:5173'
app.use(cors({ origin: "http://localhost:5173" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/user", studentRoutes);

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
