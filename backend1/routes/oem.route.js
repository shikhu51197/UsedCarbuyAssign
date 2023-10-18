const express = require('express');
const { OemModel } = require('../models/oem.model')
const oemRouter = express.Router();

oemRouter.get("/", async (req, res) => {
    try {
        const oemData = await OemModel.find()
        res.status(200).send(oemData)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }

})



oemRouter.post("/add", async (req, res) => {
    try {
         const oemData = await OemModel.insertMany(req.body)
        res.status(200).send({ 'msg': 'New Data has been added' })
    } catch (error) {
        res.status(400).send({ "error": error.message })
    }
})

module.exports = {
    oemRouter
}
