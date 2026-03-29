import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/Contact'
import GalleryPage from './pages/Gallery'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubGallery from './pages/SubGallery'
import About from './pages/About'
import OurTeam from './pages/OurTeam'
import VisionMission from './pages/VisionMission'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about-us/mission-vision" element={<VisionMission />} />
        <Route path="/about-us/team" element={<OurTeam />} />

        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/gallery/:albumSlug" element={<SubGallery />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

