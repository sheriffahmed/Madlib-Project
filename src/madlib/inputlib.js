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

  handleSubmit = e => {
    var first = document.getElementById("first").value;
    var second = document.getElementById("second").value;
    var third = document.getElementById("third").value;
    var fourth = document.getElementById("fourth").value;
    var fifth = document.getElementById("fifth").value;
    if (
      first !== "" &&
      second !== "" &&
      third !== "" &&
      fourth !== "" &&
      fifth !== ""
    ) {
      this.setState({
        word: first,
        word2: second,
        word3: third,
        word4: fourth,
        word5: fifth
      });
    }
  };

  renderWords = () => {
    const { word, word2, word3, word4, word5 } = this.state;

    return (
      <div>
        <h1> Madlib </h1>
        <p> Enter Words Below</p>
        <input type="text" id="first" placeholder="Noun" /> <br />
        <input type="text" id="second" placeholder="Noun" /> <br />
        <input type="text" id="third" placeholder="Noun" />
        <br />
        <input type="text" id="fourth" placeholder="Verb" /> <br />
        <input type="text" id="fifth" placeholder="Noun" />
        <br />
        <input type="submit" onClick={this.handleSubmit} />
        <p>
          {word === "___" &&
          word2 === "___" &&
          word3 === "___" &&
          word4 === "___" &&
          word5 === "___" ? (
            "Please fill in the form"
          ) : (
            <Story
              noun={word}
              noun2={word2}
              noun3={word3}
              noun4={word4}
              noun5={word5}
            />
          )}
        </p>
      </div>
    );
  };

  render() {
    return (
      <Switch>
        <Route exact path="/input" render={this.renderWords} />
      </Switch>
    );
  }
}

export default Madlib;
