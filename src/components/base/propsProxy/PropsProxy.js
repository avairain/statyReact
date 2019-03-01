import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PropsProxyHOC from '../../HOC/propsProxy/PropsProxy-HOC'

@PropsProxyHOC
class PropsProxy extends Component {
  static propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
  }

  static defaultProps = {
    text: '',
    color: '',
  }

  constructor(props) {
    super(props)
    // console.log(props)
    this.text = props.text
    this.color = props.color
  }

  render() {
    const style = {
      color: this.color || '#fff',
    }
    return (
      <div style={style}>
        <div>
          <span>PropsProxy</span>
          {this.text}
        </div>
        <hr />
      </div>
    )
  }
}

export default PropsProxy
