import React from 'react'
import ReactDOM from 'react-dom'

import Team from './components/Team'
import NameInput from './components/NameInput'

function test () {
  console.log(test)
}
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <div>
      <Team members= {["Mandy", "Siobhan", "Sam", "Squirrel", "hawks"]} teamname= {"Zelda"} teamicon= {"Square"} membericon= {"Star"}/>
      <NameInput onInputNameChange={test} />
    </div>,
    document.getElementById('app')
  )
})
