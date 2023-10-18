const mongoose = require('mongoose');

// Define the Oem schema
const oemSchema = mongoose.Schema({
    title: { type: String, required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    imageURL: { type: String, required: true },
    year: { type: Number, required: true },
    originalPrice: { type: Number, required: true },
    mileage: { type: Number, required: true },
    power: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
    availableColors: { type: Array, required: true },
    description: { type: String, required: true },
}, {
    versionKey: false
});

// Create the Oem model
const OemModel = mongoose.model('oem', oemSchema);

// Export the Oem model
module.exports = {
    OemModel
};