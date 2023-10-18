const mongoose = require('mongoose')

// Define the Dealer schema
const dealerSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    versionKey: false
})

// Create the Dealer model
const DealerModel = mongoose.model('dealer', dealerSchema)

// Export the Dealer model
module.exports = {
    DealerModel
}