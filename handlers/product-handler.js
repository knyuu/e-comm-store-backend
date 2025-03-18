const Product = require("../db/products");

async function getAllProduct() {
    let products = await Product.find();
    return products.map(x => x.toObject());
}

async function getProduct(id) {
    let product = await Product.findById(id);
    return product.toObject();
}

async function addProduct(model) {
    let product = new Product({
        ...model,
    });
    await product.save();
    return product.toObject();
}

async function updateProduct(id, model) {
    await Product.findByIdAndUpdate(id, model);
}

async function deleteProduct(id) {
    await Product.findByIdAndDelete(id);
}

module.exports = { addProduct, updateProduct, deleteProduct, getAllProduct, getProduct};