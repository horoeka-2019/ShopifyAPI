import React from "react";

import * as api from "../api";

// import Main from './Main'

class App extends React.Component {
  state = {
    order: []
  };

  componentDidMount() {
    api.getOrder().then(response => {
      this.setState({
        order: response.body.orders
      });
    });
  }

  render() {
    

    return (
      <React.Fragment>
        <h1>Orders:</h1>
        <ul>
          {this.state.order.map(function(item, index) {
            return (
              <div>
                <h3>{item.id}</h3>
                <h3>{item.email}</h3>
              </div>
            );
          })}
        </ul>

        {/* {this.state.order && <Main order={this.state.order}/>} */}
      </React.Fragment>
    );
  }
}

export default App;
