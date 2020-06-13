import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
    case "DECREMENT":
      return {
        count: state.count - action.amount,
      };
    default:
      return state;
  }
}

export default function TestReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", amount: 1 })}>
        Sub 1
      </button>
      <button onClick={() => dispatch({ type: "INCREMENT", amount: 5 })}>
        Add 5
      </button>
    </div>
  );
}
