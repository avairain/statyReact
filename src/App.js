import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import PropsProxy from './components/base/propsProxy/PropsProxy'
// import PropsControl from './components/base/propsProxy/PropsControl'
import PropsControl2 from './components/base/propsProxy/PropsControl2'
import AbstractState from './components/base/propsProxy/AbstractState'
import InheritanceInversion from './components/base/inheritanceInversion/InheritanceInversion'
import RenderOrder from './components/base/inheritanceInversion/RenderOrder'
import RenderHijack from './components/base/inheritanceInversion/RenderHijack'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show: true,
      showRenderHijack: true,
    }
  }

  clickPropsControl2(e) {
    // console.log(this, e)
    this.show = !this.show
    e.persist()
    // this.show = false
    this.setState({ showRenderHijack: this.show })
  }

  render() {
    const { show, showRenderHijack } = this.state
    const renderHijack = { loggedIn: showRenderHijack }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            <code>src/App.js</code>
            and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        {/* <PropsProxy /> */}
        {/* <PropsControl /> */}
        <div
          role="button"
          tabIndex="0"
          onKeyPress={() => this.clickPropsControl2()}
          onClick={e => this.clickPropsControl2(e)}
        >
          {
            show
              ? (
                <div>
                  <PropsControl2
                    ref={(c) => { this.propsControls = c }}
                  />
                  <AbstractState />
                  <InheritanceInversion />
                  <RenderOrder />
                </div>
              )
              : <div />
          }
          <RenderHijack {...renderHijack} />
        </div>
      </div>
    );
  }
}
/* function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
} */
export default App;
