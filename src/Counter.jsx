import { reducer } from "./reducer/reducer";
import { useReducer } from "react";
const initialState = { count: 0 };

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <span>{state.count}</span>
      <br />
      <button onClick={() => dispatch({ type: "decrement by 30" })}>-</button>
      <button onClick={() => dispatch({ type: "increment by 30" })}>+</button>
      <br />
      <button onClick={() => dispatch({ type: "reset to zero" })}>Reset</button>
    </div>
  );
}

export default Counter;
