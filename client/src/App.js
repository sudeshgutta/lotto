import React, { Component } from "react";
import LottoBlock from "./lotto/components/LottoBlock";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";

const Fade = ({ children, ...props }) =>
  <CSSTransition {...props} timeout={500} classNames="fade">
    {children}
  </CSSTransition>;

class App extends Component {
  // Initialize state
  state = { lottonumbers: [] };

  // Fetch lotto numbers after first mount
  componentDidMount() {
    this.getLottoNumbers();
  }

  getLottoNumbers = () => {
    // Get the randomly generated lotto numbers and store them in state
    fetch("/api/lotto")
      .then(res => res.json())
      .then(lottonumbers => this.setState({ lottonumbers }));
  };

  // renderLottoBlock = numbers => {
  //   return numbers.map((number, index) =>
  //     <div className="tinysquare" id="ts" key={index}>{number}</div>
  //   );
  // };

  render() {
    const { lottonumbers } = this.state;

    return (
      <div className="App">
        {/* Render the numbers if we have them */}
        {lottonumbers.length
          ? <div>
              <h1>Random Lotto Number Generator!</h1>
              <TransitionGroup className="todo-list">
                {lottonumbers.map((lottonumber, index) => {
                  return(
                  <Fade key={lottonumber}>
                    <div key={index}>
                      Row {index + 1} -{" "}
                      <LottoBlock lottonumber={lottonumber} key={index} />
                    </div>
                  </Fade>
                );
                })}
              </TransitionGroup>
              <button className="getmore" onClick={this.getLottoNumbers}>
                Dude.. Get Me More
              </button>
            </div>
          : // Render a helpful message otherwise
            <div>
              <h1>No Numbers Generated :(</h1>
              <button className="getmore" onClick={this.getLottoNumbers}>
                Try Again?
              </button>
            </div>}
      </div>
    );
  }
}

export default App;

// <div key={index}>Row {index + 1} - {this.renderLottoBlock(lottonumber)}</div>
