import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/Contact'
import GalleryPage from './pages/Gallery'
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/galleries" element={<GalleryPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

