const elasticURL = process.env.ELASTIC_URL || "https://34.16.133.63:9200";
const authorizationBasic = "Basic ZWxhc3RpYzpRPVdINFRjWVdXaVRyYndGU2NkOQ==";
const authObj = {
  username: "elastic",
  password: "Q=WH4TcYWWiTrbwFScd9"
};

module.exports = {
  elasticURL,
  authorizationBasic,
  authObj
};
