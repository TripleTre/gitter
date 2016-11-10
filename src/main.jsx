import React from 'react'
import HelloWorld from 'components/hello-world'
import ReactDom from 'react-dom'

ReactDom.render(
  React.createElement(HelloWorld),
  document.getElementById('app')
)
