import React, { Component } from "react";
import Lotto from "./components/lotto/index";

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = { lottonumbers: [] };
  }

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

  render() {
    return (
      <Lotto
        {...this.state}
        getLottoNumbers={this.getLottoNumbers.bind(this)}
      />
    );
  }
}

export default App;
