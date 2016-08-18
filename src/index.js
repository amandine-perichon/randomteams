import React from 'react'
import ReactDOM from 'react-dom'

import CategoryList from './components/CategoryList'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <CategoryList selectedCategory="mario"/>,
    document.getElementById('app')
  )
})
