const mongoose = require("mongoose");

const tokenSchema = ({
    img: { type: String, required: true },
    tokenName: { type: String, required: true },
    symbol: { type: String, required: true },
    decimals: { type: Number, required: true },
    marketcap: { type: Number, required: true },
    chain: { type: String, required: true }
})

const TokenModel = mongoose.model("token", tokenSchema);

module.exports = { TokenModel };
// {
//     img: "http://example.com/img1.jpg",
//     tokenName: "AlphaToken",
//     symbol: "ALP",
//     decimals: 18,
//     marketcap: 1000000,
//     chain: "Ethereum",
//   }