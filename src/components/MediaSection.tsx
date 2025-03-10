// src/components/MediaSection.tsx
import React from 'react'
import { Box, Typography, styled, keyframes } from '@mui/material'

const images = [
  { id: 1, src: '/images/personal/profile1.png', alt: 'Performance 1' },
  { id: 2, src: '/images/personal/profile2.png', alt: 'Performance 2' },
  { id: 3, src: '/images/personal/profile3.png', alt: 'Performance 3' },
  { id: 4, src: '/images/personal/profile4.png', alt: 'Performance 4' },
  { id: 5, src: '/images/personal/profile5.png', alt: 'Performance 5' }
]
const repeatedImages = [...images, ...images]
const scrollAnimation = keyframes({
  '0%': { transform: 'translateX(0)' },
  '100%': { transform: 'translateX(-50%)' }
})
const ScrollingWrapper = styled(Box)({
  display: 'flex',
  whiteSpace: 'nowrap',
  animation: `${scrollAnimation} 30s linear infinite`
})

export default function MediaSection({ id }: { id: string }) {
  return (
    <Box id={id} sx={{ p: 8 }}>
      <Typography variant="h2" align="center" gutterBottom>
        Media
      </Typography>
      <Box sx={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
        <ScrollingWrapper sx={{ width: '200%' }}>
        {repeatedImages.map((image, index) => (
  <Box
    key={`${image.id}-${index}`}
    sx={{
      display: 'inline-block',
      width: { xs: '200px', sm: '250px', md: '300px' },
      mx: 1
    }}
  >
    <img
      src={image.src}
      alt={image.alt}
      style={{ width: '100%', height: 'auto', display: 'block' }}
    />
  </Box>
))}
        </ScrollingWrapper>
      </Box>
    </Box>
  )
}
