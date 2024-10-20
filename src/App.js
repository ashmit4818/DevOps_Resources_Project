
import {React, useEffect, useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import YoutubeSection from './components/YoutubeSection';
import DockerDocsSection from './components/DockerDocsSection';
import BlogsSection from './components/BlogsSection';
import MediumArticlesSection from './components/MediumArticlesSection';
import GithubBlogsSection from './components/GithubBlogsSection';
import FccBlogsSection from './components/FccBlogsSection';
import Cursor from './components/Cursor';
import Footer from './components/Footer';
// import ThemeSwitchButton from './components/ThemeSwitchButton';
import ThemeProvider from './contexts/ThemeContext';
import '../src/assets/css/customCursor.css';
import './App.css';

function App() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size when the component mounts
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1024); // Assume mobile if screen width is 768px or less
    };

    checkScreenSize(); // Initial check
    window.addEventListener('resize', checkScreenSize); // Listen for window resize events

    return () => {
      window.removeEventListener('resize', checkScreenSize); // Cleanup the listener on unmount
    };
  }, []);


  return (
    <ThemeProvider>
    <Router basename='/'>
      <div id="root" style={{backgroundColor: '#000'}}>
        <Navbar isMobile={isMobile}/>
        <main style={{backgroundColor: '#000'}}>
        {!isMobile && <Cursor />} {/* Only render Cursor if not on mobile */}
          <Routes>
            <Route exact path="/" element={<Home isMobile={isMobile} />} />
            <Route path="/youtube" element={<YoutubeSection />} />
            <Route path="/docker-docs" element={<DockerDocsSection />} />
            <Route path="/blogs" element={<FccBlogsSection />} />
            <Route path="/medium-articles" element={<MediumArticlesSection />} />
            <Route path="/github" element={<GithubBlogsSection />} />
            <Route path="/random-blogs" element={<BlogsSection />} />

          </Routes>
        </main>
        <Footer isMobile={isMobile} />
        {/* <ThemeSwitchButton /> */}
      </div>
    </Router>
    </ThemeProvider>

  );
}

export default App;
