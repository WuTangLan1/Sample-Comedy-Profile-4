// src/components/Header.tsx
import React from 'react'
import { AppBar, Toolbar, Typography, Container, IconButton } from '@mui/material'
import { Box } from '@mui/system'
import { useColorMode } from '../theme/ThemeConfig'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { styled } from '@mui/system'

const NavLink = styled(Typography)({
  marginLeft: '1rem',
  cursor: 'pointer'
})

export default function Header() {
  const { mode, toggleColorMode } = useColorMode()
  const pages = ['Events', 'About', 'Media', 'Shop']

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters style={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/personal/profile1.png"
              alt="logo"
              style={{ width: 50, height: 50, marginRight: '1rem', borderRadius: '50%' }}
            />
            <Typography variant="h6" noWrap>
              citizen Kane
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {pages.map((page) => (
              <NavLink variant="body1" key={page}>
                {page}
              </NavLink>
            ))}
            <IconButton onClick={toggleColorMode} sx={{ marginLeft: '1.5rem' }}>
              {mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
