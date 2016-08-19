import React from 'react'

export default React.createClass({
  propTypes: {
    onControllerChange: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div className="controller">
        <button name="up" onClick={this.props.onControllerChange}>UP</button>
        <button name="down" onClick={this.props.onControllerChange}>DOWN</button><br/>
        <button name="left" onClick={this.props.onControllerChange}>LEFT</button>
        <button name="right" onClick={this.props.onControllerChange}>RIGHT</button>
      </div>
    )
  }
})
