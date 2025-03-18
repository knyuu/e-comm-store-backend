const express = require("express");
const { addProduct, updateProduct, deleteProduct, getAllProduct, getProduct } = require("../handlers/product-handler");
const router = express.Router();

router.get("/", async(req, res)=>{
    let allProduct = await getAllProduct();
    res.send(allProduct);
})

router.get("/:id", async(req, res)=>{
    let id = req.params["id"];
    let product = await getProduct(id);
    res.send(product);
})

router.post("/", async (req, res) => {
    let model = req.body;
    let product = await addProduct(model);
    res.send(product);
})

router.put("/:id", async (req, res) => {
    let id = req.params["id"];
    let model = req.body;
    await updateProduct(id, model);
    res.send({message: "updated"});
})

router.delete("/:id", async(req,res) => {
    let id = req.params["id"];
    await deleteProduct(id);
    res.send({message: "deleted"});
})

module.exports = router;

