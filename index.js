const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const authorization = require("./authorization");
let port = process.env.PORT || 5000;
app.use(cors());
// app.use("/", authorization);
app.use("/api/v1", cors(), routes);
const server = app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
app.use((request, response, next) => {
  if (request.path === "/") {
    response.status(200).send({ message: "response generated" });
  } else if (request.path === "/shivam") {
    // response.status(200).send({ message: "response generated" });
    response.redirect(301, "/redirect");
  } else if (request.path === "/redirect") {
    response.status(200).send("<script>alert('hi')</script>");
  } else {
    next();
  }
});
module.exports = { app, server };
