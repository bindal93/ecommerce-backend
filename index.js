const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const authorization = require("./authorization");
let port = process.env.PORT || 5000;
app.use(cors());
// app.use(
//   helmet({
//     referrerPolicy: { policy: "no-referrer" },
//   })
// );
// app.use("/", authorization);
app.use("/api/v1", cors(), routes);
const server = app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

module.exports = { app, server };
