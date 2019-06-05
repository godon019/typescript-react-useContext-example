import * as React from "react";

type SetValue = (value: any) => void;
interface AppContextInterface {
  value: any;
  setValue: SetValue;
}

export const SimpleCtx = React.createContext<AppContextInterface | null>(null);

const CtxProvider: React.FC = props => {
  const [value, setValue] = React.useState(null);
  return (
    <SimpleCtx.Provider
      value={{
        value: value,
        setValue: setValue
      }}
    >
      {props.children}
    </SimpleCtx.Provider>
  );
};

export default CtxProvider;
