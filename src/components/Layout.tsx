// src/components/Layout.tsx
import React from 'react'
import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import EventsSection from './EventsSection'
import AboutSection from './AboutSection'
import MediaSection from './MediaSection'
import ShopSection from './ShopSection'

export default function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        {children}
        <EventsSection />
        <AboutSection />
        <MediaSection />
        <ShopSection />
      </Box>
      <Footer />
    </Box>
  )
}
