import { Routes, Route } from "react-router-dom";
import { Counter } from "./Counter";
import { Default } from "./Default";
import { DynamicRoute } from "./DynamicRoute";
import { Home } from "./Home";
import { Linker } from "./Linker";

export function Routing() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Linker></Linker>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/home" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path=":dynamic" element={<DynamicRoute />} />
      </Routes>
    </div>
  );
}
