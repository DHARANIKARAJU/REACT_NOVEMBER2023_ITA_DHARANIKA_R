// src/ContactPage.js
import React from 'react';
import Layout from './Layout';
import { Container, Typography, TextField, Button,Grid ,Box} from '@mui/material';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    alert('Form submitted!');
  };

  return (
    <Layout>
      <Box>
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          type="email"
          required
        />
        <TextField
          label="Message"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
      
      <Grid item xs={12} sm={4}>
            <Typography variant="h5" color="text.primary" gutterBottom>
              <br></br>For further queries,visit us
            </Typography>
            <Typography variant="h6" color="text.secondary">
              123 Main Street, Coimbatore, India
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Email: prosportsemporium@gmail.com
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Phone: +91 9876543210
            </Typography>
            <Typography variant="h5" color="text.secondary">
              <br></br>Timings:
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Monday-Saturday 9.00 a.m. to 4.00 p.m.
            </Typography>
          </Grid>
    </Container>
    </Box>
    </Layout>
  );
};

export default Contact;
