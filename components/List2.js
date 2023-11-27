// ProductList.js
import React ,{useState} from 'react';
import Layout from './Layout';
import { Card, CardContent, CardMedia, Typography, Grid, Container,Button,IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
const products = [
  {
    id: 1,
    name: 'Basketball',
    price: 439,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaBuAmCyuGWTJxhCw83-bWclfeHFHeKfHWVg&usqp=CAU',
  },
  {
    id: 2,
    name: 'Football',
    price: 399,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkBjHi_9nXpYAI9SSfTVl9hbluKfQbpvO5uQ&usqp=CAU',
  },
  {
    id: 3,
    name: 'Kabbadi shoe',
    price: 949,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL1oUXIVjtrBxl7rPWEYCsiZCK5V_ekoZ-5A&usqp=CAU',
  },
  {
    id: 4,
    name: 'Volleyball',
    price: 360,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHleuhynWyQ81FLhD1QfQzB9IxNKMaKU3pbg&usqp=CAU',
  },
  {
    id: 5,
    name: 'Cricket kit',
    price: 2439,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XqZTPoQx7aalaaq5drQEFcwunFDj2dtSMA&usqp=CAU',
  },
  {
    id: 6,
    name: 'Handball',
    price: 450,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLxQMBf5Z7I4LVYW41splB7smMSeNkaOyv7Q&usqp=CAU',
  },
  {
    id: 7,
    name: 'Hockey Stick',
    price: 349,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy9Ea2gZz5XKwbCjWdJpK2P4J_Cjj-UmecWg&usqp=CAU',
  },
  {
    id: 8,
    name: 'Kho kho pole',
    price: 2500,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBwK1KCIGrwusiGjfR-nMBGwzI11GdrlP1Vw&usqp=CAU',
  },
  // Add more products as needed
];
const List2 = () => {
    
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = (price) => {
    setCartTotal((prevTotal) => prevTotal + price);
  };
  return (
    <Layout>
    <Container maxWidth="lg">
        <Typography textAlign={"center"}>
            <h1>TEAM SPORT</h1>
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
                <IconButton color="error" aria-label="like" align={"right"} >
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

export default List2;
