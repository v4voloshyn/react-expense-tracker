import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const TransactionItem = ({text, amount, id}) => {
   const {deleteTransaction} = useContext(GlobalContext);

   const amountClass = amount > 0 ? 'plus' : 'minus';
   const sign = amount > 0 ? '+' : '-'
   return (
      <li className={amountClass}>
         <button 
            className="delete-btn"
            onClick={() => deleteTransaction(id)}
            >x</button>
         {text} <span>{sign}${Math.abs(amount)}</span>
      </li>
   )
}

export default TransactionItem