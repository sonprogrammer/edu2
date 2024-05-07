const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true,
        },
        userPassword:{
            type: String,
            required: true,
        }
        
    }
)

//비밀번호 유효성 검증
userSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.userPassword)
}


module.exports = mongoose.model('User', userSchema);