const express = require("express");
const data = require("./data/data.json");
const PORT = process.env.PORT || 3001;

const app = express();

app.get("/data", (req, res) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
