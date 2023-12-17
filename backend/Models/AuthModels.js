const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const AuthSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive: {
        type: Boolean,
        default: false
    },
    created_At: {
        type: Date,
        default: Date.now()
    },
})

AuthSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})

const auth = mongoose.model('Auth', AuthSchema)
module.exports = auth