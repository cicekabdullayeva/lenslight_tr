import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("INDEX PAGE s");
});

app.listen(port, () => {
  console.log(`Aplication running on port : ${port}`);
});
