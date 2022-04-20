import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';
import { numberWithCommas } from '../utils/format';

const Balance = () => {
   const {transactions} = useContext(GlobalContext);
   const total = transactions.reduce((acc, next) => acc + next.amount, 0).toFixed(2);
   const sign = total >= 0 ? '' : '-';
   const formattedTotal = numberWithCommas(Math.abs(total))
   return (
      <>
         <h4>Your Balance</h4>
         <h1>{sign}${formattedTotal}</h1>
      </>
   )
}

export default Balance;
