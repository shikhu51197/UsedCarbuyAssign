const express = require('express');
const { DealerModel } = require('../models/dealer.model')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dealerRouter = express.Router()




dealerRouter.post("/register", async (req, res) => {
    //Logic
    const { email, password, name } = req.body
    try {
        bcrypt.hash(password, 5, async (err, hash) => {
            // Store hash in your password DB.
            const dealer = new DealerModel({ name, email, password: hash })
            await dealer.save()
            res.status(200).send({ "msg": "New dealer has been registered" })
        });

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }

})


dealerRouter.post("/login", async (req, res) => {
    //Logic
    const { email, password } = req.body
    try {
        const dealer = await DealerModel.findOne({ email })
        if (dealer) {
            bcrypt.compare(password, dealer.password, (err, result) => {
                // result == true
                if (result) {
                    const token = jwt.sign({ dealerID: dealer._id }, "attryb");
                    res.status(200).send({ "msg": "Login Succesfull", token , name:dealer.name})
                } else {
                    res.status(200).send({ "msg": "Wrong Credentials!!!" })
                }
            });

        } else {
            res.status(200).send({ "msg": "Wrong Credentials!!!" })
        }
    } catch (error) {
        res.status(400).send({ "err": err.message })
    }
})

module.exports = {
    dealerRouter
}