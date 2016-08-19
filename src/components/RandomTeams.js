import React from 'react'
import CategoryList from './CategoryList'
import Controller from './Controller'
//import NameInput from './NameInput'

import randomTeamsGenerator from '../lib/random'

export default React.createClass({
  propTypes: {

  },
  getInitialState () {
    return {
      members: ["Amandine", "Sam", "Jana", "Kamon", "Justin", "Erwin", "Sash", "Prem", "Tim", "Siobhan", "Julia"],
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
  onCategoryChange () {

  },
  go () {
    this.setState({teams: randomTeamsGenerator(this.state.members, this.state.numberTeams)})
  },
  clear () {
    this.setState({
      members: [],
      numberTeams: 1,
      selectedCategory: 1
    })
  },
  render () {
    const teams = this.state.teams.map((elem, i) => {
      return <div>elem</div>
    })
    return (
      <div className="randomteams">
        <div className="row">
          <Controller onControllerChange={this.onControllerChange}/>
          <div>
            <div>{this.state.numberTeams} teams</div>
            {/* <NameInput onInputNameChange={this.onInputNameChange}/>*/}
          </div>
        </div>
        <div className="row">
          <CategoryList selectedCategory={this.state.selectedCategory}/>
        </div>
        <div className="row">
          <div className="game-button" onClick={this.go}>GO</div>
          <div className="game-button" onClick={this.clear}>CLEAR</div>
        </div>
        <div className="row">
          {teams}
        </div>
      </div>
    )
  }
})