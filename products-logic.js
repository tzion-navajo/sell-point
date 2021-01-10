const dal = require("../data-access-layer/dal");


async function getAllProductsAsync() {
    const products = await dal.getAllProductsAsync();
    return products;
}

async function getOneProductAsync(id) {
    const products = await dal.getAllProductsAsync();
    const oneProduct = products.find(p => p.id === id);
    return oneProduct;
}





module.exports = {
    getAllProductsAsync,
    getOneProductAsync
  
};