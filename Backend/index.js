const express = require('express');
const { connection } = require('./config/db');
const { TokenModel } = require('./models/tokenModel');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get("/", async(req, res) => {
    try {
        const token = await TokenModel.find();
        res.send({ "Our Token": token })
    } catch (error) {
        console.log(error);
        res.send(error);
    }
})

app.post("/create", async(req, res) => {
    try {
        const { img, tokenName, symbol, decimals, marketcap, chain } = req.body;
        await TokenModel.create({ img, tokenName, symbol, decimals, marketcap, chain });
        res.send({ message: "Token created" });
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

app.patch("/:tokenId", async(req, res) => {

    const payload = req.body;
    const token_Id = req.params.tokenId;

    await TokenModel.findByIdAndUpdate(token_Id, payload);
    res.send({ message: "Token updated!!!" });

});

app.delete("/:tokenId", async(req, res) => {
    const token_Id = req.params.tokenId;

    await TokenModel.findByIdAndDelete(token_Id);
    res.send({ message: "Token deleted!!!" });

})

app.listen(PORT, async() => {
    try {
        await connection;
        console.log(`Connected to MongoDB`);
    } catch (error) {
        console.log(error);
    }
    console.log(`Listening on port ${PORT}`);
})