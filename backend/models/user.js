const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        validate: {
            validator: function (v) {
                return /^[a-zA-Z0-9_]{3,30}$/.test(v);
            },
            message: props => `${props.value} is not a valid username!`
        },
        required: [true, 'Please enter your username']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: [true, 'Email already exists'],
        validate: {
            validator: function (v) {
                return /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(v);
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
    created: {
        type: Date,
        default: Date.now
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);