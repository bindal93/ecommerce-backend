const express = require("express");
const app = express();
const routes = require("./routes");
const authMiddleware = require("./auth");
let port = process.env.PORT || 3000;

app.use("/api/v1", routes);
app.use("/", authMiddleware);
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
