import React from 'react'

export default React.createClass({
  propTypes: {
    selectedCategory: React.PropTypes.number.isRequired
  },
  render () {
    const categories = ["mario", "pacman", "zelda", "sonic", "donkeykong"]
    const categoriesElements = categories.map((elem, i) => {
      if (i === this.props.selectedCategory) {
        return (
        <div className="selected" key={i}>
          <img className="selected" key={i} src={"./images/" + elem + ".png"} alt={elem}/>
        </div>
      )
      } else {
        return (
        <div key={i}>
          <img key={i} src={"./images/" + elem + ".png"} alt={elem}/>
        </div>
      )
      }
    })
    return (
      <div className="categorylist">
        {categoriesElements}
      </div>
    )
  }
})
