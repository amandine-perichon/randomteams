import React from 'react'

export default React.createClass({
  PropTypes: {
  onInputNameChange: React.PropTypes.func.isRequired
},
getInitialState () {
  return {
    numberOfInput: 1,
    members: [],
    member: ""
  }
},
addInput () {
  this.setState({numberOfInput: this.state.numberOfInput + 1})
},

updateName (evt) {
  const name= evt.target.value
  const inputName= evt.target.name
  let newMembers = [].concat(this.state.members)
  newMembers[inputName]=name
  this.setState({members: newMembers}, function () {
    this.props.onInputNameChange(this.state.members)
  })
},
clear () {
  this.setState(this.getInitialState())
},
render () {
  const inputFields = []
  for (let i = 1; i <= this.state.numberOfInput; i++) {
    inputFields.push((
      <div key={i}>
        <input type="text" onChange={this.updateName} name={i} value={this.state.members[i] || ""}/>
        <button type="button" onClick={this.addInput}>+</button>
        </div>
      ))
  }

  return (
  <form className="nameinput">
    {inputFields}
  </form>
    )
  }
})
