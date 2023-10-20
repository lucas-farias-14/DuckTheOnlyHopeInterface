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
    backgroundColor: '#006e8c',
    '&:hover': {
      backgroundColor: '#004f73',
    },
  },
  inputs: {
    width: '100%',
    '& .MuiInputBase-root': {
      color: '#808080', // Cor do texto
    },
    '& .MuiInputBase-root.Mui-focused': {
      color: 'white', // Cor do texto quando está focado
    },
    '& .MuiInputLabel-root': {
      color: '#808080', // Cor da label
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'white', // Cor da label quando está focado
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#808080', // Cor da borda do input
      },
      '&:hover fieldset': {
        borderColor: 'white', // Cor da borda do input ao passar o mouse
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Cor da borda quando o campo está focado
      },
    },
  },
}))
export default styles
