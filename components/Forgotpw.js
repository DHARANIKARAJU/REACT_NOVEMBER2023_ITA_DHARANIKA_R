import React, { useState } from 'react';
import { Button, TextField, Typography, Container, CssBaseline ,Box,Grid,Link} from '@mui/material';

const PasswordResetPage = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    // Implement password reset logic here, e.g., make an API call
    console.log('Reset password requested for:', email);
    // You might want to show a success message or navigate the user to another page
  };

  return (
    <body className="page">
    <Container component="main" maxWidth="xs">
    <Box className="Style"
    sx={{
        marginTop: 30,
        px:3,
        py:2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <CssBaseline />
      <div>
        <Typography component="h1" variant="h5">
          <b>Reset Password</b>
        </Typography>
        <Typography component="h6" variant="body1">
          <br></br>
            To reset the password,follow the instructions sent through the mail.
        </Typography>
        <form onSubmit={handleResetPassword}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={handleEmailChange}
          />
          
          <Button type="submit"  variant="contained" color="primary">
            Reset Password
          </Button>
          <Grid item >
                <Link href="/login" variant="body2">
                    {"<<Back to Login page"}
                </Link>
                </Grid>
        </form>
      </div>
    </Box>
    </Container>
    </body>
  );
};

export default PasswordResetPage;
