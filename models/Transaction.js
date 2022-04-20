const mongoose  = require('mongoose');

const TransactionSchema = new mongoose.Schema({
   text: {
      type: String,
      trim: true,
      required: [true, 'Please, add some text']
   },
   amount: {
      type: Number,
      required: [true, 'Enter a number of amount of expense']
   },
   createdAt:{
      type: Date,
      default: Date.now()
   }
})

module.exports = mongoose.model('Transaction', TransactionSchema);