import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Switch, Route, Redirect } from 'react-router-dom'
import PrivateRoute from '../hocs/privateRoute'

import styles from './styles'

import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'

const App = ({ classes }) => {
  return (
    <div className={classes.root}>
      <Switch>
        <PrivateRoute path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
