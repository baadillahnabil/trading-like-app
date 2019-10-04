import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'

import { Grid, Typography } from '@material-ui/core'

import styles from './styles'

const Login = ({ classes }) => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Typography component="p">Login</Typography>
    </Grid>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
