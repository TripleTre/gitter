import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ReactDom from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Router, Route, browserHistory} from 'react-router'
import App from './App'

injectTapEventPlugin()

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
)

ReactDom.render(
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('app')
)
