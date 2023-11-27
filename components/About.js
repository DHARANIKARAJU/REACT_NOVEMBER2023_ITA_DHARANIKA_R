import React from 'react';
import { Container, Paper, Typography,Grid,Box } from '@mui/material';
import "./Style.css";
import Layout from './Layout';
const containerStyle = {
  padding: '20px',
  marginTop: '30px',
};

const paperStyle = {
  padding: '20px',
};

const titleStyle = {
  marginBottom: '20px',
};
const imageStyle = {
  maxWidth: '80%',
  borderRadius: '10px',
};


const galleryBoxStyle = {
  maxWidth: '100%',
  marginBottom: '20px',
};

const AboutPage = () => {
  return (
    <body >
    <Layout>
    <Container style={containerStyle} maxWidth="lg">
      <Paper elevation={5} style={paperStyle}>
        <Typography variant="h4" style={titleStyle} align="center">
          ABOUT
        </Typography>
        <Typography variant="h4" style={titleStyle} align="center">
          Pro Sports Emporium
        </Typography>

        <Typography variant="body1" paragraph>
          Welcome to Pro Sports Emporium, your go-to destination for all things sports! Whether
          you're a professional athlete or a weekend warrior, we have everything you need to excel
          in your favorite sports.
        </Typography>

        <Container>
            <Grid container spacing={4}>
                {/* Box 1 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                    <img src="https://media.istockphoto.com/id/1355687112/photo/various-sport-equipment-gear.webp?b=1&s=170667a&w=0&k=20&c=hEADFXL4HG9mF94yC5g3JA8lMHn8OZg7hRLoiel_L48=" alt="GalleryImage1" style={imageStyle} />
                </Box>
                </Grid>
                {/* Box 2 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                    <img src="https://ddnews.gov.in/sites/default/files/hockey-1.jpg" alt="GalleryImage2" style={imageStyle} />
                    
                </Box>
                </Grid>
                {/* Box 3 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEN5h3VD4ITcZHSho45IlOk_ASuT2_rS3Qqw&usqp=CAU" alt="GalleryImage3" style={imageStyle} />
                  
                </Box>
                </Grid>
            </Grid>
            </Container>
            <Typography variant="body1" paragraph>
          Our mission is to provide top-quality sports gear, apparel, and accessories that enhance
          your performance and style. We curate a selection of products from the industry's leading
          brands, ensuring that you get the best of the best.
        </Typography>
        <Typography variant="body1" paragraph>
          At Pro Sports Emporium, we understand the importance of staying active and enjoying the
          thrill of competition. Our team is passionate about sports, and we're here to share that
          passion with you. Whether you're into soccer, basketball, baseball, or any other sport, we
          have the gear to fuel your passion.
        </Typography>

        <Container>
            <Grid container spacing={4}>
                {/* Box 1 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                    <img src="https://www.shutterstock.com/image-photo/cricket-bat-ball-hitting-wicket-600nw-2254737171.jpg" alt="GalleryImage1" style={imageStyle} />
                </Box>
                </Grid>
                {/* Box 2 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                    <img src="https://media.istockphoto.com/id/157187875/photo/soccer-game.jpg?s=612x612&w=0&k=20&c=OJisxtjRI0YqFgF6WtR7Jj9gHaw80EQ31jVn67FJJ1c=" alt="GalleryImage2" style={imageStyle} />
                    
                </Box>
                </Grid>
                {/* Box 3 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                    <img src="https://www.completesports.com/wp-content/uploads/Badminton.jpg" alt="GalleryImage3" style={imageStyle} />
                  
                </Box>
                </Grid>
            </Grid>
            </Container>
            <Typography variant="body1" paragraph>
          Explore our website to discover a wide range of products, from high-performance equipment
          to stylish athletic wear. Join our community of sports enthusiasts and stay updated on the
          latest trends, tips, and events in the world of sports.
        </Typography>
        <Typography variant="body1" paragraph>
          Thank you for choosing Pro Sports Emporium. We look forward to being part of your sports
          journey and helping you achieve your athletic goals. Play hard, play smart, and enjoy the
          game!
        </Typography>
      </Paper>
    </Container>
    </Layout>
    </body>
  );
};

export default AboutPage;
