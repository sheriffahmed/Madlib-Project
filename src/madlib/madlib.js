import React from "react";
import { Route, Switch } from "react-router-dom";
import madlibAPI from "../madlibAPI";
import Story from "./Story";

class Madlib extends React.Component {
  constructor() {
    super();
    this.state = {
      word: "___",
      word2: "___",
      word3: "___",
      word4: "___",
      word5: "___",
      inputValue: ""
    };
  }

  updateInputValue = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  handleGenerate = e => {
    const list = madlibAPI.getAll();
    const num = Math.floor(Math.random() * list.length);
    const num2 = Math.floor(Math.random() * list.length);
    const num3 = Math.floor(Math.random() * list.length);
    const num4 = Math.floor(Math.random() * list.length);
    const num5 = Math.floor(Math.random() * list.length);
    this.setState({
      word: list[num],
      word2: list[num2],
      word3: list[num3],
      word4: list[num4],
      word5: list[num5]
    });
  };

  renderWords = () => {
    const { word, word2, word3, word4, word5 } = this.state;

    return (
      <div>
        <h1> Madlib List </h1>
        <Story
          noun={word}
          noun2={word2}
          noun3={word3}
          noun4={word4}
          noun5={word5}
        />
        <input type="submit" value="Generate" onClick={this.handleGenerate}/>
      </div>
    );
  };

  render() {
    return (
      <Switch>
        <Route exact path="/madlib" render={this.renderWords} />
      </Switch>
    );
  }
}

export default Madlib;
