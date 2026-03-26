import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

const heroData = [
  {
    id: 1,
    title: "Sourcing Sustainable Power from Lamjung",
    subtitle: "10 MW HYDROPOWER PROJECT",
    description: "Harnessing Nepal's water resources to provide reliable, renewable energy for a growing nation.",
    image: "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2018/01/Hydropower.jpg",
  },
  {
    id: 2,
    title: "Innovating with Solar Energy Solutions",
    subtitle: "5 MW SOLAR POWER INITIATIVE",
    description: "Expanding our portfolio with cutting-edge photovoltaic technology for a balanced energy future.",
    image: "https://bluebirdsolar.com/cdn/shop/articles/up_govt_solar_project_10d3b717-1aea-4225-8988-05534939712b_1000x.jpg?v=1745046113",
  }
];

function Hero() {
  const injectStyles = `
    @keyframes kenburns {
      from { transform: scale(1); }
      to { transform: scale(1.15); }
    }
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Apply animation only to the ACTIVE slide */
    .swiper-slide-active .animate-content {
      animation: fadeInUp 0.8s ease-out forwards;
    }
    .swiper-slide-active .animate-bg {
      animation: kenburns 10s ease-out forwards;
    }

    /* Custom Pagination Styling */
    .swiper-pagination-bullet {
      background: #fff !important;
      opacity: 0.5;
      width: 12px;
      height: 12px;
    }
    .swiper-pagination-bullet-active {
      background: #2563eb !important;
      opacity: 1;
      width: 30px;
      border-radius: 6px;
      transition: width 0.3s ease;
    }
    .hero-pagination {
      position: absolute;
      bottom: 40px !important;
      right: 60px !important;
      left: auto !important;
      width: auto !important;
      z-index: 20;
    }
  `;

  return (
    <section style={{ height: 'calc(100vh - 80px)', width: '100%', position: 'relative', backgroundColor: '#000', overflow: 'hidden' }}>
      <style>{injectStyles}</style>
      
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }} // CRITICAL: Fixes the overlapping text issue
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        pagination={{ 
          clickable: true,
          el: '.hero-pagination' 
        }}
        style={{ height: '100%', width: '100%' }}
      >
        {heroData.map((slide) => (
          <SwiperSlide key={slide.id} style={{ overflow: 'hidden', position: 'relative' }}>
            
            {/* Background Image */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
              <img 
                src={slide.image} 
                alt="Background"
                className="animate-bg"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                inset: 0, 
                background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)' 
              }} />
            </div>

            {/* Content Wrapper */}
            <div className="container mx-auto px-6 lg:px-12" style={{ 
              position: 'relative', 
              zIndex: 10, 
              height: '100%', 
              display: 'flex', 
              alignItems: 'center' 
            }}>
              <div style={{ maxWidth: '650px', color: '#fff' }}>
                
                <p className="animate-content" style={{ 
                  color: '#3b82f6', 
                  fontWeight: '700', 
                  letterSpacing: '0.2em', 
                  fontSize: '13px', 
                  marginBottom: '1rem',
                  opacity: 0 
                }}>
                  {slide.subtitle}
                </p>

                <h1 className="animate-content" style={{ 
                  fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', 
                  fontWeight: '600', 
                  lineHeight: '1.2', 
                  marginBottom: '1.5rem',
                  opacity: 0 
                }}>
                  {slide.title}
                </h1>

                <p className="animate-content" style={{ 
                  color: '#d1d5db', 
                  fontSize: '1rem', 
                  lineHeight: '1.6', 
                  marginBottom: '2rem', 
                  maxWidth: '500px',
                  opacity: 0 
                }}>
                  {slide.description}
                </p>

                <div className="animate-content" style={{ display: 'flex', gap: '1rem', opacity: 0 }}>
                  <Link to="/projects" className="hover-btn-primary" style={{
                    padding: '12px 28px',
                    backgroundColor: '#2563eb',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '600',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: '0.3s'
                  }}>
                    READ MORE
                  </Link>
                  
                  <Link to="/contact" className="hover-btn-secondary" style={{
                    padding: '12px 28px',
                    border: '1px solid rgba(255,255,255,0.4)',
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '600',
                    borderRadius: '2px',
                    textDecoration: 'none',
                    transition: '0.3s'
                  }}>
                    CONTACT US
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* The Pagination Container (Positioned at Mid-End) */}
        <div className="hero-pagination"></div>
      </Swiper>
    </section>
  );
}

export default Hero;