import { useState } from "react";
import { Link } from "react-router-dom";

export function Linker() {
  const [goto, setGoto] = useState("any");

  return (
    <>
      <Link to="/home">Home</Link>
      <br />
      <Link to="/counter">Counter</Link>
      <br />
      <br />
      <input type="text" onChange={(event) => setGoto(event.target.value)} />
      <br />
      <a href={goto}>Go to /{goto}</a>
    </>
  );
}
