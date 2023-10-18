import { makeStyles } from '@material-ui/core'

const styles = makeStyles((theme) => ({
  formStyle: {
    backgroundColor: 'white',
  },
  buttonPrimary: {
    widht: '100%',
    backgroundColor: '#808080',
    color: 'white ',
    '&:hover': {
      backgroundColor: 'red',
    },
    fontWeight: 'bold',
  },
  actionBox: {
    display: 'flex',
    flexDirection: 'column',
  },
  dividerStyle: {
    display: 'box',
    height: 1,
    backgroundColor: 'white',
    margin: '25px 0px',
  },
  inputs: {
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
    // '& .MuiInput-underline:before': {
    //   borderBottomColor: 'red', // Cor da linha do input antes de ser focado
    // },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: 'purple', // Cor da linha do input após ser focado
    // },
    // '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    //   borderBottomColor: 'pink', // Cor da linha do input ao passar o mouse
    // },
  },
}))
export default styles
