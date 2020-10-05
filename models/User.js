const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true}, //unique: true rend impossible l'inscription plusieurs fois avec la même adresse email
    password: { type: String, required: true},
});

userSchema.plugin(uniqueValidator); //permettre de créer des utilisateurs uniques
module.exports = mongoose.model('User', userSchema);