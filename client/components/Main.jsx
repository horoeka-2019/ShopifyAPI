import React from 'react'

class Main extends React.Component {
 
  render () {
    return (
      <React.Fragment>
        {this.props.bored.activity}
        {this.props.bored.type}
       

      </React.Fragment>

    )
  }
}

export default Main