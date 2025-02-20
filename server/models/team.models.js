const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Player name is required"],
        minlength: [2, "Player name must be at least 2 characters long"]
    },
    preferredPosition: {
        
        type: String,
        required: false
    },
    gameStatus: {
        game1: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        },
        game2: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        },
        game3: {
            type: String,
            enum: ['Playing', 'Not Playing', 'Undecided'],
            default: 'Undecided'
        }
    }
}, { timestamps: true });

module.exports = mongoose.model('Team', TeamSchema);