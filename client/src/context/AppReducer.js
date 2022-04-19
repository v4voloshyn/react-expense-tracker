const ADD_TRANSACTION = 'ADD_TRANSACTION';
const DELETE_TRANSACTION = 'DELETE_TRANSACTION';

export const AppReducer = (state, action) => {
   switch(action.type) {
      case ADD_TRANSACTION:
         return {...state, transactions: [action.payload, ...state.transactions]}
      case DELETE_TRANSACTION:
         return {...state, transactions: state.transactions.filter(trans => trans.id !== action.payload)}
      default: 
         return state
   }
}

// export const deleteTransaction = (id) => 