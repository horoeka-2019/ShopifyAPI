import React from "react";

import * as api from "../api";



class App extends React.Component {
  state = {
    order: [],
    
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
        <div className='title'>Order Details</div>
        <div className='container'>
        <h1>Order Name</h1>
        <ul>
          {this.state.order.map(function(item, index) {
            return (
              <div key={item.id}>
                <h3>{item.name}</h3>
            
              </div>
            );
          })}
        </ul>
        </div>

        
      </React.Fragment>
    );
  }
}

export default App;
