const mongoose = require('mongoose');
const { Schema } = mongoose;

const uploadPhotoSchema = new Schema({ 
    label: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
}, {timestamps: true})

const UploadPhoto = mongoose.model('UploadPhoto', uploadPhotoSchema);

module.exports = UploadPhoto