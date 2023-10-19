import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    minHeight: '100%',
    flexDirection: 'column',
    paddingBottom: 80,
    marginTop: 0,
    textAlign: 'center',
  },
  welcomeText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {},
  ButtonHover: {
    backgroundColor: '#fb8301',
    '&:hover': {
      backgroundColor: '#faa748',
    },
  },
}))
export default styles
