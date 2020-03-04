import React from "react";
import Main from "./Main";

class App extends React.Component {
  state = {
    bored: null
  };

  componentDidMount() {
    
    api
      .getTransactions() // triggers the initial GET request
      .then(response => {
        // is the response from the server
        this.setState({
          bored: response.body
        });
      });
  }
  render() {
    return (
    <React.Fragment>
    <Main bored={this.state.bored} />
    </React.Fragment>
    )}
}
export default App;
