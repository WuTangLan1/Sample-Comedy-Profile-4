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
    if (element) {
      const startY = window.scrollY
      const targetY = element.offsetTop
      const distance = targetY - startY
      const duration = Math.min(1000, Math.abs(distance * 0.5))
  
      const startTime = performance.now()
      
      const ease = (t: number) => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
      }
  
      const animate = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easedProgress = ease(progress)
        
        window.scrollTo(0, startY + distance * easedProgress)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
  
      requestAnimationFrame(animate)
    }
  }

  const sectionVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.4, 0, 0.2, 1],
        delay: 0.2 
      } 
    }
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header activeSection={activeSection} handleNavigation={handleNavigation} />
      <Box component="main" sx={{ flexGrow: 1 }}>
      <AnimatePresence mode='wait'>
        <motion.div 
          key={activeSection} 
          initial='hidden' 
          animate='visible'
          exit={{ opacity: 0, y: -40, scale: 0.98, transition: { duration: 0.8 } }}
          variants={sectionVariants}>
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