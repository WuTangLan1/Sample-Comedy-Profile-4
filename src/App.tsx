// src/App.tsx
import './App.css'
import { useEffect } from 'react';
import Layout from './components/Layout'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.pageYOffset;
      document.body.style.setProperty('--bg-offset', `${offset * 0.5}px`);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-content">
          <Layout />
        </div>
      </header>
    </div>
  );
}

export default App
