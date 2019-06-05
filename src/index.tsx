import * as React from "react";
import { render } from "react-dom";

import "./styles.css";
import CtxProvider from "./CtxProvider";
import CtxConsumer from "./CtxConsumer";

function App() {
  return (
    <div className="App">
      <CtxProvider>
        <CtxConsumer />
      </CtxProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
