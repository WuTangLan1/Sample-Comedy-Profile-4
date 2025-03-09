import React from 'react'
import { Box, Typography, Container, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

export default function AboutSection({ id }: { id: string }) {
  const theme = useTheme()
  return (
    <Box id={id} sx={{ p: 8, backgroundColor: theme.palette.mode === 'light' ? 'background.paper' : '#121212' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 4 }}>
          <motion.img
            src="/images/personal/profile1.png"
            alt="Citizen Kane"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              width: 250,
              height: 250,
              borderRadius: '50%',
              marginBottom: '1.5rem',
              border: `4px solid ${theme.palette.mode === 'light' ? '#1976d2' : '#bb86fc'}`,
              boxShadow: theme.palette.mode === 'light' ? '0 4px 10px rgba(0,0,0,0.15)' : '0 4px 10px rgba(255,255,255,0.15)'
            }}
          />
          <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 700, background: theme.palette.mode === 'light' ? 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)' : 'linear-gradient(45deg, #bb86fc 30%, #3700b3 90%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: theme.palette.mode === 'light' ? '0 2px 4px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.6)' }}>
              Citizen Kane
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.8, color: theme.palette.mode === 'light' ? 'text.primary' : 'text.secondary', background: theme.palette.mode === 'light' ? 'none' : 'linear-gradient(45deg, #ffffff10 30%, #ffffff05 90%)', padding: theme.palette.mode === 'light' ? 0 : '1rem', borderRadius: theme.palette.mode === 'light' ? 0 : 2 }}>
              Citizen Kane is a world-renowned comedian and entertainer whose unparalleled wit and charm have captivated audiences for decades. With a career spanning over 30 years, he has redefined the art of comedy through his unique blend of observational humor, satire, and heartfelt storytelling. Born with a natural gift for making people laugh, Citizen Kane quickly rose to fame as he toured the globe, performing in some of the most prestigious venues and festivals.
              <br/><br/>
              Known for his innovative approach to comedy, Citizen Kane has not only entertained millions but also inspired a new generation of performers. His groundbreaking performances have earned him numerous awards and accolades, making him a true icon in the world of entertainment. Beyond the stage, he is celebrated for his philanthropy and commitment to social causes, using his influence to give back to the community and support emerging talent.
              <br/><br/>
              With his magnetic presence and unmistakable style, Citizen Kane continues to push the boundaries of comedy, constantly evolving and experimenting with new formats and ideas. His ability to connect with audiences on a deep and personal level is a testament to his enduring appeal and the timeless nature of his work. Experience the brilliance of Citizen Kane, a true legend whose legacy will undoubtedly inspire laughter and joy for generations to come.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
