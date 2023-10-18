const express = require('express')
const cors = require("cors")
const { connection } = require('./db')
const { dealerRouter } = require('./routes/dealer.route')
const { auth } = require('./middleware/auth.middleware')
const { marketRouter } = require('./routes/marketplace.route')
const { oemRouter } = require('./routes/oem.route')
const { MarketModel } = require('./models/marketplace.model')
require("dotenv").config()

const app = express()

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
    res.status(200).send("Basic API Endpoint")
})

app.get("/data", async (req, res) => {
    try {
        const market = await MarketModel.find()
        res.status(200).send(market)

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})
app.get("/price", async (req, res) => {
    const order = req.query.price
    try {
        if (order == "asc") {
            const market = await MarketModel.find().sort({ "price": 1 })
            res.status(200).send(market)
        } else {
            const market = await MarketModel.find().sort({ "price": -1 })
            res.status(200).send(market)

        }

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})
app.get("/mileage", async (req, res) => {
    const order = req.query.mileage
    try {
        if (order == "asc") {
            const market = await MarketModel.find().sort({ "mileage": 1 })
            res.status(200).send(market)
        } else {
            const market = await MarketModel.find().sort({ "mileage": -1 })
            res.status(200).send(market)

        }


    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})
app.get("/color", async (req, res) => {
    const query = req.query.color
    try {
        const market = await MarketModel.find({ "color": query })
        res.status(200).send(market)

    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})
app.get("/search", async (req, res) => {
    const query = req.query.search
    try {
        const market = await MarketModel.find({ "title": { "$regex": query, "$options": "i" } })
        res.status(200).send(market)
    } catch (err) {
        res.status(400).send({ "err": err.message })
    }
})


app.use("/dealers", dealerRouter)


app.use(auth)

app.use("/market", marketRouter)

app.use("/oem", oemRouter)


app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("Connected to the DB")
    } catch (error) {
        console.log(error)
        console.log("Cannot connect to the DB")
    }
    console.log(`Server is running at port ${process.env.port}`)
})