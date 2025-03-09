const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    productsId: Array(String)
});

const cartModel = mongoose.model('cart', cartSchema);

module.exports = cartModel;