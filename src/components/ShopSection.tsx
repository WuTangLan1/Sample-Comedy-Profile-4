// src\components\ShopSection.tsx

import React from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, CardActions } from '@mui/material'

export default function ShopSection() {
  const dummyProducts = [
    { id: 1, name: 'T-Shirt', price: '$25', image: 'https://via.placeholder.com/300x200', link: '#' },
    { id: 2, name: 'Mug', price: '$15', image: 'https://via.placeholder.com/300x200', link: '#' },
    { id: 3, name: 'Cap', price: '$20', image: 'https://via.placeholder.com/300x200', link: '#' }
  ]
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Shop
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dummyProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardMedia component="img" image={product.image} alt={product.name} />
              <CardContent>
                <Typography variant="h5">
                  {product.name}
                </Typography>
                <Typography variant="body1">
                  {product.price}
                </Typography>
              </CardContent>
              <CardActions>
                <Button variant="contained" color="primary" href={product.link}>
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
