/**
 * USER MODULE FOR STUDENT ABODE
 * MODULE CREATED -  14/03/20222
 * MODULE AUTHOR - SHUBHAM TAWADE
 * MODULE DESCRIPTION:
 * 1. CREATING MONGOOSE SCHEMA FOR REGISTERED USER
 * 2. ADDING VALIDATION RULES FOR EVERY PARAMETER
 * **/
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {collection: 'studenpad'});

module.exports = mongoose.model('User', userSchema)