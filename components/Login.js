import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';
import "./Style.css";
const defaultTheme = createTheme();
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get('http://localhost:3000/users', {
        email,
        password,
      });

      console.log('Server response:', response.data);
      // Add logic to handle the response, e.g., redirect to another page on success
    } catch (error) {
      console.error('Error during login:', error);
      // Add logic to handle errors, e.g., display an error message
    }

    // Move this part inside the handleSubmit function
    const data = new FormData(event.target);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  
    return (
      <body className='page'>
      <ThemeProvider theme={defaultTheme}>
        <Container component="main" maxWidth="sm" >
         
          <Box className="Style"
            sx={{
              marginTop: 20,
              px:3,
              py:2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Typography component="h1" variant="h6" fontSize={40}>
              <b>PRO SPORTS EMPORIUM</b><br></br>
            </Typography>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <NavLink to="/home" variant="body2">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="secondary"
              >
              Sign In
              </Button>
              </NavLink>
    </Box>
              <Grid container>
                <Grid item xs>
                  <Link href="/pswrd" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                      {"Don't have an account? Sign Up"}
                  </Link>
                  </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
      </body>
    );
  }
export default Login;