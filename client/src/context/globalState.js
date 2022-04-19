import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initailState = {
   transactions: []
}

// Create context
export const GlobalContext = createContext(initailState);


// Providder
export const GlobalProvider = ({children}) => {
   const [state, dispatch] = useReducer(AppReducer, initailState);

   // Actions
   const addTransaction = (payload) => {
      dispatch({
         type: 'ADD_TRANSACTION',
         payload
      })
   }
   
   const deleteTransaction = (id) => {
      dispatch({
         type: 'DELETE_TRANSACTION',
         payload: id
      })
   }

   return (
   <GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
   }}>
      {children}
   </GlobalContext.Provider>)
}