const fs = require("fs");
const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser").json();
const { Client } = require("@elastic/elasticsearch");
const { elasticURL, authObj, authorizationBasic } = require("./config");
const elasticClient = new Client({
  node: elasticURL,
  auth: authObj,
  tls: {
    ca: fs.readFileSync("./http_ca.crt"),
    rejectUnauthorized: false,
  },
  headers: {
    "Content-Type": "application/json",
    "access-control-allow-origin": "*",
    accept: "*/*",
    Authorization: authorizationBasic,
  },
});

router.use((req, res, next) => {
  console.log("25 #################");
  elasticClient
    .index({
      index: "logs",
      body: {
        url: req.url,
        method: req.method,
      },
    })
    .then((res) => {})
    .catch((err) => {});
  next();
});

router.post("/products", bodyParser, (req, res) => {
  console.log("post /products #################");
  elasticClient
    .index({
      index: "products",
      body: req.body,
    })
    .then((resp) => {
      return res.status(200).json({
        msg: "product indexed",
      });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: "Error",
        err,
      });
    });
});

router.get("/products/:id", (req, res) => {
  console.log("get /products/:id #################");
  let query = {
    index: "products",
    id: req.params.id,
  };
  elasticClient
    .get(query)
    .then((resp) => {
      if (!resp) {
        return res.status(404).json({
          product: resp,
        });
      }
      return res.status(200).json({
        product: resp,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        msg: "Error not found",
        err,
      });
    });
});

router.put("/products/:id", bodyParser, (req, res) => {
  console.log("put /products/:id #################");
  elasticClient
    .update({
      index: "products",
      id: req.params.id,
      body: {
        doc: req.body,
      },
    })
    .then((resp) => {
      return res.status(200).json({
        msg: "product updated",
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "Error",
        err,
      });
    });
});

router.delete("/products/:id", (req, res) => {
  console.log("delete /products/:id #################");
  elasticClient
    .delete({
      index: "products",
      id: req.params.id,
    })
    .then((resp) => {
      res.status(200).json({
        msg: "Product deleted",
      });
    })
    .catch((err) => {
      res.status(404).json({
        msg: "Error",
      });
    });
});

router.get("/products", (req, res) => {
  console.log("get /products #################", req.query);
  let query = {
    index: "products",
    size: 200,
  };
  if (req.query.product) query.q = `*${req.query.product}*`;
  elasticClient
    .search(query)
    .then((resp) => {
      return res.status(200).json({
        products: resp.hits.hits,
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        msg: "Error",
        err,
      });
    });
});
module.exports = router;
