import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import LoginForm from './Form'
import useStyles from './styles'
import logo from 'images/fightforge.svg'

const Login = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container maxWidth="xs" fullWidth>
        <img src={logo} alt="logo-fightforge" />
        <Typography variant="h3" color="textPrimary" className={classes.welcomeText}>
          BEM-VINDO!
        </Typography>
        <Box mt={3}>
          <LoginForm />
        </Box>
      </Container>
    </Box>
  )
}

export default Login
