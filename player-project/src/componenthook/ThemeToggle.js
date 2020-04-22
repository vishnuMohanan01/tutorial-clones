import React, {Component} from "react";
import { ThemeContext } from "../ThemeContext.js";

class ThemeToggle extends Component {
  static contextType = ThemeContext;
  render () {
    const {toggleTheme} = this.context;
    return (
      <button onClick = {toggleTheme}>Theme Change</button>
    );
  }
}


export default ThemeToggle;
