import { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";
import axios from 'axios';

const initailState = {
   transactions: [],
   error: null,
   loading: true
}

// Create context
export const GlobalContext = createContext(initailState);


// Providder
export const GlobalProvider = ({children}) => {
   const [state, dispatch] = useReducer(AppReducer, initailState);

   // Actions

   const getTransactions = async () => {
      try {
         const resp = await axios.get('/api/v1/transactions');

         dispatch({
            type: "GET_TRANSACTIONS",
            payload: resp.data.data
         })
      } catch (error) {
         dispatch({
            type: "ERROR_TRANSACTION",
            payload: error.response.data.error
         })
      }
   }

   const addTransaction = async (payload) => {
      const configType = {
         headers: {'Content-Type': 'application/json'}
   };
      try {
         const resp = await axios.post('/api/v1/transactions', payload, configType)

         dispatch({
            type: 'ADD_TRANSACTION',
            payload: resp.data.data
         })
      } catch (error) {
         dispatch({
            type: "ERROR_TRANSACTION",
            payload: error.response.data.error
         })
      }
   }
   
   const deleteTransaction = async (id) => {
      try {
         await axios.delete(`/api/v1/transactions/${id}`);
         dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
         })
      } catch (error) {
         dispatch({
            type: "ERROR_TRANSACTION",
            payload: error.response.data.error
         })
      }
   }

   return (
   <GlobalContext.Provider value={{
      transactions: state.transactions,
      error: state.error,
      loading: state.loading,
      getTransactions,
      deleteTransaction,
      addTransaction
   }}>
      {children}
   </GlobalContext.Provider>)
}