const categoryModel = require('../db/category');

async function getAllCategory() {
    let allCategory = await categoryModel.find();
    return allCategory.map(c=>c.toObject());
}

async function getCategoryById(id) {
    let category = await categoryModel.findById(id);
    return category.toObject();
}

async function addCategory (model) {
    let newCategory = new categoryModel({
        name: model.name,
    });
    await newCategory.save();
    return newCategory.toObject();
}

async function updateCategory (id, model) {
    await categoryModel.findOneAndUpdate({ _id: id}, model);
    return;
}

async function deleteCategory (id) {
    await categoryModel.findByIdAndDelete(id);
    return
}

module.exports = { addCategory, updateCategory, deleteCategory, getAllCategory, getCategoryById};