const mongoose = require('mongoose');

const whishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    productsId: Array(String)
});

const whishlistModel = mongoose.model('whishlist', whishlistSchema);

module.exports = whishlistModel;