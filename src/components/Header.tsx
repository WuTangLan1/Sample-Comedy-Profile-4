import { AppBar, Toolbar, Typography, Container, IconButton, Button } from '@mui/material'
import { Box } from '@mui/system'
import { useColorMode } from '../theme/ThemeConfig'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { styled } from '@mui/system'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { IconButtonTypeMap } from '@mui/material/IconButton/IconButton'

interface HeaderProps {
  activeSection: string
  handleNavigation: (section: string) => void
}


const NavLink = styled(Button)(({ theme }) => ({
  margin: '0 1rem',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 4,
    left: 0,
    width: '0%',
    height: '2px',
    backgroundColor: theme.palette.primary.main,
    transition: 'width 0.3s ease'
  },
  '&:hover::after': {
    width: '100%'
  }
}))

const SocialIcon = styled(IconButton)(({ theme }) => ({
  marginLeft: '0.5rem',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateY(-3px)',
    backgroundColor: 'transparent'
  }
})) as OverridableComponent<IconButtonTypeMap<{}, 'a'>>

export default function Header({ activeSection, handleNavigation }: HeaderProps) {
  const { mode, toggleColorMode } = useColorMode()
  const pages = ['Events', 'About', 'Media', 'Shop']

  return (
    <AppBar position="sticky" sx={{ 
      backdropFilter: 'blur(10px)',
      backgroundColor: mode === 'light' ? 'rgba(255,255,255,0.8)' : 'rgba(18,18,18,0.8)',
      boxShadow: 'none'
    }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between', py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/personal/profile1.png"
              alt="logo"
              style={{ 
                width: 56, 
                height: 56, 
                marginRight: '1.5rem', 
                borderRadius: '50%',
                border: `2px solid ${mode === 'light' ? '#1976d2' : '#bb86fc'}`
              }}
            />
            <Typography variant="h6" sx={{ 
              fontWeight: 700,
              background: mode === 'light' 
                ? 'linear-gradient(45deg, #1976d2 30%, #2196f3 90%)' 
                : 'linear-gradient(45deg, #bb86fc 30%, #3700b3 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Citizen Kane
            </Typography>
          </Box>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {pages.map((page) => (
              <NavLink
                key={page}
                onClick={() => handleNavigation(page)}
                sx={{
                  color: activeSection === page 
                    ? (mode === 'light' ? 'primary.main' : 'secondary.main') 
                    : 'text.primary',
                  fontWeight: activeSection === page ? 700 : 500
                }}
              >
                {page}
              </NavLink>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SocialIcon 
              component="a"
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon sx={{ color: mode === 'light' ? '#E1306C' : '#ffffff' }} />
            </SocialIcon>
            <SocialIcon 
              component="a"
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon sx={{ color: mode === 'light' ? '#1DA1F2' : '#ffffff' }} />
            </SocialIcon>
            <SocialIcon 
              component="a"
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YouTubeIcon sx={{ color: mode === 'light' ? '#FF0000' : '#ffffff' }} />
            </SocialIcon>
            
            <IconButton 
              onClick={toggleColorMode} 
              sx={{ 
                marginLeft: '1.5rem',
                backgroundColor: mode === 'light' ? 'rgba(25,118,210,0.1)' : 'rgba(187,134,252,0.1)',
                '&:hover': {
                  backgroundColor: mode === 'light' ? 'rgba(25,118,210,0.2)' : 'rgba(187,134,252,0.2)'
                }
              }}
            >
              {mode === 'light' ? (
                <Brightness4Icon sx={{ color: 'primary.main' }} />
              ) : (
                <Brightness7Icon sx={{ color: 'secondary.main' }} />
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}