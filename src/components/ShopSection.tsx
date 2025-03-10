// src/components/ShopSection.tsx
import React from 'react'
import { Box, Typography, Card, CardContent, CardMedia, Button, Chip, Grid, useTheme } from '@mui/material'

export default function ShopSection({ id }: { id: string }) {
  const theme = useTheme()
  const dummyProducts = [
    { id: 1, name: 'Inspiring Book: The Journey of Laughter', price: '$25', description: 'A captivating book blending humor with life lessons, featuring anecdotes and personal reflections that inspire creativity and joy. Hardcover, 350 pages, authored by Citizen Kane.', image: '/images/shops/book1.png', link: '#', rating: 4.8 },
    { id: 2, name: 'Inspiring Book: Chronicles of Comedy', price: '$30', description: 'An engaging narrative of a comedian’s rise to fame, filled with behind-the-scenes stories and witty insights. Special edition with illustrations, 400 pages.', image: '/images/shops/book2.png', link: '#', rating: 4.7 },
    { id: 3, name: 'Inspiring Book: Laughter Unleashed', price: '$28', description: 'A humorous guide to overcoming life’s challenges, packed with memorable quotes and practical advice. Paperback, 320 pages, perfect for fans of smart comedy.', image: '/images/shops/book3.png', link: '#', rating: 4.6 },
    { id: 4, name: 'Classic Mug: Morning Brew of Humor', price: '$15', description: 'A premium ceramic mug designed to bring smiles with every sip. Dishwasher and microwave safe. Features a witty design and vibrant colors.', image: '/images/shops/mugs1.png', link: '#', rating: 4.5 },
    { id: 5, name: 'Classic Mug: Comedian’s Cuppa', price: '$18', description: 'A high-quality mug with an artistic print that celebrates humor. Enjoy your coffee in style. Made from durable porcelain with a glossy finish.', image: '/images/shops/mugs2.png', link: '#', rating: 4.6 },
    { id: 6, name: 'Classic Mug: Sip & Smile', price: '$16', description: 'This mug is crafted for everyday use with a bold design that sparks joy. Ergonomic handle and comfortable grip, ideal for home or office.', image: '/images/shops/mugs3.png', link: '#', rating: 4.4 },
    { id: 7, name: 'Trendy Shirt: Laugh Out Loud Tee', price: '$35', description: 'A modern, 100% cotton t-shirt featuring a stylish graphic that represents the essence of comedy. Available in multiple sizes and colors.', image: '/images/shops/shirt1.png', link: '#', rating: 4.9 },
    { id: 8, name: 'Trendy Shirt: Wit & Wisdom Top', price: '$40', description: 'An exclusive limited-edition shirt made from premium fabric, designed to keep you comfortable while showcasing your love for comedy. Machine washable and durable.', image: '/images/shops/shirt2.png', link: '#', rating: 4.8 },
    { id: 9, name: 'Trendy Shirt: Humorous Vibes Crew', price: '$38', description: 'A stylish crewneck that combines fashion with humor. Soft, breathable material with a unique print that stands out. Perfect for casual outings.', image: '/images/shops/shirt3.png', link: '#', rating: 4.7 }
  ]
  return (
    <Box id={id} sx={{ p: 8 }}>
      <Typography variant="h2" align="center" gutterBottom sx={{ color: theme.palette.mode === 'light' ? 'black' : 'inherit' }}>
        Some of my Merch
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dummyProducts.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{
              height: '100%',
              backgroundColor: theme.palette.mode === 'light' ? '#ffffff' : 'inherit',
              boxShadow: theme.palette.mode === 'light' ? '0px 4px 20px rgba(0,0,0,0.1)' : 'inherit',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-8px) scale(1.02)',
                boxShadow: theme.palette.mode === 'light' ? '0 25px 50px -12px rgba(0,0,0,0.25)' : '0 25px 50px -12px rgba(255,255,255,0.15)'
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
              <CardContent sx={{ position: 'relative', flexGrow: 1, overflow: 'hidden' }}>
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
                  minHeight: '80px',
                  mb: 2,
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden'
                }}>
                  {product.description}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 8px rgba(0,0,0,0.2)'
                    }
                  }}>
                    Buy Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
