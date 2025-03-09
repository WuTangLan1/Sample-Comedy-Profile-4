// src/components/ShopSection.tsx
import React from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, CardActions } from '@mui/material'

export default function ShopSection() {
  const dummyProducts = [
    { id: 1, name: 'Inspiring Book 1', price: '$25', description: 'A bestseller that changed the game.', image: '/images/shops/book1.png', link: '#' },
    { id: 2, name: 'Inspiring Book 2', price: '$30', description: 'A masterpiece of comedy and wisdom.', image: '/images/shops/book2.png', link: '#' },
    { id: 3, name: 'Inspiring Book 3', price: '$28', description: 'An essential read for comedy lovers.', image: '/images/shops/book3.png', link: '#' },
    { id: 4, name: 'Classic Mug 1', price: '$15', description: 'Start your day with a smile.', image: '/images/shops/mugs1.png', link: '#' },
    { id: 5, name: 'Classic Mug 2', price: '$18', description: 'Perfect for coffee and laughter.', image: '/images/shops/mugs2.png', link: '#' },
    { id: 6, name: 'Classic Mug 3', price: '$16', description: 'A must-have for every comedian fan.', image: '/images/shops/mugs3.png', link: '#' },
    { id: 7, name: 'Trendy Shirt 1', price: '$35', description: 'Wear your humor with pride.', image: '/images/shops/shirt1.png', link: '#' },
    { id: 8, name: 'Trendy Shirt 2', price: '$40', description: 'A stylish statement of comedy.', image: '/images/shops/shirt2.png', link: '#' },
    { id: 9, name: 'Trendy Shirt 3', price: '$38', description: 'Elevate your wardrobe with laughter.', image: '/images/shops/shirt3.png', link: '#' }
  ]
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dummyProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card elevation={3} sx={{ transition: 'transform 0.3s ease', '&:hover': { transform: 'scale(1.05)' } }}>
              <CardMedia component="img" image={product.image} alt={product.name} sx={{ height: 200, objectFit: 'cover' }} />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {product.description}
                </Typography>
                <Typography variant="h6" color="primary">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" href={product.link} fullWidth sx={{ py: 1.5 }}>
                  Buy Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
