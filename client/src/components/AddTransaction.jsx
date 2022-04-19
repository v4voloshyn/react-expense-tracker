import * as React from 'react';
import { GlobalContext } from '../context/globalState';

const { useState, useContext } = React;

const AddTransaction = () => {
   const {addTransaction} = useContext(GlobalContext);
   const [textTransaction, setTextTransaction] = useState('');
   const [amountTransaction, setAmountTransaction] = useState('');
   
   const onSubmit = (e) => {
      e.preventDefault();

      const newTransaction = {
         id: Math.floor(Math.random() * 100000000),
         text: textTransaction,
         amount: Number(amountTransaction) 
      }
      
      addTransaction(newTransaction);
      setAmountTransaction('');
      setTextTransaction(''); 
   }
   
   return (
      <>
         <h3>Add new transaction</h3>
         <form id="form"
            onSubmit={onSubmit}
         >
            <div className="form-control">
               <label htmlFor="text">Text</label>
               <input
                  type="text"
                  placeholder="Enter text..."
                  value={textTransaction}
                  onChange={(e) => setTextTransaction(e.target.value)} 
               />
            </div>
            <div className="form-control">
               <label htmlFor="amount">
                  Amount <br /> (negative - expense, positive - income)
               </label>
               <input
                  type="number"
                  placeholder="Enter amount..."
                  value={amountTransaction}
                  onChange={(e) => setAmountTransaction(e.target.value)} 
               />
            </div>
            <button className="btn">Add transaction</button>
         </form>
      </>
   );
};

export default AddTransaction;