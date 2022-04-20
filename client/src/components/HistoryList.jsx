import React, { useContext, useEffect, useRef } from 'react';
import { GlobalContext } from '../context/globalState';
import TransactionItem from './TransactionItem';

const HistoryList = () => {
  const {transactions, getTransactions} = useContext(GlobalContext);

  /* const get = useRef(() => {})
  get.current = () => {
    getTransactions();
  }
  useEffect(() => {
    get.current();
  }, []) */
  
  useEffect(() => {
    getTransactions();
  }, [])
   return (
      <>
      <h3>History</h3>
        <ul className="list">
          {!transactions.length && <h2>No transactions yet...</h2>}
          {transactions &&
            transactions.map(transaction => (
              <TransactionItem 
                key={transaction._id} 
                text={transaction.text}
                amount={transaction.amount}
                id={transaction._id}
              />
            ))
            }
        </ul>
      </>
   );
};

export default HistoryList;