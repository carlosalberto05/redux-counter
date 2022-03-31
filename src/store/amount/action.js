// import { types } from "./types";

// const deposit = () => {
//   return {
//     type: types.deposit,
//     payload: 10,
//   };
// };

// const withdraw = () => {
//   return {
//     type: types.withdraw,
//     payload: -10,
//   };
// };

// export { deposit, withdraw };

import { types } from "./types";

const deposit = () => {
  return {
    type: types.deposit,
    payload: 10,
  };
};

const withdraw = () => {
  return {
    type: types.withdraw,
    payload: 10,
  };
};

export const increaseAmount = () => {
  return (dispatch) => {
    dispatch(deposit());
  };
};

export const decreaseAmount = () => {
  return (dispatch) => {
    dispatch(withdraw());
  };
};
