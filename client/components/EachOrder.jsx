  
import React from "react";


class EachOrder extends React.Component {
  render() {
    const { id, email } = this.props;
    return (
      <React.Fragment>
        <div>{id}</div>
        <div>{email}</div>
              
           
      </React.Fragment>
    );
  }
}

export default EachOrder;