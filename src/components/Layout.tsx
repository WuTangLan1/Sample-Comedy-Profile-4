// src/components/Layout.tsx
import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import Header from './Header'
import Footer from './Footer'
import EventsSection from './EventsSection'
import AboutSection from './AboutSection'
import MediaSection from './MediaSection'
import ShopSection from './ShopSection'
import { AnimatePresence, motion } from 'framer-motion'

export default function Layout({ children }: { children?: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('Events')
  
  const handleNavigation = (section: string) => {
    setActiveSection(section)
    const element = document.getElementById(section.toLowerCase())
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeInOut' } }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header activeSection={activeSection} handleNavigation={handleNavigation} />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <AnimatePresence mode='wait'>
          <motion.div key={activeSection} initial='hidden' animate='visible' variants={sectionVariants}>
            <EventsSection id='events' />
            <AboutSection id='about' />
            <MediaSection id='media' />
            <ShopSection id='shop' />
          </motion.div>
        </AnimatePresence>
        {children}
      </Box>
      <Footer />
    </Box>
  )
}