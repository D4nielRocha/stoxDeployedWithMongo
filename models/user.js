const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema(
    {
        username : String,
        email: String,
        firstName: String,
        lastName: String,
        phone: String
        
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

module.exports = mongoose.model("User", UserSchema);