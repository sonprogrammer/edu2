const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        userAddress:{
            type: String,
            required: true,
            unique: true,
        },
        userPassword:{
            type: String,
            required: true,
        },
        
    }
)