import React, { useState } from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
import schemas from '../schema'
import MaskedInput from 'react-text-mask'
import NumberFormat from 'react-number-format'
import useStyles from './styles'

const RegisterForm = () => {
  const [loading, setLoading] = useState(false)
  const [age, setAge] = React.useState('')
  const handleChange = (event) => {
    setAge(event.target.value)
  }
  const classes = useStyles()
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    validationSchema: schemas.schemaLogin,
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      // const response = await service.fightforge.teste({  })

      // const accessToken = response.data.accessToken
    } catch (error) {
      console.log('erro')
    } finally {
      setLoading(false)
    }
  }

  const defineErrorMessage = (error) => {
    const response = error?.response
    const status = response?.status
    const errorMessage = response.data?.error?.message
    if ((status === 401 || status === 422) && errorMessage) return errorMessage
    return 'Ocorreu algum erro! Tente novamente!'
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Data de nascimento"
            type="nome"
            margin="normal"
            variant="outlined"
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="nome"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Sexo"
            type="nome"
            margin="normal"
            variant="outlined"
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="nome"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            error={!!errors.email}
            helperText={errors?.email?.message}
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="email"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Senha"
            type="password"
            variant="outlined"
            margin="normal"
            error={!!errors.password}
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="password"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Confirmar senha"
            type="password"
            variant="outlined"
            margin="normal"
            error={!!errors.password}
            helperText={errors?.password?.message}
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="confirmed-password"
        mode="onBlur"
      />
      <Controller
        render={({ field }) => (
          <TextField
            {...field}
            label="Código da empresa"
            type="nome"
            margin="normal"
            variant="outlined"
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="nome"
        mode="onBlur"
      />
      <Box mt={2} className={classes.actionBox}>
        <Button type="submit" variant="contained" className={classes.buttonPrimary}>
          Cadastre-se
        </Button>
      </Box>
    </form>
  )
}
export default RegisterForm
