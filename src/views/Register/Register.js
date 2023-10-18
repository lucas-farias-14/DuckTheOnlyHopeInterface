import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import RegisterForm from './RegisterForm'
import useStyles from './styles'
import logo from 'images/fightforge.svg'

const Register = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container maxWidth="xs" fullWidth>
        <img src={logo} alt="logo-fightforge" />
        <Typography variant="h3" color="textPrimary" className={classes.welcomeText}>
          CADASTRO
        </Typography>
        <Box mt={3}>
          <RegisterForm />
        </Box>
      </Container>
    </Box>
  )
}

export default Register
