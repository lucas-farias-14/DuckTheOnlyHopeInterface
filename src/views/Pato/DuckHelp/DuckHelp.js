import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import WarningIcon from '@material-ui/icons/Warning'
import useStyles from '../styles'
export default function DuckHelp() {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      <Button
        variant="contained"
        style={{ backgroundColor: '#fb8301' }}
        size="large"
        className={classes.button}
        startIcon={<WarningIcon />}
        endIcon={<WarningIcon />}
        onClick={handleClickOpen}
      >
        Ajuda o Pato!!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" style={{ backgroundColor: '#fcf000', color: 'black' }}>
          Identificador de Zumbis
        </DialogTitle>
        <DialogContent style={{ backgroundColor: '#fefaad' }}>
          <DialogContentText>
            Para que o chip consiga passar as informações corretas para o pato, precisamos primeiro identificar o zumbi!
            Graças aos deuses da identificação, existe um id catalogado para "todos" (todos os que cadastramos) os
            zumbis que existem, insira um dos ids para que a super API prepare uma estratégia!
          </DialogContentText>
          <TextField autoFocus margin="dense" id="id" label="ID do ZUMBI" type="text" fullWidth />
        </DialogContent>
        <DialogActions style={{ backgroundColor: '#fefaad' }}>
          <Button onClick={handleClose} color="primary">
            Fugir (Corre Berg!)
          </Button>
          <Button onClick={handleClose} color="primary">
            Enviar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
