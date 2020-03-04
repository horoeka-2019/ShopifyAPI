import React from 'react'

class Main extends React.Component {
  render () {
    const {id, email, number } = this.props.order
    return (
      <React.Fragment>
        <h1>Here's are some orders:</h1>
        <h2>{id}</h2>
        {/* <h2>{email}</h2> */}
        {/* <h2>{number}</h2> */}
        

      </React.Fragment>
    )
  }
}

export default Main