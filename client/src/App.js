import React, { Component } from "react";
import "./App.css";

class App extends Component {
  // Initialize state
  state = { lottonumbers: [] };

  // Fetch passwords after first mount
  componentDidMount() {
    this.getLottoNumbers();
  }

  getLottoNumbers = () => {
    // Get the passwords and store them in state
    fetch("/api/lotto")
      .then(res => res.json())
      .then(lottonumbers => this.setState({ lottonumbers }));
  };

  renderLottoBlock = numbers => {
    return numbers.map((number, index) =>
      <div className="tinysquare" key={index}>{number}</div>
    );
  };

  render() {
    const { lottonumbers } = this.state;

    return (
      <div className="App">
        {/* Render the passwords if we have them */}
        {lottonumbers.length
          ? <div>
              <h1>5 Lotto Numbers.</h1>
              {/*
                Generally it's bad to use "index" as a key.
                It's ok for this example because there will always
                be the same number of passwords, and they never
                change positions in the array.
              */}
              {lottonumbers.map((lottonumber, index) => {
                return (
                  <div key={index}>{this.renderLottoBlock(lottonumber)}</div>
                );
              })}
              <button className="more" onClick={this.getLottoNumbers}>
                Get More
              </button>
            </div>
          : // Render a helpful message otherwise
            <div>
              <h1>No Numbers Generated :(</h1>
              <button className="more" onClick={this.getLottoNumbers}>
                Try Again?
              </button>
            </div>}
      </div>
    );
  }
}

export default App;
