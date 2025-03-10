// src/components/EventsSection.tsx
import { useState } from 'react'
import { Box, Typography, Button, Card, CardContent, CardActions, Grid, useTheme } from '@mui/material'
import { motion, AnimatePresence } from 'framer-motion'

export default function EventsSection({ id }: { id: string }) {
  const theme = useTheme()
  const sampleNames = [
    "The Laugh Factory Live",
    "Comedy Under the Stars",
    "Midnight Stand-Up",
    "Jokes and Jams",
    "Hilarious Headliners",
    "The Giggle Gala",
    "Stand-Up Soirée",
    "Comic Relief Night",
    "Laughter in the Park",
    "Riotous Routines",
    "Live from the Lounge",
    "Saturday Night Shenanigans",
    "Punchline Party",
    "The Comedy Circuit",
    "Laugh Out Loud Live",
    "Night of Knockouts",
    "Humor Unplugged",
    "The Ultimate Comedy Jam",
    "Stand-Up Extravaganza",
    "The Grand Giggle Fest"
  ]
  const sampleLocations = [
    "The Laugh Factory",
    "Downtown Comedy Club",
    "City Center Stage",
    "The Open Mic",
    "The Comedy Cellar",
    "Laughter Lounge",
    "Sidewalk Stand-Up",
    "The Giggle Garage",
    "Main Street Theater",
    "Sunset Pavilion",
    "The Comedy Cafe",
    "Corner Stage",
    "Urban Humor Hub",
    "Midtown Spotlight",
    "Rooftop Routines",
    "Suburban Stand-Up",
    "The Joke Joint",
    "Comedy Castle",
    "The Punchline Pub",
    "The Grand Stage"
  ]
  const dummyEvents = sampleNames.map((title, i) => {
    const month = (i % 12) + 1
    const day = 15 + (i % 5)
    const dateString = `2025-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`
    const timeOptions = ["7:30 PM", "8:00 PM", "8:30 PM"]
    const time = timeOptions[i % 3]
    return {
      id: i + 1,
      title,
      date: dateString,
      location: sampleLocations[i],
      time,
      link: '#',
      description: `Join us for ${title} at ${sampleLocations[i]}. Enjoy a night of electrifying comedy with top performers and an unforgettable atmosphere.`
    }
  })
  const [visibleCount, setVisibleCount] = useState(4)
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50, transition: { duration: 0.3 } }
  }
  const buttonVariants = {
    hover: { y: -10, transition: { type: 'spring', stiffness: 300 } },
    tap: { y: -5 }
  }
  const handleToggle = () => {
    if (visibleCount < dummyEvents.length) {
      setVisibleCount(dummyEvents.length)
    } else {
      setVisibleCount(4)
    }
  }
  return (
    <Box id={id} sx={{ p: 8, backgroundColor: 'transparent' }}>
      <Typography 
        variant="h2" 
        align="center" 
        gutterBottom 
        sx={{ color: theme.palette.mode === 'light' ? 'black' : 'inherit' }}
      >
        Upcoming Events
      </Typography>
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        <Grid container spacing={4} justifyContent="center">
          <AnimatePresence>
            {dummyEvents.slice(0, visibleCount).map((event) => (
              <Grid item key={event.id} xs={12} sm={6} md={4} lg={3} component={motion.div} variants={itemVariants} initial="hidden" animate="visible" exit="exit">
                <Card sx={{
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  transition: 'all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28)',
                  borderRadius: 2,
                  backgroundImage: theme.palette.mode === 'light' ? 'url(/images/backgrounds/eventsLight.svg)' : 'url(/images/backgrounds/eventsDark.svg)',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  boxShadow: theme.palette.mode === 'light'
                    ? '0px 4px 20px rgba(0,0,0,0.1)'
                    : 'inherit',
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
                    background: `linear-gradient(45deg,
                      ${theme.palette.secondary.main}20,
                      ${theme.palette.primary.main}20
                    )`,
                    zIndex: 1
                  },
                  '&::after': {
                    background: `linear-gradient(
                      90deg,
                      transparent,
                      ${theme.palette.mode === 'light' ? '#ffffff80' : '#ffffff20'},
                      transparent
                    )`,
                    transition: 'transform 0.6s cubic-bezier(0.68, -0.55, 0.27, 1.55)',
                    zIndex: 2
                  }
                }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: theme.palette.secondary.main }}>
                      {event.title}
                    </Typography>
                    <Typography variant="body1" sx={{ mt: 1 }}>
                      {event.location}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {event.time}
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>
                      {event.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Button size="small" variant="contained" color="secondary" href={event.link}>
                      Buy Tickets
                    </Button>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </motion.div>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <motion.div variants={buttonVariants} whileHover="hover" whileTap="tap">
          <Button variant="outlined" color="secondary" onClick={handleToggle}>
            {visibleCount < dummyEvents.length ? 'Show More' : 'Show Less'}
          </Button>
        </motion.div>
      </Box>
    </Box>
  )
}
