import React from 'react'

import * as api from '../api'


import Joke from './Joke'

class App extends React.Component {
  state = {
   
    joke: null
  }

  componentDidMount () { // opens up communication, trigger API
    
    api.getJoke()
      .then(response => {
        this.setState({
          joke: response.body
        })
      })
  }

  render () {
    return (
      <React.Fragment>
      
        
        {this.state.joke && <Joke joke={this.state.joke}/>}

      </React.Fragment>

    )
  }
}

export default App
