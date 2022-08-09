const mongoose = require('mongoose');
const { Schema } = mongoose;

const NewscategorySchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    
    newscategory: {
        type: String
    },
    
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('newscategory', NewscategorySchema);