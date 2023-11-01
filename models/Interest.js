const mongoose = require('mongoose');
const { Schema } = mongoose;

const InterestSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }, 
    
    interest: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('interest', InterestSchema);