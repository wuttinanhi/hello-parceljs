import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  return (
    <>
      <h1>Hello world! zzz</h1>
      <h2>{count}</h2>
      <button type="button" onClick={increment}>
        Increase
      </button>
    </>
  );
}
