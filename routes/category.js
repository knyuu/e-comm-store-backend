const express = require('express');
const router = express.Router();
const { addCategory, updateCategory, deleteCategory, getAllCategory, getCategoryById } = require('../handlers/category-handler');
// const categoryModel = require('../db/category');

router.get('', async(req, res) => {
    let allCategory = await getAllCategory();
    res.send(allCategory);
})

router.get('/:id', async(req, res) => {
    let id = req.params['id'];
    let result = await getCategoryById(id);
    res.send(result);
})

router.post('', async(req, res) => {
    let model = req.body;
    let result = await addCategory(model);
    res.send(result);
});

router.put('/:id', async(req, res) => {
    let id = req.params['id'];
    let model = req.body;
    await updateCategory(id, model);
    res.send({ message: "updated" });
});

router.delete('/:id', async(req, res) => {
    let id = req.params['id'];
    await deleteCategory(id);
    res.send({message: "deleted"});
})

module.exports = router;