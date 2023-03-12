const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./routes");
const authorization = require("./authorization");
let port = process.env.PORT || 5000;
app.use(cors());
app.use("/", authorization);
app.use("/api/v1", cors(), routes);
app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});

// const express = require("express");
// const cors = require("cors");
// const app = express();
// const routes = require("./routes");
// const authorization = require("./authorization");
// let port = process.env.PORT || 5000;

// const books = [];
// app.use(cors());
// app.use("/", authorization);
// app.get("/api/v1", routes);
// app.get("/books", (request, response) => {
//   return response.send({ books });
// });
// app.listen(port, () => {
//  //console.log(routes.toString())
//   console.log(`The server is listening on port ${port}`);
// });
