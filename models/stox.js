const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const StoxSchema = new Schema(
    {
        _id : Schema.Types.ObjectId,
        asset1_name: String,
        asset1_invested: Boolean,
        asset1_amount: Schema.Types.Decimal128,
        asset1_price: Schema.Types.Decimal128,
        asset1_shares: Schema.Types.Decimal128,
        asset1_closing: Schema.Types.Decimal128,
        asset2_name: String,
        asset2_invested: Boolean,
        asset2_amount: Schema.Types.Decimal128,
        asset2_price: Schema.Types.Decimal128,
        asset2_shares: Schema.Types.Decimal128,
        asset2_closing: Schema.Types.Decimal128,
        comment: String,
        _date: Date,
        author: String
    },
    {
        toJSON: {
            virtuals: true,
        },
    }
);

module.exports = mongoose.model("Stox", StoxSchema);
