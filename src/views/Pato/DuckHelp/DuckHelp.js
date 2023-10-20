import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import WarningIcon from '@material-ui/icons/Warning'
import useStyles from '../styles'
import { getCombatStrategy } from 'requests'
import { Tooltip } from '@material-ui/core'

export default function DuckHelp() {
  const [open, setOpen] = useState(false)
  const [zombieId, setZombieId] = useState()
  const [strategy, setStrategy] = useState()
  const classes = useStyles()

  const handleClickOpen = () => {
    setOpen(true)
    setStrategy()
    setZombieId()
  }

  const handleClose = () => {
    setOpen(false)
    setStrategy()
    setZombieId()
  }

  const findCombatStrategy = () => {
    getCombatStrategy(zombieId)
      .then((resp) => {
        setStrategy(resp)
      })
      .catch((error) => {
        alert('ID não encontrado! Mais cuidado na digitação (ou nosso chip de tradução que voltou a bugar mesmo...)')
      })
  }

  return (
    <div>
      <Button
        variant="hover"
        size="large"
        className={classes.ButtonHover}
        startIcon={<WarningIcon />}
        endIcon={<WarningIcon />}
        onClick={handleClickOpen}
        style={{ color: 'white' }}
      >
        Ajuda o Pato!!
      </Button>
      {!strategy && (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" style={{ backgroundColor: '#272829', color: '#fcf000' }}>
            <center>
              <strong>Gerador de estratégia</strong>
            </center>
          </DialogTitle>
          <DialogContent style={{ backgroundColor: '#34373B' }}>
            <DialogContentText>
              <div style={{ textAlign: 'center', color: 'yellow' }}>
                Antes de bolarmos a estratégia ideal para enfrentar um zumbi, precisamos identificá-lo! E, graças aos
                deuses da identificação, temos um ID para todos os (que foram cadastrados) zumbis. Insira abaixo o ID
                passado pelo pato para que a super API prepare uma estratégia!
              </div>
            </DialogContentText>
            <TextField
              className={classes.inputs}
              label="ID do zumbi"
              variant="outlined"
              style={{ width: '100%' }}
              onChange={(event) => setZombieId(event.target.value)}
            />
            <DialogContentText>
              <div style={{ textAlign: 'center', color: 'yellow' }}>
                (na aba ao lado você encontra alguns IDs para <s>brincar</s> testar)
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ backgroundColor: '#34373B' }}>
            <Tooltip title="Não vai mesmo ajudar o pato?" arrow="true">
              <Button onClick={handleClose} style={{ color: '#3bdff8' }}>
                Fechar
              </Button>
            </Tooltip>
            <Button onClick={() => findCombatStrategy()} style={{ color: '#3bdff8' }}>
              Enviar
            </Button>
          </DialogActions>
        </Dialog>
      )}
      {strategy && (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title" style={{ backgroundColor: '#272829', color: '#fcf000' }}>
            <center>
              <strong>Zumbi encontrado e estratégia definida!</strong>
            </center>
          </DialogTitle>
          <DialogContent style={{ backgroundColor: '#34373B' }}>
            <DialogContentText>
              <div style={{ textAlign: 'center', color: 'yellow' }}>
                Encontramos o zumbi e traçamos abaixo a estratégia que nosso heroi penoso deve seguir:
                <div style={{ margin: '20px 0', display: 'flex' }}>
                  <div style={{ flex: '1', marginRight: '5px', textAlign: 'right' }}>
                    Armadura:
                    <br />
                    Arma:
                    <br />
                    Modo de combate:
                    <br />
                    Risco:
                  </div>
                  <div style={{ flex: '1', fontWeight: 'bold', textAlign: 'left' }}>
                    {strategy.armor}
                    <br />
                    {strategy.weapon}
                    <br />
                    {strategy.combatMode}
                    <br />
                    {strategy.risk}
                  </div>
                </div>
                Passe essas informações para ele da forma mais clara e objetiva possível (lembre-se que nosso chip de
                tradução ainda está na fase inicial de desenvolvimento)
              </div>
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ backgroundColor: '#34373B' }}>
            <Button onClick={handleClose} style={{ color: '#3bdff8' }}>
              Pode deixar!
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </div>
  )
}
