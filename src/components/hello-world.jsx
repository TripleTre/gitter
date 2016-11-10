import React from 'react'
import FileReader from './file-reader/file-reader.jsx'

export default class HelloWorld extends React.Component {

  getMessage () {
    return '<img src=""></img>'
  }

  render () {
    return (
      <FileReader />
    )
  }
}
