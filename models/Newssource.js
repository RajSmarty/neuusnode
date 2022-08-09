const mongoose = require('mongoose');
const { Schema } = mongoose;

const newssourceSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    
    newssource: {
        type: String
    },
    
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('newssource', newssourceSchema);