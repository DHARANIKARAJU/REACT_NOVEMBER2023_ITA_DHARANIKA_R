// ProductList.js
import React ,{useState} from 'react';
import Layout from './Layout';
import { Card, CardContent, CardMedia, Typography, Grid, Container,Button,IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
const products = [
  {
    id: 1,
    name: 'Kite surfing',
    price: 4979,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ECCbj22WBXFnsUKlW-ScoXRFsf4ZjYvqmg&usqp=CAU',
  },
  {
    id: 2,
    name: 'Bungee jumping',
    price: 3599,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6Nb5ElnhWnjl7dw3Xdx_7RNsdIP-f1yn5CQ&usqp=CAU',
  },
  {
    id: 3,
    name: 'Ice climbing kit',
    price: 6500,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMX3RIC8RJvDtoxExOw6dMMKWT94X_ZyPGLw&usqp=CAU',
  },
  {
    id: 4,
    name: 'Snow Board',
    price: 3599,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXI-j6yPj1RLCl8m41IP5e325wtXQpo7mMVQ&usqp=CAU',
  },
  
  // Add more products as needed
];

const List3 = () => {
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (price) => {
    setCartTotal((prevTotal) => prevTotal + price);
  };
  return (
    <Layout>
    <Container maxWidth="lg">
        <Typography textAlign={"center"}>
            <h1>EXTREME SPORT</h1>
        </Typography>
    <Grid container spacing={5} margin={1}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={3} md={3}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image={product.imageUrl}
              alt={product.name}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography variant="subtitle1">
                ₹{product.price.toFixed(2)}
              </Typography>
              <Button
                  variant="contained"
                  onClick={() => addToCart(product.price)}
                >
                  Add to Cart
                </Button>
                <IconButton color={"error"} aria-label="like" align={"right"} >
                  <FavoriteIcon />
                </IconButton>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
    <Typography variant="h5" align="right" style={{ marginTop: '20px' }}>
        Total Price: ₹{cartTotal.toFixed(2)}
      </Typography>
    </Container>
    </Layout>
  );
};

export default List3;
