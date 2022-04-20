const ADD_TRANSACTION = 'ADD_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';
const ERROR_TRANSACTION = 'ERROR_TRANSACTION';
const GET_TRANSACTIONS = 'GET_TRANSACTIONS';

export const AppReducer = (state, action) => {
   switch(action.type) {
      case GET_TRANSACTIONS:
         return {...state, loading: false, transactions: action.payload}
      case ERROR_TRANSACTION:
         return {...state, loading: false, error: action.payload}
      case ADD_TRANSACTION://try to reverse
         return {...state, transactions: [...state.transactions, action.payload]}
      case DELETE_TRANSACTION:
         return {
            ...state, 
            transactions: state.transactions
               .filter(trans => trans._id !== action.payload)
         }
      default: 
         return state
   }
}

// export const deleteTransaction = (id) => 