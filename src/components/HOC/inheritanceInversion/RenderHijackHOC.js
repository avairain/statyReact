import React from 'react'
import PropTypes from 'prop-types'

const RenderHijackHOC = c => WrappedComponent => class RenderHijackHOCFn extends
  WrappedComponent {
  static propTypes = {
    loggedIn: PropTypes.bool,
  }

  static defaultProps = {
    loggedIn: true,
  }

  constructor(props) {
    super(props)
  }

  changeValue() {
    // this.setState()
    const { value } = this.props
    console.log(value)
    this.setState({
      value,
    })
    // this.forceUpdate()
  }

  render() {
    const VAL = Object.assign({}, this.props)

    const { loggedIn } = VAL
    delete VAL.loggedIn
    let code
    const newProps = {
      value: 'render-hijack',
      // changeValue: this.changeValue.bind(this),
    }
    // code = super.render()
    const ex = super.render()
    if (loggedIn) {
      code = (
        <div style={{ color: c }}>
          <div>React.cloneElement</div>
          <div
            onClick={() => this.changeValue()}
            role="button"
            tabIndex="0"
            onKeyPress={() => this.changeValue()}
          >
            <span>changeValue</span>
            {React.cloneElement(ex, newProps, ex.props.children)}
          </div>
        </div>
      )
    } else {
      code = (
        <div style={{ color: c }}>
          <div>RenderHijackHOC</div>
        </div>
      )
    }
    console.log(code)
    return code
  }
}

export default RenderHijackHOC
