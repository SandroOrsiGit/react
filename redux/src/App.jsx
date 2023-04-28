import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/actions";

function App() {
  const count = useSelector((state) => state.counter.counter);

  const dispatch = useDispatch();

  const handleIncrement = () => dispatch(increment(1));
  const handleDecrement = () => dispatch(decrement(1));
  const handleReset = () => dispatch(reset());
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <p>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </p>
    </div>
  );
}

export default App;
