const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    budget: { type: Object },
    expenses: { type: Array }
});

module.exports = mongoose.model('User', UserSchema);
