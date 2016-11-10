import React from 'react'

export default class HelloWorld extends React.Component {

  getMessage () {
    return '<img src=""></img>'
  }

  render () {
    return (
      <img src={this.getMessage()} />
    )
  }
}
