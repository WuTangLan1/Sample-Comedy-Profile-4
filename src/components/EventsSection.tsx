// src\components\EventsSection.tsx

import React from 'react'
import { Box, Typography, Button, Card, CardContent, CardActions, Grid } from '@mui/material'

export default function EventsSection() {
  const dummyEvents = [
    { id: 1, title: 'Live at The Comedy Club', date: '2025-04-10', link: '#' },
    { id: 2, title: 'Stand Up Special Night', date: '2025-05-05', link: '#' }
  ]
  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Typography variant="h2" align="center" gutterBottom>
        Upcoming Events
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {dummyEvents.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <Card elevation={3}>
              <CardContent>
                <Typography variant="h5" component="div">
                  {event.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {event.date}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="secondary" href={event.link}>
                  Buy Tickets
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
