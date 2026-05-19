import React from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App !</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Google</a>
)

const User = "| react"
const reactElement = React.createElement(
  'a',
  {href: 'https://youtube.com', target:'_blank' },
  'click here to visit YouTube',
      User
)

ReactDOM.createRoot(document.getElementById('root')).
  render(

    <MyApp />
    anotherElement
    reactElement
    <App />
    
  )