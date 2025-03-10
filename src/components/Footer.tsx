// src/components/Footer.tsx

import { Box, Container, Grid, Typography, IconButton, useTheme} from '@mui/material'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { IconButtonTypeMap } from '@mui/material/IconButton/IconButton'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { styled } from '@mui/system'

const SocialIcon = styled(IconButton)(({ theme }) => ({
  marginLeft: '0.5rem',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    backgroundColor: 'transparent'
  }
})) as OverridableComponent<IconButtonTypeMap<{}, 'a'>>

export default function Footer() {
  const theme = useTheme()
  return (
    <Box sx={{
      background: theme.palette.mode === 'light'
        ? 'linear-gradient(135deg, #f5f7fa, #c3cfe2)'
        : 'linear-gradient(135deg, #2c3e50, #4ca1af)',
      color: theme.palette.mode === 'light' ? 'text.primary' : 'text.secondary',
      py: 4,
      mt: 8
    }}>
      <Container maxWidth="xl">
        <Grid container spacing={2} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <SocialIcon component="a" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <InstagramIcon sx={{ color: theme.palette.mode === 'light' ? '#E1306C' : '#ffffff' }} />
              </SocialIcon>
              <SocialIcon component="a" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <TwitterIcon sx={{ color: theme.palette.mode === 'light' ? '#1DA1F2' : '#ffffff' }} />
              </SocialIcon>
              <SocialIcon component="a" href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <YouTubeIcon sx={{ color: theme.palette.mode === 'light' ? '#FF0000' : '#ffffff' }} />
              </SocialIcon>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              © 2025 Comedy Profile. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right' } }}>
            <Typography variant="caption" sx={{ display: 'block' }}>
              Designed and Developed by Citizen Kane
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
