// import React from "react";

// import { deposit, withdraw } from "../../store/amount/action";
// import { connect } from "react-redux";

// const mapStateToProps = (state) => {
//   return {
//     amount: state.amountReducer.amount,
//   };
// };

// const Counter = ({ amount, deposit, withdraw }) => {
//   return (
//     <div>
//       <h1>{amount}</h1>
//       <button onClick={() => deposit()}>Deposit $10</button>
//       <button onClick={() => withdraw()}>Withdraw -$10</button>
//     </div>
//   );
// };

// // export default Counter;
// export default connect(mapStateToProps, { deposit, withdraw })(Counter);

import React from "react";

import { increaseAmount, decreaseAmount } from "../../store/amount/action";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();

  const amount = useSelector((store) => store.amount.amount);
  console.log(amount);

  return (
    <div>
      <h1>{amount}</h1>
      <button onClick={() => dispatch(increaseAmount())}>Deposit $10</button>
      <button onClick={() => dispatch(decreaseAmount())}>Withdraw -$10</button>
    </div>
  );
};

// export default Counter;
export default Counter;
