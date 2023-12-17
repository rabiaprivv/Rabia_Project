const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema({
    price: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    },
)


const Product = mongoose.model('Product', ProductSchema)
module.exports = Product