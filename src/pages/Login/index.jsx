import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/styles'
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import { withRouter } from 'react-router-dom'

import {
  Grid,
  Typography,
  TextField,
  Button,
  CircularProgress
} from '@material-ui/core'

import styles from './styles'

const Login = ({ classes, history }) => {
  const { enqueueSnackbar } = useSnackbar()

  const onLogin = async (values, { setSubmitting }) => {
    try {
      setSubmitting(true)
      setTimeout(() => {
        setSubmitting(false)
        enqueueSnackbar('Logged In!', { variant: 'success' })

        // Set randomly auth token so that we can go to dashboard.
        // This is supposed to get from API
        window.localStorage.setItem('auth_token', 'gfhj35iuy235hj34o6h')

        history.push('/')
      }, 1500)
    } catch (error) {
      console.log({ ...error })
    }
  }

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      direction="column"
      className={classes.root}
    >
      <Grid className={classes.loginBox}>
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("That's not an email bro, come on")
              .required("You can't log in without an email bro"),
            password: Yup.string()
              .min(8, 'Please be creative and put more for your own safety')
              .required("You can't log in without a password bro")
              .test(
                'match',
                "Sorry, you can't do that, it's easily guessed, trust me :)",
                password =>
                  password &&
                  password.toLowerCase() !== 'password' &&
                  password.toLowerCase() !== 'p455w012d'
              )
          })}
          onSubmit={onLogin}
        >
          {({ errors, touched, handleSubmit, isSubmitting }) => (
            <Form className={classes.form}>
              <Typography component="p" className={classes.title}>
                Log In
              </Typography>
              <Field name="email">
                {({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    helperText={errors.email && touched.email && errors.email}
                    FormHelperTextProps={{ className: classes.errorMessage }}
                    className={classes.inputEmail}
                  />
                )}
              </Field>
              <Field name="password">
                {({ field }) => (
                  <TextField
                    {...field}
                    type="password"
                    label="Password"
                    margin="dense"
                    variant="outlined"
                    fullWidth
                    helperText={
                      errors.password && touched.password && errors.password
                    }
                    FormHelperTextProps={{ className: classes.errorMessage }}
                    className={classes.inputPassword}
                  />
                )}
              </Field>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                fullWidth
                disabled={isSubmitting}
                classes={{ root: classes.buttonLogin }}
                onClick={handleSubmit}
              >
                {isSubmitting ? (
                  <CircularProgress
                    className={classes.progress}
                    size={20}
                    thickness={10}
                    color="secondary"
                  />
                ) : (
                  'Log In'
                )}
              </Button>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.any.isRequired
}

export default withRouter(withStyles(styles)(Login))
