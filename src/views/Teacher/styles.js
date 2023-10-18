import { alpha, makeStyles } from '@material-ui/core/styles'

const styles = makeStyles((theme) => ({
  imgHeader: {
    maxWidth: '45px',
  },
  gridStyle: {
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
    padding: '1%',
  },
  gridStyleRigth: {
    display: 'flex',
    alignItems: 'right',
    justifyContent: 'right',
    padding: '1%',
  },
  media: {
    height: 0,
    widht: '100%',
    paddingTop: '120%', // 16:9
  },
  buttonPrimary: {
    width: '80%',
    height: '40%',
    backgroundColor: '#231F20',
    color: 'white ',
    '&:hover': {
      backgroundColor: 'red',
    },
    fontWeight: 'bold',
  },
  buttonPrimaryBtnRight: {
    width: '100%',
    height: '100%',
    backgroundColor: '#231F20',
    color: 'white ',
    '&:hover': {
      backgroundColor: 'red',
    },
    fontWeight: 'bold',
  },
  formatCardActions: {
    display: 'flex',
    justifyContent: 'center',
    placeItems: 'center',
    backgroundColor: '#808080',
    borderTop: 'solid #231F20 1px',
  },
  AvatarImg: {
    backgroundColor: '#808080',
    border: 'solid #808080 1px',
    width: '25%',
    height: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
  btnRight: {
    backgroundColor: '#808080',
    border: 'solid #808080 1px',
    display: 'grid',
    placeItems: 'center',
    width: '45%',
    height: '100%',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
  },
  grow: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#808080',
  },
  boxTitleImg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Koulen',
    padding: '5px',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}))

export default styles
