import React, { useContext } from 'react';
import { GlobalContext } from '../context/globalState';

const Summary = () => {

  const {transactions} = useContext(GlobalContext);
  const income = transactions.filter(t => t.amount > 0).reduce((acc, next) => acc + next.amount, 0);
  const outcome = transactions.filter(t => t.amount < 0).reduce((acc, next) => acc + next.amount, 0);
  
   return (
      <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p className="money plus">+${income}</p>
          </div>
          <div>
            <h4>Expense</h4>
            <p className="money minus">-${Math.abs(outcome)}</p>
          </div>
        </div>
   );
};

export default Summary;