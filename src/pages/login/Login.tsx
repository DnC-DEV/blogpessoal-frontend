import { Box } from '@material-ui/core';
import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  return (
    <div>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color="textPrimary" component="h3" align="center" style={{fontWeight: "bold"}}>
                            Entrar
                        </Typography>

                        <TextField id="user" label="Usuario" variant="outlined" name="user" margin="normal" fullWidth />
                        <TextField id="password" label="senha" variant="outlined" name="password" margin="normal" type="password" fullWidth />

                        <Box marginTop={2} textAlign="center">
                            <Link to='/' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>
            <Grid xs={6}>

            </Grid>
        </Grid>
    </div>
  )
}

export default Login
