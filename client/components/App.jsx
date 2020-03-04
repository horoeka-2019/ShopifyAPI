import React from 'react'

import * as api from '../api'

import Main from './Main'

class App extends React.Component {
  state = {
    order: null
  }

  componentDidMount () { 
    
    api.getOrder()
      .then(response => {
        this.setState({
          order: response.body
          
        })
        
      })
  }

  render () {
    console.log(this.state.order) // currently returning null
    return (
      <React.Fragment>
      
        
        {this.state.order && <Main order={this.state.order}/>}

      </React.Fragment>

    )
  }
}

export default App
