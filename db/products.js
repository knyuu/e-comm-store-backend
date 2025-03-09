const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,    
    id: String,
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'category'
    },
    description: String,
    shotDescription: String,
    purchagePrice: String,
    sellingPrice: Number,
    images: [String],
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;