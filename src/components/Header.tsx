// src\components\Header.tsx

import React from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'
import { Box } from '@mui/system'

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Comedy Profile
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
