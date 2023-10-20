import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import { Button, Container, Dialog, DialogActions, DialogContent, IconButton } from '@material-ui/core'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import RegisterForm from 'views/Register/RegisterForm'
import Pato from 'views/Pato/Pato'
import useStyles from './styles'
import EnhancedTable from 'views/List/List'
import Home from '../Home/Home'
import { Icon } from '@iconify/react'
import CreateIcon from '@material-ui/icons/Create'
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered'
import Tooltip from '@material-ui/core/Tooltip'
import Logo from 'images/logo.png'
import obiwankeduck from 'images/obiwankeduck.png'
import anakinskyduck from 'images/anakinskyduck.png'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function SimpleTabs() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)
  const [open, setOpen] = useState(false)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#fdfa79', color: 'black', display: 'flex' }}>
        <Tooltip arrow="true" title="Sobre os devs">
          <IconButton
            style={{ position: 'absolute', width: '5%', backgroundColor: 'transparent', padding: '0', zIndex: '1' }}
            onClick={() => setOpen(true)}
          >
            <img src={Logo} alt="logo-duck" style={{ width: '48px', height: '48px' }} />
          </IconButton>
        </Tooltip>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="form-dialog-title"
          centered
          style={{ width: '100%' }}
        >
          <DialogContent style={{ backgroundColor: '#231F20' }}>
            <Box className={classes.root}>
              <Container>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginTop: '-10px', color: '#fdfa79', placeItems: 'center', display: 'grid' }}>
                    <center>
                      <b>Lucas Eduardo</b> cursa Sistemas de Informação no Univem e seu lance é python-django "full
                      stack" (vamos dizer que ele faz o que precisar). Também adora se desafiar aprendendo coisas
                      diferentes, como foi com o React.js!
                    </center>
                  </div>
                  <div>
                    <img src={obiwankeduck} alt="logo-duck" style={{ maxWidth: '200px' }} />
                  </div>
                </div>
                <div style={{ display: 'flex' }}>
                  <div style={{ marginTop: '0' }}>
                    <img src={anakinskyduck} alt="logo-duck" style={{ maxWidth: '200px' }} />
                  </div>
                  <div style={{ marginTop: '-10px', color: '#fdfa79', placeItems: 'center', display: 'grid' }}>
                    <center>
                      Já <b>Willian Scaquett</b> também cursa Sistemas de Informações no Univem porém, contrariando as
                      estatísticas, ama se aventurar no mundo Java. Escritor (ou uma tentativa de ser) nas horas vagas.
                    </center>
                  </div>
                </div>
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
              onClick={() => setOpen(false)}
              style={{ color: 'white', marginBottom: '15px' }}
              className={classes.ButtonHover}
            >
              Então tá bom
            </Button>
          </DialogActions>
        </Dialog>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          style={{ display: 'flex', alignItems: 'center', placeItems: 'center' }}
        >
          <Tooltip arrow="true" title="Cadastrar hospedeiro">
            <Tab icon={<CreateIcon style={{ fontSize: 35 }} />} {...a11yProps(0)} />
          </Tooltip>
          <Tooltip arrow="true" title="Lista de hospedeiros">
            <Tab icon={<FormatListNumberedIcon style={{ fontSize: 35 }} />} {...a11yProps(1)} />
          </Tooltip>
          <Tooltip arrow="true" title="PATO!!">
            <Tab icon={<Icon icon="mdi:duck" width="36" height="36" />} arial-label="Pato" {...a11yProps(2)} />
          </Tooltip>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Container maxWidth="xs" fullWidth>
          <Box mt={3}>
            <div style={{ display: 'grid', placeItems: 'center' }}>
              <RegisterForm />
            </div>
          </Box>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <EnhancedTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Pato />
      </TabPanel>
      <Home />
    </div>
  )
}
