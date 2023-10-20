import React, { useEffect } from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import useStyles from './styles'
import obiwankeduck from 'images/obiwankeduck.png'
import DuckHelp from 'views/Pato/DuckHelp/DuckHelp'

const Pato = () => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container>
        <Box mt={12} style={{ marginTop: '0' }}>
          <img src={obiwankeduck} alt="obiwankeduck" style={{ maxWidth: '300px' }} />
        </Box>
        <Box mt={6} style={{ marginTop: '-10px', color: '#fdfa79', placeItems: 'center', display: 'grid' }}>
          <h2>"Help me, Obi-Wan Keduck. You're my only hope."</h2>
          <div style={{ width: '60%' }}>
            Nossa API informa estratégias de combate a todo momento para os chips de nossos herois anserinos. Porém, o
            sistema pode falhar (sistemas sempre falham!) e, nesses momentos, nossos herois entrarão em contato (usando
            outro chip que criamos para traduzir seus grasnidos para português) para que você consulte a API para eles.
            Para isso, clique no botão abaixo:
          </div>
        </Box>
        <Box mt={12} style={{ marginTop: '50px', color: '#fdfa79' }}>
          <DuckHelp />
        </Box>
      </Container>
    </Box>
  )
}

export default Pato
