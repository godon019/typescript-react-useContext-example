import * as React from "react";
import { SimpleCtx } from "./Context";
import { useContext } from "react";
import { aStyle } from "./styles";

const CtxConsumer = () => {
  const { valueA, setValueA } = useContext(SimpleCtx);
  return (
    <div style={aStyle}>
      <h2>Component A</h2>
      <div>value: {valueA}</div>
      <input value={valueA} onChange={e => setValueA(e.target.value)} />
    </div>
  );
};
export default CtxConsumer;
