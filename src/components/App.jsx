import * as React from "react";
import { hot } from "react-hot-loader/root";

import bootstrapLogo from "../assets/img/bootstrap-solid.svg";
import reactLogo from "../assets/img/react.svg";
import "../assets/scss/app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  resetCount = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { content } = this.props;
    const { count } = this.state;

    return (
      <>
        <div className="text-center">
          <div className="helloworld">
            <img className="mb-4" src={bootstrapLogo} alt="Bootstrap Logo" width="72px" height="72px" />
            <img className="mb-4" src={reactLogo} alt="React Logo" width="72px" height="72px" />
            <h1 className="h3 mb-3 font-weight-normal">{content} ({count})</h1>
            <button className="btn btn-lg btn-primary btn-block" onClick={this.incrementCount}>Increment</button>
            <button className="btn btn-lg btn-primary btn-block" onClick={this.resetCount}>Reset</button>
          </div>
        </div>
      </>
    );
  }
}

export default hot(App);
