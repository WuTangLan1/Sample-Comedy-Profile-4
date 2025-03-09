import React from 'react'
import { Box, Typography, Grid, Card, CardContent, CardMedia, Button, CardActions, Chip } from '@mui/material'

export default function ShopSection() {
  const dummyProducts = [
    { id: 1, name: 'Inspiring Book 1', price: '$25', description: 'A bestseller that changed the game.', image: '/images/shops/book1.png', link: '#', rating: 4.5 },
    { id: 2, name: 'Inspiring Book 2', price: '$30', description: 'A masterpiece of comedy and wisdom.', image: '/images/shops/book2.png', link: '#', rating: 4.7 },
    { id: 3, name: 'Inspiring Book 3', price: '$28', description: 'An essential read for comedy lovers.', image: '/images/shops/book3.png', link: '#', rating: 4.6 },
    { id: 4, name: 'Classic Mug 1', price: '$15', description: 'Start your day with a smile.', image: '/images/shops/mugs1.png', link: '#', rating: 4.3 },
    { id: 5, name: 'Classic Mug 2', price: '$18', description: 'Perfect for coffee and laughter.', image: '/images/shops/mugs2.png', link: '#', rating: 4.4 },
    { id: 6, name: 'Classic Mug 3', price: '$16', description: 'A must-have for every comedian fan.', image: '/images/shops/mugs3.png', link: '#', rating: 4.2 },
    { id: 7, name: 'Trendy Shirt 1', price: '$35', description: 'Wear your humor with pride.', image: '/images/shops/shirt1.png', link: '#', rating: 4.8 },
    { id: 8, name: 'Trendy Shirt 2', price: '$40', description: 'A stylish statement of comedy.', image: '/images/shops/shirt2.png', link: '#', rating: 4.7 },
    { id: 9, name: 'Trendy Shirt 3', price: '$38', description: 'Elevate your wardrobe with laughter.', image: '/images/shops/shirt3.png', link: '#', rating: 4.6 }
  ]

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ 
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        Shop
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ px: 4 }}>
        {dummyProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Box sx={{
              perspective: '1000px',
              position: 'relative',
              '&:hover .card-3d': {
                transform: 'translateZ(20px) rotateX(5deg) rotateY(5deg)',
                '&::before': { opacity: 1 }
              }
            }}>
              <Card className="card-3d" elevation={0} sx={{
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'all 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
                borderRadius: '24px',
                overflow: 'visible',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  inset: -2,
                  background: 'linear-gradient(45deg, #ff6b6b 0%, #ffd93d 50%, #6bff6b 100%)',
                  borderRadius: '24px',
                  zIndex: -1,
                  opacity: 0,
                  transition: 'opacity 0.5s',
                  filter: 'blur(20px)'
                }
              }}>
                <Box sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '24px'
                }}>
                  <CardMedia component="img" image={product.image} alt={product.name} sx={{
                    height: 300,
                    objectFit: 'cover'
                  }}/>
                  <Chip label={`${product.rating} ★`} color="secondary" size="small" sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    fontWeight: 'bold',
                    backdropFilter: 'blur(4px)',
                    backgroundColor: 'rgba(255,255,255,0.2)'
                  }}/>
                </Box>
                <CardContent sx={{ 
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 100%)',
                  position: 'relative',
                  zIndex: 1
                }}>
                  <Typography variant="h5" gutterBottom sx={{ 
                    fontWeight: 700,
                    background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" sx={{ 
                    color: 'text.secondary',
                    minHeight: '60px',
                    mb: 2,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {product.description}
                  </Typography>
                  <Box sx={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 2
                  }}>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 800,
                      background: 'linear-gradient(45deg, #FF6D00 30%, #FFAB00 90%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}>
                      {product.price}
                    </Typography>
                    <Button variant="contained" href={product.link} sx={{
                      background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                      borderRadius: '50px',
                      fontWeight: 'bold',
                      textTransform: 'none',
                      px: 3,
                      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                      '&:hover': {
                        boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
                      }
                    }}>
                      Buy Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}