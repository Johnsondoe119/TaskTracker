const express = require("express");
const app = express();
const port = 7007;

app.use(express.static("main"));

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});
