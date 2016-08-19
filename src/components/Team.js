import React from 'react'

export default React.createClass({
  propTypes: {
    members: React.PropTypes.array.isRequired,
    teamname: React.PropTypes.string.isRequired,
    teamicon: React.PropTypes.string.isRequired,
    membericon: React.PropTypes.string.isRequired
  },

  createMember (member, i) {
    return <div key={i}> {member} </div>
  },

  render () {
    return (
      <div className="team">
        <div className="team">
          <h2 className="team-name">{this.props.teamname}</h2>
          <div className="team-members">{this.props.members.map(this.createMember)}</div>
          {/*}<img className="teamicon-img" src ={this.props.teamicon} />
          <img className="membericon-img" src ={this.props.membericon} />*/}
        </div>
      </div>
    )
  }
})
