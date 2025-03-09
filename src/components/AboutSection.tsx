// src\components\AboutSection.tsx

import React from 'react'
import { Box, Typography, Container } from '@mui/material'

export default function AboutSection() {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h2" align="center" gutterBottom>
          About the Comedian
        </Typography>
        <Typography variant="body1" align="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, nisi vel cursus tincidunt, justo magna ullamcorper dolor, a tincidunt ipsum nisi vel orci.
        </Typography>
      </Container>
    </Box>
  )
}
