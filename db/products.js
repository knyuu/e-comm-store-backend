const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,    
    id: String,
    description: String,
    shotDescription: String,
    price: Number,
    discount: Number,
    images: [String],
    categoryId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'category'
    },
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;