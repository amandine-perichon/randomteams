import React from 'react'
import ReactDOM from 'react-dom'

import Team from './components/Team'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Team members= {["Mandy", "Siobhan", "Sam", "Squirrel", "hawks"]} teamname= {"Zelda"} teamicon= {"Square"} membericon= {"Star"}/>,
    document.getElementById('app')
  )
})
