import React, { useState } from 'react'
import { Box, Container } from '@material-ui/core'
import useStyles from '../Pato/styles'
import logo from 'images/logo.png'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'

export default function Home() {
  const [open, setOpen] = useState(true)
  const classes = useStyles()

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" centered style={{ width: '100%' }}>
        <DialogContent style={{ backgroundColor: '#231F20' }}>
          <Box className={classes.root}>
            <Container>
              <Box mt={12} style={{ marginTop: '0' }}>
                <img src={logo} alt="logo-duck" style={{ maxWidth: '300px' }} />
              </Box>
              <Box mt={6} style={{ marginTop: '-10px', color: '#fdfa79', placeItems: 'center', display: 'grid' }}>
                <h2>Bem-vindo ao Duck, The Only Hope!</h2>
                <div style={{ width: '60%' }}>
                  A humanidade está a beira da extinção, mas com a ajuda deste sistema, e dos patos mais poderosos da
                  história, talvez tenhamos uma chance! (ou não...)
                </div>
              </Box>
            </Container>
          </Box>
        </DialogContent>
        <DialogActions
          style={{
            backgroundColor: '#231F20',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            onClick={handleClose}
            style={{ color: 'white', marginBottom: '15px' }}
            className={classes.ButtonHover}
          >
            Vamos lá!
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
