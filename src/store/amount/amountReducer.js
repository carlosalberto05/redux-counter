// const initialState = {
//   amount: 0,
// };

// export const amountReducer = (state = initialState, action) => {
//   if (action.type === "DEPOSIT_MONEY") {
//     return {
//       ...state,
//       amount: state.amount + 10,
//     };
//   }

//   if (action.type === "WITHDRAW_MONEY") {
//     return {
//       ...state,
//       amount: state.amount - 10,
//     };
//   }

//   return state;
// };

import { types } from "./types";

const initialState = {
  amount: 0,
};

export const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.deposit:
      return {
        ...state,
        amount: state.amount + action.payload,
      };

    case types.withdraw:
      return {
        ...state,
        amount: state.amount - action.payload,
      };

    default:
      return state;
  }
};
