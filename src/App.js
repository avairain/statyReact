import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
// import PropsProxy from './components/base/propsProxy/PropsProxy'
// import PropsControl from './components/base/propsProxy/PropsControl'
import PropsControl2 from './components/base/propsProxy/PropsControl2'

class App extends Component {
  static show = true

  constructor(props) {
    super(props)
    this.state = {
      show: true,
    }
  }

  clickPropsControl2(e) {
    e.persist()
    console.log(this)
    this.show = false
    this.setState({ show: false })
    console.log(e)
  }

  render() {
    const { show } = this.state
    console.log(show)
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
                <PropsControl2
                  ref={(c) => { this.propsControls = c }}
                />
              )
              : <div />
          }
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
