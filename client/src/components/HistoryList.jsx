import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import TransactionItem from './TransactionItem';

const HistoryList = () => {
  const {transactions} = useContext(GlobalContext);
  
   return (
      <>
      <h3>History</h3>
        <ul className="list">
          {!transactions.length && <h2>No transactions...</h2>}
          {transactions &&
            transactions.map(transaction => (
              <TransactionItem 
                key={transaction.id} 
                text={transaction.text}
                amount={transaction.amount}
                id={transaction.id}
              />
            ))
            }
        </ul>
      </>
   );
};

export default HistoryList;