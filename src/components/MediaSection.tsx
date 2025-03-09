// src\components\MediaSection.tsx

import React from 'react'
import { Box, Typography, Grid, Card, CardMedia } from '@mui/material'

export default function MediaSection() {
  const dummyImages = [
    { id: 1, src: 'https://via.placeholder.com/300x200', alt: 'Performance 1' },
    { id: 2, src: 'https://via.placeholder.com/300x200', alt: 'Performance 2' },
    { id: 3, src: 'https://via.placeholder.com/300x200', alt: 'Performance 3' },
    { id: 4, src: 'https://via.placeholder.com/300x200', alt: 'Performance 4' }
  ]
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Media
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dummyImages.map((image) => (
          <Grid item key={image.id} xs={12} sm={6} md={3}>
            <Card elevation={3}>
              <CardMedia component="img" image={image.src} alt={image.alt} />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
