const mongoose = require('mongoose');
const { Schema } = mongoose;

const CodesSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    bio: {
        type: String
    },
    newssource: {
        type: String
    },
    newscategory: {
        type: String
    },
    newstype: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('codes', CodesSchema);