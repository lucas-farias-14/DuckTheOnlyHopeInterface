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
import HomeIcon from '@material-ui/icons/Home'
import Home from '../Home/Home'
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
      <AppBar position="static" style={{ backgroundColor: '#fdfa79', color: 'black' }}>
        <Tabs
          centered
          value={value}
          onChange={handleChange}
          style={{ display: 'flex', alignItems: 'center', placeItems: 'center' }}
        >
          <Tab icon={<HomeIcon />} arial-label="home" {...a11yProps(0)} />
          <Tab label="Cadastrar Hospedeiro" {...a11yProps(1)} />
          <Tab label="Listar Hospedeiros" {...a11yProps(2)} />
          <Tab label="Pato" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Home />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Container maxWidth="xs" fullWidth>
          <Box mt={3}>
            <RegisterForm />
          </Box>
        </Container>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <EnhancedTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Pato />
      </TabPanel>
    </div>
  )
}
