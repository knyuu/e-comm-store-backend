const brandModel = require('../db/brand')

async function getBrands () {
    let brands = await brandModel.find();
    return brands.map(x=>x.toObject());
}

async function getBrand (id) {
    let brand = await brandModel.findById(id);
    return brand.toObject();
}

async function addBrand(model) {
    let newBrand = new brandModel({
        name: model.name
    })
    await newBrand.save();
    return newBrand.toObject();
}

async function updateBrand(id, model) {
    await brandModel.findByIdAndUpdate(id, model);
}

async function deleteBrand(id) {
    await brandModel.findByIdAndDelete(id);
}

module.exports = {getBrands, getBrand, addBrand, updateBrand, deleteBrand}