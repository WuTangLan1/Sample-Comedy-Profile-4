// src/components/EventsSection.tsx
import React from 'react'
import { Box, Typography, Button, Card, CardContent, CardActions, CardMedia, Grid, useTheme } from '@mui/material'
import { motion } from 'framer-motion'

export default function EventsSection() {
  const theme = useTheme()
  const dummyEvents = [
    { id: 1, title: 'Live at The Comedy Club', date: '2025-04-10', location: 'Main Street Comedy Hall', time: '8:00 PM', price: '$25', link: '#', description: 'A hilarious night of stand-up comedy featuring top acts' },
    { id: 2, title: 'Stand Up Special Night', date: '2025-05-05', location: 'Downtown Arena', time: '9:30 PM', price: '$30', link: '#', description: 'A special set showcasing the comedian’s latest material' }
  ]
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
            <Grid item key={event.id} xs={12} sm={6} md={4}>
              <motion.div variants={itemVariants}>
                <Card elevation={3}>
                  <CardMedia component="img" image="https://via.placeholder.com/400x250" alt={event.title} />
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
