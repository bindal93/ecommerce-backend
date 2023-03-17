const elasticURL = process.env.ELASTIC_URL || "https://34.125.249.203:9200";
const authorizationBasic = "Basic ZWxhc3RpYzppZ0tyRy12RHIxbVRKektGXzdWbQ==";
const authObj = {
  username: "elastic",
  password: "igKrG-vDr1mTJzKF_7Vm"
};

module.exports = {
  elasticURL,
  authorizationBasic,
  authObj
};
