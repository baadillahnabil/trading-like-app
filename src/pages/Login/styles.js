const styles = theme => ({
  root: {
    margin: '5% auto'
  },

  loginBox: {
    borderRadius: 6,
    border: `1px solid ${theme.palette.border.main}`,
    padding: '1.5em',
    width: 400
  },
  title: {
    fontSize: 20,
    marginBottom: 20
  },

  inputEmail: {
    marginBottom: 15
  },
  inputPassword: {
    marginBottom: 15
  },
  buttonLogin: {
    boxShadow: 'none',
    marginTop: 15
  },
  errorMessage: {
    color: theme.palette.text.error,
    margin: 0,
    marginTop: 5
  }
})

export default styles
