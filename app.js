
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const dbgate = require("./data-access-layer/dbgate");

const productsController = require("./controllers/products-controller");

const server = express();

server.use("/api/products", productsController);



server.listen(3001, () => {
    console.log("listening ... ");

});
