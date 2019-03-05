import React, { Component } from 'react'
import PropTypes from 'prop-types'
import COMMONHOC from 'HOC/Common-HOC'
import RenderHijackHOC from '../../HOC/inheritanceInversion/RenderHijackHOC'
// import RenderOrder from './RenderOrder'
// import FuncComponent from './FuncComponent'

@COMMONHOC
@RenderHijackHOC('red')
class RenderHijack extends Component {
  static propTypes = {
    value: PropTypes.string,
  }

  static defaultProps = {
    value: '',
  }

  constructor(props) {
    super(props)
    const { value } = props
    console.log(this.props)
    this.state = {
      value: value || '',
    }
  }

  shouldComponentUpdate(nextProps) {
    console.log()
    console.log(nextProps)
    console.log(this.props)
    return true
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }

  render() {
    const { value } = this.state
    console.log(this.props)
    return (
      <div>
        {value}
        <div><input value={value} readOnly disabled /></div>
        {/* <div>{value}</div> */}
        {/* <div>RenderHijack</div> */}
        {/* <div><RenderOrder /></div> */}
        {/* <div><FuncComponent /></div> */}
      </div>
    )
  }
}

export default RenderHijack
