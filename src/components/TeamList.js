import React from 'react'
import Team from './Team'
import getTeamNames from '../lib/randomNames'

export default React.createClass({
  propTypes: {
    selectedCategory: React.PropTypes.number.isRequired,
    teams: React.PropTypes.array.isRequired
  },
  render () {
    const teamNames = getTeamNames(this.props.selectedCategory, this.props.teams.length)
    const teams = this.props.teams.map((elem, i) => {
      return <Team key={i} members={elem} teamname={teamNames[i]} teamicon="To do" membericon="To do"/>
    })
    return (
      <div className="team-list">
        {teams}
      </div>
    )
  }
})
