const express = require("express");
const studentRoutes = require("./students/routes");
const app = express();
const port = 7000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello");
});
app.use("/user", studentRoutes);

app.listen(port, () => {
  console.log(`app listen on port ${port}`);
});
