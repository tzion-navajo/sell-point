const fs = require("fs");
const { resolve } = require("path");

const fileName = "./database/products.json";


function getAllProductsAsync() {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, "utf-8", (err, data) => {
            if (err) return reject(err);
            const products = JSON.parse(data);
            resolve(products);
        });
    });
}


function saveAllProductsAsync(products) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify(products, null, 4); // 4 = tabs
        fs.writeFile(fileName, data, err => {
            if (err) return reject(err);
            resolve();
        });
    });

}






module.exports = {
    getAllProductsAsync,
    saveAllProductsAsync



};