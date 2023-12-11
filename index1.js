const express = require("express");
const app = express();
const axios = require("axios");
const routes = require("./routes");
const cors = require("cors");
// app.use("/track", (req, res) => {
//   // const imageId = req.query.imageId;
//   const imageId = "http://localhost:5000/shivam";
//   axios(imageId, { method: "HEAD" })
//     .then((response) => {
//       console.log("response from api", response);
//       const statusCode = response.status;
//       const redirectionUrl = response.headers.get("location");
//       res.json({ statusCode });
//     })
//     .catch((error) => {
//       console.error("Error capturing the response:", error);
//       res.status(500).send("Error capturing the response");
//     });
// });

// //Start the server
// app.listen(3000, () => {
//   console.log("Server started on port 3000");
// });

// Create an Axios instance
// const api = axios.create();

// // Add a response interceptor
// api.interceptors.response.use(
//   (response) => {
//     // console.log(response)
//     // Check if the response contains a redirection status code
//     if (response.status === 301 || response.status === 302 || response.status === 307) {
//       // Reject the promise to block the API call
//       return Promise.reject(new Error("API call blocked due to redirection."));
//     }

//     // Return the response if no redirection status code is found
//     return response;
//   },
//   (error) => {
//     // Handle any other error that occurs during the API call
//     return Promise.reject(error);
//   }
// );

// // Usage example
// api
//   .get("http://localhost:5000/shivam")
//   .then((response) => {
//     delete response.data;
//     delete response.config;
//     delete response.headers;
//     console.log("API call succeeded:", response.request.res);
//     console.log("API call succeeded url:", response.request.res.responseUrl);
//   })
//   .catch((error) => {
//     console.error("API call failed:", error.message);
//   });

let port = process.env.PORT || 4000;
app.use(cors());
// app.use("/", authorization);
app.use("/api/v1", cors(), routes);
const server = app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
app.use((request, response, next) => {
  if (request.path === "/") {
    response.status(200).send({ message: "response generated" });
  } else if (request.path === "/redirect") {
    // response.status(200).send({ message: "response generated" });
    response.status(200).send("<script>alert('hi')</script>");
  } else {
    next();
  }
});
module.exports = { app, server };
