// src/components/MediaSection.tsx
import { Box, Typography, styled, keyframes } from '@mui/material'
import { useTheme } from '@emotion/react'

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
  animation: `${scrollAnimation} 30s linear infinite`,
  width: 'fit-content'
})


export default function MediaSection({ id }: { id: string }) {
    const theme = useTheme()
  return (
    <Box id={id} sx={{  p: { xs: 1, md: 8 }  }}>
      <Typography 
                variant="h2" 
                align="center" 
                gutterBottom 
                sx={{ color: theme.palette.mode === 'light' ? 'black' : 'inherit', transition: theme.transitions.create(['color'], { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeInOut }) }}
              >
                Media
      </Typography>
      <Box sx={{ overflow: 'hidden', width: '100%', position: 'relative' }}>
      <ScrollingWrapper>
        {repeatedImages.map((image, index) => (
          <Box key={`${image.id}-${index}`} sx={{ display: 'inline-block', mx: 1 }}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: '300px', height: 'auto', display: 'block' }}
            />
          </Box>
        ))}
      </ScrollingWrapper>
      </Box>
    </Box>
  )
}
