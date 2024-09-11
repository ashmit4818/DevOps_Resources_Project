
import React from 'react';
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
import '../src/assets/css/customCursor.css';
import './App.css';

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <main>
          <Cursor />
          
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/youtube" element={<YoutubeSection />} />
            <Route path="/docker-docs" element={<DockerDocsSection />} />
            <Route path="/blogs" element={<FccBlogsSection />} />
            <Route path="/medium-articles" element={<MediumArticlesSection />} />
            <Route path="/github" element={<GithubBlogsSection />} />
            <Route path="/random-blogs" element={<BlogsSection />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
