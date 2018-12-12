// @flow
import React, {Component} from 'react'
// $FlowFixMe
import './App.scss'
import Article from 'modules/Article'

class App extends Component<*> {

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <img className='logo' src='getlink.png' alt=''/>
          <div className='menu'>
            <a href='https://getlinks.co'>Project</a>
            <a href='https://getlinks.co'>Homepage</a>
            <a href='https://getlinks.co'>Career</a>
          </div>
        </div>
        <div className='title'>
          <h1>What is GetLinks</h1>
          <span>
            GetLinks is a platform and ecosystem that connects tech talents with
            opportunities across Asia. We support people to build their skills,
            their connections, their teams and their careers.
          </span>
        </div>
        <Article/>
        <div className='footer'>
          THIS IS SOME KIND OF FOOTER
        </div>
      </div>
    )
  }
}

export default App
