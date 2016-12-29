import React, {Component} from 'react'
import Style from './FlatButton.less'

export default class FlatButton extends Component {
  render () {
    return (
      <div className={`${Style.button} ${this.props.className}`} {...this.props.event}>
        <div className={Style.mask}>{this.props.children}</div>
        <button className={Style.btn} style={{backgroundColor: this.props.backgroundColor}}></button>
      </div>
    )
  }
}
