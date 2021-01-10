const express = require("express");
var http = require('http');
var url = require('url');
var fs = require('fs');

const productsLogic = require("../bussiness-logic/products-logic");
const router = express.Router();


router.get("/", async (request, response) => {
    const products = await productsLogic.getAllProductsAsync();
    response.json(products);

});


// GET /api/products/7
router.get("/:id", async (request, response) => {
    try {
        const id = +request.params.id;
        const oneProduct = await productsLogic.getOneProductAsync(id);
        if (!oneProduct) {
            response.status(404).send("id " + id + " not found.");
            return;
        }
        response.json(oneProduct);
    }
    catch (err) {
        response.status(500).send(err.message);
    }
});

module.exports = router;


