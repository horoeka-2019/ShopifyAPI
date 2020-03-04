import React from 'react'

class Main extends React.Component {
  render () {
    const { setup, type, punchline } = this.props.joke
    return (
      <React.Fragment>
        <h1>Here's a joke you may enjoy:</h1>
        <h2>Genre: {type}</h2>
        <h5>{setup}</h5>
        <h5>{punchline}</h5>

      </React.Fragment>
    )
  }
}

export default Main