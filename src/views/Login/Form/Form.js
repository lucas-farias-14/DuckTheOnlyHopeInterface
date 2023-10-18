import React, { useState } from 'react'
import { Box, Button, TextField } from '@material-ui/core'
import { Controller, useForm } from 'react-hook-form'
// import * as service from 'service'
import schemas from '../schema'
import useStyles from './styles'

const Form = () => {
  const [loading, setLoading] = useState(false)
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
            label="Email"
            type="email"
            variant="outlined"
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
            helperText={errors?.password?.message}
            fullWidth
            className={classes.inputs}
          />
        )}
        control={control}
        name="password"
        mode="onBlur"
      />
      <Box mt={2} className={classes.actionBox}>
        <Button type="submit" variant="contained" className={classes.buttonPrimary}>
          Acessar
        </Button>
        <divider className={classes.dividerStyle} />
        <Button type="submit" variant="contained" className={classes.buttonPrimary}>
          Cadastre-se
        </Button>
      </Box>
    </form>
  )
}
export default Form
