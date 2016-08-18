import React from 'react'
import CategoryList from './CategoryList'
import Controller from './Controller'
import NameInput from './NameInput'

export default React.createClass({
  propTypes: {

  },
  getInitialState () {
    return {
      members: [],
      numberTeams: 1,
      selectedCategory: "Mario"
    }
  },
  onControllerChange () {

  },
  onInputNameChange () {

  },
  onCategoryChange () {

  },
  go (evt) {

  },
  clear (evt) {

  },
  render () {
    return (
      <div className="randomteams">
        <div className="row">
          <Controller onControllerChange={this.onControllerChange}/>
          <NameInput onInputNameChange={this.onInputNameChange}/>
        </div>
        <div className="row">
          <CategoryList selectedCategory={this.state.selectedCategory}/>
        </div>
        <div className="row">
          <div className="game-button" onClick={this.go}>GO</div>
          <div className="game-button" onClick={this.clear}>CLEAR</div>
        </div>
      </div>
    )
  }
})
