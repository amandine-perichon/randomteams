import React from 'react'

export default React.createClass({
  propTypes: {
    onControllerChange: React.PropTypes.func.isRequired
  },
  render () {
    return (
      <div className="controller">
        <div></div>
        <div className="button" name="up" onClick={this.props.onControllerChange}></div>
        <div></div>
        <br/>
        <div className="button" name="left" onClick={this.props.onControllerChange}></div>
        <div className="button"></div>
        <div className="button" name="right" onClick={this.props.onControllerChange}></div>
        <br/>
        <div></div>
        <div className="button" name="down" onClick={this.props.onControllerChange}></div>
        <div></div>
      </div>
    )
  }
})
