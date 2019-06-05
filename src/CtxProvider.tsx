import * as React from "react";

type SetValue = (value: any) => void;
interface AppContextInterface {
  value: any;
  setValue: SetValue;
}

export const SimpleCtx = React.createContext<AppContextInterface | null>(null);

class CtxProvider extends React.Component<{}, AppContextInterface> {
  setValue: SetValue;
  constructor(props) {
    super(props);

    this.setValue = value => {
      this.setState({
        value
      });
    };

    this.state = {
      value: null,
      setValue: this.setValue
    };
  }

  render() {
    return (
      <SimpleCtx.Provider value={this.state}>
        {this.props.children}
      </SimpleCtx.Provider>
    );
  }
}

export default CtxProvider;
