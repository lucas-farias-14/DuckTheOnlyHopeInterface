import React from 'react'
import {
  Box,
  Button,
  TextField,
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardMedia,
  CardActions,
  InputBase,
  Grid,
  Avatar,
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'
import useStyles from './styles'
import logo from 'images/fightforge.svg'
import gay_foto from 'images/gay.jpg'

const Teacher = () => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
  const isMenuOpen = Boolean(anchorEl)
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
    handleMobileMenuClose()
  }

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget)
  }

  const menuId = 'primary-search-account-menu'

  const mobileMenuId = 'primary-search-account-menu-mobile'
  return (
    <Box>
      <AppBar position="static">
        <Toolbar className={classes.grow}>
          <Box className={classes.boxTitleImg}>
            <Typography className={classes.title} variant="h6" noWrap>
              Area do professor
            </Typography>
          </Box>
          <Box className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Box>
          <Box className={classes.boxTitleImg}>
            <img src={logo} alt="logo-fightforge" className={classes.imgHeader} />
            <Typography className={classes.title} variant="h6" noWrap>
              Fight Forge
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={6} className={classes.gridStyle}>
          <Card className={classes.AvatarImg}>
            <CardMedia className={classes.media} image={gay_foto} title="gay" />
            <CardActions className={classes.formatCardActions}>
              <Button variant="contained" component="span" className={classes.buttonPrimary}>
                Upload
              </Button>
            </CardActions>
          </Card>
          <Card className={classes.AvatarImg}>
            <CardMedia className={classes.media} image={gay_foto} title="gay" />
            <CardActions className={classes.formatCardActions}>
              <Button variant="contained" component="span" className={classes.buttonPrimary}>
                Upload
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} className={classes.gridStyleRigth}>
          <Card className={classes.btnRight}>
            <Button variant="contained" component="span" size="large" className={classes.buttonPrimary}>
              listagem de alunos
            </Button>
            <Button variant="contained" component="span" size="large" className={classes.buttonPrimary}>
              Agenda
            </Button>
          </Card>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </Box>
  )
}

export default Teacher
