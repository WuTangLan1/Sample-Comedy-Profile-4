// src/components/ShopSection.tsx
import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, Button, Chip, useTheme, styled, keyframes } from '@mui/material'

const scrollReverse = keyframes({
  '0%': { transform: 'translateX(-50%)' },
  '100%': { transform: 'translateX(0)' }
})

const ScrollingWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  whiteSpace: 'nowrap',
  animation: `${scrollReverse} 30s linear infinite`,
  '&:hover': {
    animationPlayState: 'paused'
  }
}))

export default function ShopSection({ id }: { id: string }) {
  const theme = useTheme()
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
  const repeatedProducts = [...dummyProducts, ...dummyProducts]
  return (
    <Box id={id} sx={{ p: 8 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ 
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        Shop
      </Typography>
      <Box sx={{ overflow: 'hidden', width: '100%', position: 'relative', px: 4 }}>
        <ScrollingWrapper sx={{ width: '200%' }}>
          {repeatedProducts.map((product, index) => (
            <Box
              key={`${product.id}-${index}`}
              sx={{
                display: 'inline-block',
                width: { xs: '280px', sm: '320px', md: '360px' },
                mx: 1,
                verticalAlign: 'top'
              }}
            >
              <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : 'inherit',
                boxShadow: theme.palette.mode === 'light' 
                  ? '0px 4px 20px rgba(0,0,0,0.1)' 
                  : 'inherit',
                position: 'relative',
                transformStyle: 'preserve-3d',
                transition: 'all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
                '&:hover': {
                  transform: 'translateY(-8px) rotateX(5deg) rotateY(-5deg) translateZ(20px)',
                  boxShadow: theme.palette.mode === 'light' 
                    ? '0 25px 50px -12px rgba(0,0,0,0.25)' 
                    : '0 25px 50px -12px rgba(255,255,255,0.15)',
                  '&::after': {
                    transform: 'translateX(200%) skewX(-30deg)'
                  }
                },
                '&::before, &::after': {
                  content: '""',
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  pointerEvents: 'none'
                },
                '&::before': {
                  background: `linear-gradient(45deg, ${theme.palette.secondary.main}20, ${theme.palette.primary.main}20)`,
                  zIndex: 1
                },
                '&::after': {
                  background: `linear-gradient(90deg, transparent, ${theme.palette.mode === 'light' ? '#ffffff80' : '#ffffff20'}, transparent)`,
                  transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                  zIndex: 2
                }
              }}>
                <Box sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderRadius: '16px',
                  m: 2,
                  mt: 3
                }}>
                  <CardMedia
                    component="img"
                    image={product.image}
                    alt={product.name}
                    sx={{
                      height: 240,
                      objectFit: 'cover',
                      borderRadius: '8px'
                    }}
                  />
                  <Chip
                    label={`${product.rating} ★`}
                    color="secondary"
                    size="small"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      fontWeight: 'bold',
                      backdropFilter: 'blur(4px)',
                      backgroundColor: 'rgba(255,255,255,0.2)'
                    }}
                  />
                </Box>
                <CardContent sx={{ 
                  position: 'relative',
                  zIndex: 3,
                  flexGrow: 1
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
                    <Button
                      variant="contained"
                      href={product.link}
                      sx={{
                        background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                        borderRadius: '50px',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        px: 3,
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
                        }
                      }}
                    >
                      Buy Now
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </ScrollingWrapper>
      </Box>
    </Box>
  )
}
