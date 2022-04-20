const res = require('express/lib/response');
const Transaction = require('../models/Transaction');

// @desc   Get all transactions
// @route  GET /api/v1/transactions
// @access Public
exports.getTransactions = async (req, resp, next) => {
   try {
      const transactions = await Transaction.find();
      return resp.status(200).json({
         success: true,
         count: transactions.length,
         data: transactions
      });
   } catch (error) {
      return resp.status(500).json({
         success: false,
         error: 'ServeR ErroR'
      })
   }
}

// @desc   Add transaction
// @route  POST /api/v1/transactions
// @access Public
exports.addTransaction = async (req, resp, next) => {
   try {
      const {text, amount} = req.body;

      const transaction = await Transaction.create(req.body);

      return resp.status(201).json({
         success: true,
         data: transaction
      })
   } catch (error) {
      if(error.name === 'ValidationError') {
         const msgs = Object.values(error.errors).map(val => val.message);

         return resp.status(400).json({
            success: false,
            error: msgs
         })
      } else {
         return resp.status(500).json({
            success: false,
            error: 'ServeR ErroR'
         })
      }
   }
}

// @desc   Delete transaction
// @route  DELETE /api/v1/transactions/:id
// @access Public
exports.deleteTransaction = async (req, resp, next) => {
   try {
      const transaction = await Transaction.findById(req.params.id);

      if(!transaction) {
         return resp.status(404).json({
            success: false,
            error: "No transaction found :("
         })
      }
      await transaction.remove();
      return resp.status(200).json({
         success: true,
         data: {}
      })
   } catch (error) {
      return resp.status(500).json({
         success: false,
         error: 'ServeR ErroR'
      })
   }
}