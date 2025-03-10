// src\components\AboutSection.tsx

import { Box, Typography, Container, useTheme, Grid } from '@mui/material'
import { motion } from 'framer-motion'

export default function AboutSection({ id }: { id: string }) {
  const theme = useTheme()
  return (
    <Box id={id} sx={{ p: 8, width: '100%', transition: theme.transitions.create(['background-color', 'color'], { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeInOut }) }}>
      <Container maxWidth="xl">
        <Grid container spacing={6} alignItems="center" justifyContent="space-between">
          <Grid item xs={12} md={5}>
            <Box sx={{ textAlign: 'center' }}>
              <Box
                component={motion.img}
                src="/images/personal/profile1.png"
                alt="Citizen Kane"
                initial={{ opacity: 0, scale: 0.7, y: -50, rotate: -15 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                transition={{ duration: 1.8, ease: 'easeOut' }}
                sx={{
                  width: { xs: 250, md: 400, lg: 500 },
                  height: { xs: 250, md: 400, lg: 500 },
                  borderRadius: '50%',
                  border: `6px solid ${theme.palette.mode === 'light' ? '#1976d2' : '#bb86fc'}`,
                  transition: theme.transitions.create(['border-color'], { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeInOut })
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ pl: { md: 6 } }}>
              <Typography 
                variant="h2" 
                align="center" 
                gutterBottom 
                sx={{ color: theme.palette.mode === 'light' ? 'black' : 'inherit', transition: theme.transitions.create(['color'], { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeInOut }) }}
              >
                Citizen Kane
              </Typography>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3, color: theme.palette.mode === 'light' ? 'text.primary' : 'text.secondary', transition: theme.transitions.create(['color'], { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeInOut }) }}>
                The Comedic Visionary
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.8, fontSize: { xs: '1rem', md: '1.1rem' }, color: theme.palette.mode === 'light' ? 'text.primary' : 'text.secondary', p: theme.palette.mode === 'light' ? 0 : 1, borderRadius: theme.palette.mode === 'light' ? 0 : 2, transition: theme.transitions.create(['color'], { duration: theme.transitions.duration.standard, easing: theme.transitions.easing.easeInOut }) }}>
                Citizen Kane is a transformative figure in the world of comedy, whose career spans over three decades of groundbreaking performances and innovative storytelling. With a unique blend of sharp wit, fearless satire, and an innate ability to connect with audiences, he has redefined what it means to be a modern comedian.
                <br /><br />
                From sold-out shows at world-class venues to viral online performances, Citizen Kane&apos;s influence extends far beyond the stage. His work challenges conventional humor, blending insightful social commentary with a touch of irreverence, ensuring that every performance is as thought-provoking as it is entertaining.
                <br /><br />
                Beyond his artistic achievements, Citizen Kane is known for his commitment to giving back. Through various philanthropic endeavors and mentorship programs, he has inspired countless aspiring comedians and entertainers, nurturing the next generation of creative talent.
                <br /><br />
                Experience the brilliance of Citizen Kane—a true comedic visionary whose legacy continues to inspire laughter, spark dialogue, and transform the landscape of modern comedy.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
