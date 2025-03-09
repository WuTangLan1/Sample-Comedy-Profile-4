// src/theme/ThemeConfig.tsx
import React, { ReactNode, createContext, useState, useMemo, useContext } from 'react'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'

const ColorModeContext = createContext({
  mode: 'light',
  toggleColorMode: () => {}
})

export function useColorMode() {
  return useContext(ColorModeContext)
}

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: '#2196f3',
      main: '#1976d2',
      dark: '#0d47a1'
    },
    secondary: {
      light: '#ba68c8',
      main: '#9c27b0',
      dark: '#7b1fa2'
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828'
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100'
    },
    info: {
      light: '#29b6f6',
      main: '#0288d1',
      dark: '#01579b'
    },
    success: {
      light: '#66bb6a',
      main: '#2e7d32',
      dark: '#1b5e20'
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff'
    },
    text: {
      primary: '#212121',
      secondary: '#424242'
    }
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700 },
    h2: { fontSize: '2.5rem', fontWeight: 700 },
    h3: { fontSize: '2rem', fontWeight: 600 },
    h4: { fontSize: '1.75rem', fontWeight: 600 },
    h5: { fontSize: '1.5rem', fontWeight: 500 },
    h6: { fontSize: '1.25rem', fontWeight: 500 },
    subtitle1: { fontSize: '1rem', fontWeight: 400 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 400 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: { borderRadius: 12 },
  spacing: 8,
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  breakpoints: {
    values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1440 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          padding: '12px 24px'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16
        }
      }
    }
  }
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      light: '#bb86fc',
      main: '#bb86fc',
      dark: '#3700b3'
    },
    secondary: {
      light: '#03dac6',
      main: '#03dac6',
      dark: '#018786'
    },
    error: {
      light: '#ef5350',
      main: '#d32f2f',
      dark: '#c62828'
    },
    warning: {
      light: '#ff9800',
      main: '#ed6c02',
      dark: '#e65100'
    },
    info: {
      light: '#29b6f6',
      main: '#0288d1',
      dark: '#01579b'
    },
    success: {
      light: '#66bb6a',
      main: '#2e7d32',
      dark: '#1b5e20'
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d'
    },
    text: {
      primary: '#ffffff',
      secondary: '#bdbdbd'
    }
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    h1: { fontSize: '3rem', fontWeight: 700 },
    h2: { fontSize: '2.5rem', fontWeight: 700 },
    h3: { fontSize: '2rem', fontWeight: 600 },
    h4: { fontSize: '1.75rem', fontWeight: 600 },
    h5: { fontSize: '1.5rem', fontWeight: 500 },
    h6: { fontSize: '1.25rem', fontWeight: 500 },
    subtitle1: { fontSize: '1rem', fontWeight: 400 },
    subtitle2: { fontSize: '0.875rem', fontWeight: 400 },
    body1: { fontSize: '1rem', fontWeight: 400 },
    body2: { fontSize: '0.875rem', fontWeight: 400 },
    button: { textTransform: 'none', fontWeight: 600 }
  },
  shape: { borderRadius: 12 },
  spacing: 8,
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195
    }
  },
  breakpoints: {
    values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1440 }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          textTransform: 'none',
          padding: '12px 24px'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none'
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 16
        }
      }
    }
  }
})

type ThemeConfigProps = { children: ReactNode }

export default function ThemeConfig({ children }: ThemeConfigProps) {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const colorMode = useMemo(() => ({
    mode,
    toggleColorMode: () => {
      setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }
  }), [mode])
  const theme = mode === 'light' ? lightTheme : darkTheme
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}
