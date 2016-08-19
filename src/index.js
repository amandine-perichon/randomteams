import React from 'react'
import ReactDOM from 'react-dom'

import RandomTeams from './components/RandomTeams'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <RandomTeams />,
    document.getElementById('app')
  )
})
