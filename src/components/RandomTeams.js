import React from 'react'
import CategoryList from './CategoryList'
import Controller from './Controller'
import TeamList from './TeamList'
import NameInput from './NameInput'

import randomTeamsGenerator from '../lib/random'

export default React.createClass({
  propTypes: {

  },
  getInitialState () {
    return {
      members: [],
      numberTeams: 1,
      selectedCategory: 0,
      teams: []
    }
  },
  onControllerChange (evt) {
    const control = evt.target.name
    if (control === "up") {
      this.setState({numberTeams: this.state.numberTeams + 1})
    } else if (control === "down") {
      this.setState({numberTeams: Math.max(this.state.numberTeams - 1, 1)})
    } else if (control === "left") {
      this.setState({selectedCategory: this.previous(this.state.selectedCategory)})
    } else if (control === "right") {
      this.setState({selectedCategory: this.next(this.state.selectedCategory)})
    }
  },
  previous: function (currentIndex) {
    var max = 5
    var index = currentIndex !== 0? currentIndex - 1 : max - 1
    return index
  },
  next: function (currentIndex) {
    var max = 5
    var index = currentIndex !== max - 1? currentIndex + 1 : 0
    return index
  },
  onInputNameChange (members) {
    this.setState({members: members})
  },
  go () {
    this.setState({teams: randomTeamsGenerator(this.state.members, this.state.numberTeams)})
  },
  clear () {
    this.setState({
      members: [],
      numberTeams: 1,
      selectedCategory: 0,
      teams: []
    })
  },
  render () {
    return (
      <div className="randomteams">
        <h1>RETRO TEAM BLASTER</h1>
        <div className="first row">
          <Controller onControllerChange={this.onControllerChange}/>
          <div>
            <h2>Number of teams: {this.state.numberTeams}</h2>
            <NameInput onInputNameChange={this.onInputNameChange}/>
          </div>
        </div>
        <div className="row">
          <CategoryList selectedCategory={this.state.selectedCategory}/>
        </div>
        <div className="row">
          <div className="game-button go" onClick={this.go}>GO</div>
          <div className="game-button clear" onClick={this.clear}>CLEAR</div>
        </div>
        <div className="row">
          <TeamList teams={this.state.teams} selectedCategory={this.state.selectedCategory}/>
        </div>
      </div>
    )
  }
})
