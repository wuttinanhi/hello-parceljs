import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <>
      <h1>Counter</h1>
      <h2>{count}</h2>

      <button type="button" onClick={increment}>
        Increase
      </button>
      <button type="button" onClick={decrement}>
        Decrease
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </>
  );
}
