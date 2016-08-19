import React from 'react'

export default React.createClass({
  propTypes: {
    onControllerChange: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div className="controller">
        <div></div>
        <div><button name="up" onClick={this.props.onControllerChange}>UP</button></div>
        <div></div>
        <br/>
        <div><button name="left" onClick={this.props.onControllerChange}>LEFT</button></div>
        <div></div>
        <div><button name="right" onClick={this.props.onControllerChange}>RIGHT</button></div>
        <br/>
        <div></div>
        <div><button name="down" onClick={this.props.onControllerChange}>DOWN</button></div>
        <div></div>
      </div>
    )
  }
})
