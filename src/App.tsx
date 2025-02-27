import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  return (
    <Router basename='/Avishkar'>
      <div className="min-h-screen bg-gray-50 flex flex-col">
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