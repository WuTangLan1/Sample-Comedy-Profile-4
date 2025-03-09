// src/components/EventsSection.tsx
import React from 'react'
import { Box, Typography, Button, Card, CardContent, CardActions, Grid, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

export default function EventsSection() {
  const theme = useTheme()
  const dummyEvents = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Event Title ${i + 1}`,
    date: `2025-0${((i % 12) + 1).toString().padStart(2, '0')}-15`,
    location: `Location ${i + 1}`,
    time: `${8 + (i % 5)}:00 PM`,
    price: `$${25 + (i % 10) * 5}`,
    link: '#',
    description: `This is a brief description for event ${i + 1} with exciting details to engage the audience.`
  }))
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Upcoming Events
      </Typography>
      <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <Grid container spacing={4} justifyContent="center">
          {dummyEvents.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4} lg={3}>
              <motion.div variants={itemVariants}>
                <Card elevation={4} sx={{ borderRadius: 2, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.03)' } }}>
                  <CardContent>
                    <Typography variant="h5" sx={{ fontWeight: 700 }}>
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
                    <Box sx={{ mt: 2, p: 1, borderRadius: 1, backgroundColor: theme.palette.secondary.light }}>
                      <Typography variant="body1" sx={{ fontWeight: 700 }}>
                        {event.date}
                      </Typography>
                      <Typography variant="body2">
                        {event.price}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="contained" color="secondary" href={event.link}>
                      Buy Tickets
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  )
}
