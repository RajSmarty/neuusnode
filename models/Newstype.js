const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewstypeSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    
    newstype: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('newstype', NewstypeSchema);