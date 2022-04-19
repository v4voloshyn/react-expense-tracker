import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const Balance = () => {
   const {transactions} = useContext(GlobalContext);
   const total = transactions.reduce((acc, next) => acc + next.amount, 0);
   const sign = total >= 0 ? '' : '-';

   return (
      <>
         <h4>Your Balance</h4>
         <h1>{sign}${Math.abs(total)}</h1>
      </>
   )
}

export default Balance;
