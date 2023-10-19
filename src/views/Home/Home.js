import React from 'react'
import { Box, Container } from '@material-ui/core'
import useStyles from '../Pato/styles'
import logo from 'images/obiwankeduck.png'

const Home = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container>
        <Box mt={12} style={{ marginTop: '0' }}>
          <img src={logo} alt="logo-fightforge" style={{ maxWidth: '300px' }} />
        </Box>
        <Box mt={6} style={{ marginTop: '-10px', color: '#fdfa79', placeItems: 'center', display: 'grid' }}>
          <h2>"Bem Vindo a Duck The Only Hope!"</h2>
          <div style={{ width: '60%' }}>
            A humanidade está a beira da extinção, mas com a ajuda deste sistema, e os patos mais poderosos ja vistos na
            história, talvez tenhamos uma chance!
          </div>
        </Box>
      </Container>
    </Box>
  )
}

export default Home
