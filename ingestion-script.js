const fs = require("fs");
const https = require("https");
const axios = require("axios");
const data = require("./product.json");
const { elasticURL } = require("./config");

data.forEach((item, index) => {
  var config = {
    method: "POST",
    maxBodyLength: Infinity,
    url: `${elasticURL}/products/_doc/`,
    headers: {
      "Content-Type": "application/json",
      Authorization: authorizationBasic
    },
    data: item,
    httpsAgent: new https.Agent({
      cert: fs.readFileSync("http_ca.crt"),
      rejectUnauthorized: false
    })
  };

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data), "################### index ", index);
    })
    .catch(function (error) {
      console.log(error);
    });
});
