import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/Contact'
import GalleryPage from './pages/Gallery'
import AGMNoticePage from './pages/News/AGMNoticePage'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SubGallery from './pages/SubGallery'
import About from './pages/About'
import OurTeam from './pages/OurTeam'
import VisionMission from './pages/VisionMission'
import ScrollToTop from './components/ScrollToTop'
import Projects from './pages/Project';
import NotFound from './pages/NotFound';
import ReportsPage from './pages/Download/Reports';
import PrototypeDisclaimer from './components/PrototypeDisclaimer'
import NewsPage from './pages/News'

export default function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <PrototypeDisclaimer />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/about-us/mission-vision" element={<VisionMission />} />
        <Route path="/about-us/team" element={<OurTeam />} />

        <Route path="/projects-activities" element={<Projects />} />   

        <Route path="/downloads/" element={<ReportsPage />} />        
        <Route path="/downloads/reports" element={<ReportsPage />} />    

        <Route path="/news" element={<NewsPage />} />        
        <Route path="/news/agm-2026-notice" element={<AGMNoticePage />} />        


        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/gallery" element={<GalleryPage />} />

        <Route path="/gallery/:albumSlug" element={<SubGallery />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

