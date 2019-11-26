import * as React from "react";
import { render } from "react-dom";

import CtxProvider from "./Context";
import A from "./A";
import B from "./B";

function App() {
  return (
    <div className="App">
      <CtxProvider>
        <A />
        <B />
      </CtxProvider>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
