import * as React from "react";
import { SimpleCtx } from "./CtxProvider";
import { useContext } from "react";

const CtxConsumer = () => {
  const ctx = useContext(SimpleCtx);
  return (
    <div>
      <h2>Simple Ctx usage</h2>
      <div>value: {ctx.value}</div>
      <input onChange={e => ctx.setValue(e.target.value)} />
    </div>
  );
};
export default CtxConsumer;
