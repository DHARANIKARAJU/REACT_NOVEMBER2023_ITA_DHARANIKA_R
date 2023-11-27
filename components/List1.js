// ProductList.js
import React ,{useState} from 'react';
import Layout from './Layout';
import { Card, CardContent, CardMedia, Typography, Grid, Container,Button,IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
const products = [

    {
        id: 1,
        name: 'Running Shoes',
        price: 449,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbAlw1QyiJKGoFa_MULiksGGy6EV-SqF8Cg&usqp=CAU',
    },
    {
        id: 2,
        name: 'Yoga Mat',
        price: 299,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gDhLYn9GtjfiOm8lI5htXXKERv2tl2bsbQ&usqp=CAU',
    },
    {
        id: 3,
        name: 'Tennis Ball & Bat',
        price: 565,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaiVyvh9a7MK_ms7IP8g1MJpcu_A-CmQrMew&usqp=CAU',
    },
    {
        id: 4,
        name: 'Cycling Helmet',
        price: 759,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5MwXrXHG_M8drtTWOtUylYBDhdKUJf3eFwg&usqp=CAU',
    },
    {
        id: 5,
        name: 'Golf Clubs Set',
        price: 30000,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWB9Gdhka4e7nkaOnWP5-kRxixiKG02O4kuA&usqp=CAU',
    },
    {
        id: 6,
        name: 'Swimming Goggles',
        price: 299,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMZrv2LySLNgAiAgFWywRNaMMTergzpJb9uQ&usqp=CAU',
    },
    {
        id: 7,
        name: 'Treadmill',
        price: 14999,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3PBPdvPMkW3oEK6M0VhXtVkZlWpUWQvxL5A&usqp=CAU',
    },
    {
        id: 8,
        name: 'Boxing Gloves',
        price: 1299,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCrWrNbmxmvVnEU7iOauur_FgIVCYh4iO9SA&usqp=CAU',
    },
    {
        id: 9,
        name: 'Badminton Shuttle',
        price: 479,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-l7lZPXtGOMFm7hNaBFleXqcmYdzqPXnfTw&usqp=CAU',
    },
    {
        id: 10,
        name: 'Skateboard',
        price: 2850,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu1fGuXNFasySXfp1wU_ZChFG2Vi-j_BvtmQ&usqp=CAU',
    },
    {
        id: 11,
        name: 'Chess',
        price: 499,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jzoVzAiCQgT4oUbel_4O_tS65VHwk2P_Vg&usqp=CAU',
    },
    {
        id: 12,
        name: 'Carrom',
        price: 800,
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiT_1mIS2BpCQXhYxxpf-9ezopHXyRivpzXQ&usqp=CAU',
    },
  // Add more products as needed
];

const List1 = () => {
    
        const [cartTotal, setCartTotal] = useState(0);
      
        const addToCart = (price) => {
          setCartTotal((prevTotal) => prevTotal + price);
        };
  return (
    <Layout>
    <Container maxWidth="lg">
        <Typography textAlign={"center"}>
            <h1>INDIVIDUAL SPORT</h1>
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
                <IconButton color="error" margin="1px" aria-label="like" style={{align:"right"}}>
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

export default List1;
