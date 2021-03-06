import * as React from "react";
import { NavBar } from "./nav/navbar";
import { Everything } from "./interfaces";

export default class App extends React.Component<Everything, {}> {
  render() {
    return (
      <div className="app">
        <NavBar { ...this.props } />
        {this.props.children}
      </div>
    );
  }
}
