import * as React from "react";
import { SimpleCtx } from "./Context";
import { useContext } from "react";
import { aStyle } from "./styles";

const CtxConsumer = () => {
  const { value, setValue } = useContext(SimpleCtx);
  return (
    <div style={aStyle}>
      <h2>Component A</h2>
      <div>value: {value}</div>
      <input value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
};
export default CtxConsumer;
