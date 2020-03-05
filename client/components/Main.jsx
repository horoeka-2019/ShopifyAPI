import React from "react";
import EachOrder from './EachOrder'

class Main extends React.Component {
  render() {

    return (
      <React.Fragment>
        <h1>Here are some orders:</h1>
        <div>{this.props.birds.map(order => (
              <EachOrder key={order.id} {...order} />
            ))}</div>
            


      </React.Fragment>
    );
  }
}

export default Main;
