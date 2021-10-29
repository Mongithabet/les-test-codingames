import React, { Component } from 'react'
import Profile from './components/Profile'
import { UserContext } from './components/MyContext'
import { ColorContext } from './components/MyContext'
export default class App extends Component {


  state = {
    user: {
      name: 'Lisa',
      age: 8
    }
  }
  render() {
    return (
      <UserContext.Provider value={this.state.user}>
        <ColorContext.Provider value={'red'} >
        <Profile />
        </ColorContext.Provider>
      </UserContext.Provider>
    )
  }
}
