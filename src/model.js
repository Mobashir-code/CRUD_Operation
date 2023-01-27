const mongoose = require('mongoose')

const UserDetail = mongoose.model('userdetail',{
    uniqueID: {
        type: String
    },
    firstName: {
        type: String,
        trim: true
    },
    lastName: {
        type: String,
        trim: true
    },
    city: {
        type: String,
        trim: true
    },
    country: {
        type: String,
        trim: true
    }
})

module.exports = UserDetail;