import * as React from "react";
import { SimpleCtx } from "./Context";
import { useContext } from "react";
import { bStyle } from "./styles";

const CtxConsumer = () => {
  const { valueB, setValueB } = useContext(SimpleCtx);
  const [cnt, setCnt] = React.useState(0);
  const increaseCnt = () => setCnt(prev => prev++);
  React.useEffect(() => {
    console.log("increase");
    increaseCnt();
  });
  return (
    <div style={bStyle}>
      <h2>Component B</h2>
      <div>cnt: {cnt}</div>
      <input value={valueB} onChange={e => setValueB(e.target.value)} />
    </div>
  );
};
export default CtxConsumer;
