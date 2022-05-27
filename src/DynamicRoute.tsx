import { useParams } from "react-router-dom";

export function DynamicRoute() {
  // get path params
  const { dynamic } = useParams();

  return (
    <>
      <h1>Dynamic Route</h1>
      <h3>Dynamic = {dynamic}</h3>
    </>
  );
}
