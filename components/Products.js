import React from 'react';
import Layout from './Layout';
import { Container, Typography,Grid ,Box,Link} from '@mui/material';
import { NavLink } from 'react-router-dom';
function Products()
{
    const imageStyle = {
        maxWidth: '80%',
        borderRadius: '10px',
      };
      const gallerySectionStyle = {
        background: 'linear-gradient(to bottom, #333333,#000000)', // Gradient color
        padding: '70px',
        
        textAlign: 'center',
        color: 'white', // Text color
      };
    
      const galleryBoxStyle = {
        maxWidth: '100%',
        marginBottom: '20px',
      };
    return(
        <Layout>
            <Typography variant='h4' sx={{marginLeft:"30px"}}>
                <br></br>
                PRODUCTS
                <br></br>
            </Typography>
            <Typography variant="h6" sx={{marginLeft:"20px"}}>
                Welcome to Pro Sports Emporium, your ultimate destination for top-tier athletic gear and equipment! Elevate your game with our curated selection of premium products designed to enhance performance and style for every sports enthusiast.
            </Typography>
            
            <Box sx={gallerySectionStyle} margin={"60px"}>
            <Container>
            <Grid container spacing={4}>
                {/* Box 1 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                   <NavLink to="/li1">
                    <img src="https://www.completesports.com/wp-content/uploads/Badminton.jpg" alt="GalleryImage1" style={imageStyle} />
                    </NavLink>
                    <Typography variant="body2" color="inherit">
                    <Link href="/li1"><h1>INDIVIDUAL SPORT</h1></Link>
                    <p>
                        Includes Badminton,Chess,Carrom, Skateboard,Athletics,Boxing,Tennis,Ludo,etc
                    </p>
                    </Typography>
                </Box>
                </Grid>
                {/* Box 2 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                <NavLink to="/li2">
                    <img src="https://ddnews.gov.in/sites/default/files/hockey-1.jpg" alt="GalleryImage2" style={imageStyle} />
                   </NavLink>
                    <Typography variant="body2" color="inherit">
                    <Link href="/li2"><h1>TEAM SPORT</h1></Link>
                    <p>
                        Includes Kabaddi,Cricket,Volleyball,Basketball, Kho kho,Football,Handball,etc
                    </p>
                    </Typography>
                </Box>
                </Grid>
                {/* Box 3 */}
                <Grid item xs={12} md={4}>
                <Box sx={galleryBoxStyle}>
                    <NavLink to="/li3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEN5h3VD4ITcZHSho45IlOk_ASuT2_rS3Qqw&usqp=CAU" alt="GalleryImage3" style={imageStyle} />
                    </NavLink>
                    <Typography variant="body2" color="inherit">
                    <Link href="/li3"><h1>EXTREME SPORT</h1></Link>
                    <p>
                        Includes Bungee jumping,Ice climbing,High Lining,Kite Surfing,etc
                    </p>
                    </Typography>
                </Box>
                </Grid>
            </Grid>
            </Container>
        </Box>
        <Typography variant="h4" sx={{marginLeft:"20px"}}>
            <br></br>
           FEATURES:
            </Typography>
        <Typography variant="body1" sx={{marginLeft:"20px"}}>
            <br></br>
            1. Precision Performance Gear
            </Typography>
            <Typography variant="body1" sx={{marginLeft:"20px"}}>
            <br></br>
            2. Superior Quality Equipment
            </Typography>
            <Typography variant="body1" sx={{marginLeft:"20px"}}>
            <br></br>
            3. Fashion-Forward Athletic Apparel
            </Typography>
            <Typography variant="body1" sx={{marginLeft:"20px"}}>
            <br></br>
            4. Personalized Training Accessories
            </Typography>
            <Typography variant="body1" sx={{marginLeft:"20px"}}>
            <br></br>
            5. Team Spirit Merchandise
            </Typography>
            <Typography variant="body1" sx={{marginLeft:"20px"}}>
            <br></br>
            6. Unmatched Customer Service
            </Typography>
            <Typography variant="body1" sx={{marginLeft:"20px"}}>
            <br></br>
            Elevate your sports experience with Pro Sports Emporium – where passion meets performance. Shop now and gear up for greatness!
            <br></br>
            </Typography>
        </Layout>
    );
}
export default Products;