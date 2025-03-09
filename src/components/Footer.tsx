// src\components\Footer.tsx

import React from 'react'
import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: 'primary.main', color: 'white' }}>
      <Container maxWidth="xl">
        <Typography variant="body1" align="center">
          © 2025 Comedy Profile. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
