import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Resources from './pages/Resources';
import Sample from './pages/Sample';
import OurTeam from './pages/OurTeam';
import Gallery from './pages/Gallery';
import ScrollUpButton from './components/ScrollUpButton';
import Preloader from './components/Preloader';

function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Set content loaded after preloader animation completes
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 3000); // This should be longer than the preloader timeout (2000ms + 1000ms fade)
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename='/home'>
      <Preloader />
      <div className={`min-h-screen bg-gray-50 flex flex-col ${!contentLoaded ? 'opacity-0' : 'opacity-100'}`} 
           style={{ transition: 'opacity 0.5s ease', display: contentLoaded ? 'flex' : 'none' }}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/team" element={<OurTeam />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sample" element={<Sample />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <ScrollUpButton />
      </div>
    </Router>
  );
}

export default App;