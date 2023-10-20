import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import { Container } from '@material-ui/core'
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#fdfa79', color: 'black', display: 'flex' }}>
        <img src={Logo} alt="logo-fightforge" style={{ width: '48px', height: '48px', position: 'absolute' }} />
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
