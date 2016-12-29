import React from 'react'
import FlatButton from './components/button/flat-button/FlatButton'
import Style from './App.less'

export default class App extends React.Component {

  render () {
    return (
      <FlatButton className={Style.fbtn} backgroundColor="red" event={{onClick: this.clickHandle}}><a>iuytrtyu</a></FlatButton>
    )
  }

  clickHandle = () => {
    console.log(this)
  }
}
