import React from 'react';
import { Zap, Users, Award, MoveRight } from 'lucide-react';

const AboutSection = () => {
  const inlineStyles = `
    .main-flex {
      display: flex;
      gap: 60px;
    }
    .right-column-inner {
      display: flex;
      flex-direction: column;
    }
    .grid-container {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .stat-card {
      background: #f8fafc;
      padding: 30px;
      border-radius: 8px;
      position: relative;
      overflow: hidden;
    }
    .bg-icon {
      position: absolute;
      right: -10px;
      bottom: -10px;
      color: rgba(0,0,0,0.03);
      transform: scale(4);
    }

    /* Mobile Responsiveness */
    @media (max-width: 768px) {
      .main-flex { 
        flex-direction: column; 
        gap: 40px; 
      }

      /* This specifically reverses the content inside the RIGHT section */
      .right-column-inner {
        flex-direction: column-reverse;
      }
      
      .grid-container {
        display: flex; 
        flex-direction: row;
        justify-content: space-between;
        gap: 10px;
      }
      
      .worker-image-card {
        display: none !important; 
      }
      
      .stat-card {
        padding: 15px 5px; 
        flex: 1;
        text-align: center;
      }

      .stat-card h4 {
        font-size: 18px !important; 
      }

      .stat-card span, .stat-card p {
        font-size: 9px !important;
      }

      /* Spacing adjustment for reversed elements */
      .right-image-wrapper {
        margin-bottom: 25px;
      }
      .values-flex {
        margin-top: 25px;
        gap: 15px;
      }
    }
  `;

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#fff' }}>
      <style>{inlineStyles}</style>
      <div className="container mx-auto px-4 lg:px-12">
        <div className="main-flex">
          
          {/* Left Column: Heading & Stats */}
          <div style={{ flex: '1' }}>
            <p style={{ color: '#16a34a', fontWeight: '600', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>
              // Who We Are
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '700', color: '#0f172a', marginBottom: '20px', lineHeight: '1.2' }}>
              Empowering the Future with Clean Hydropower Solutions
            </h2>
            <p style={{ color: '#64748b', marginBottom: '40px', lineHeight: '1.6' }}>
              Rawa Energy Development Ltd. is committed to sustainable energy development, 
              utilizing Nepal's water resources to provide affordable and eco-friendly power.
            </p>

            <div className="grid-container">
              <div className="stat-card">
                <span style={{ color: '#64748b', fontSize: '11px', fontWeight: '600' }}>REACH</span>
                <h4 style={{ fontSize: '28px', fontWeight: '700', margin: '5px 0' }}>80+</h4>
                <p style={{ color: '#94a3b8', fontSize: '12px' }}>Years</p>
                <div className="bg-icon"><Zap /></div>
              </div>

              <div className="stat-card">
                <span style={{ color: '#64748b', fontSize: '11px', fontWeight: '600' }}>PROJECTS</span>
                <h4 style={{ fontSize: '28px', fontWeight: '700', margin: '5px 0' }}>300+</h4>
                <p style={{ color: '#94a3b8', fontSize: '12px' }}>National</p>
                <div className="bg-icon"><Award /></div>
              </div>

              <div className="stat-card">
                <span style={{ color: '#64748b', fontSize: '11px', fontWeight: '600' }}>STAFF</span>
                <h4 style={{ fontSize: '28px', fontWeight: '700', margin: '5px 0' }}>357+</h4>
                <p style={{ color: '#94a3b8', fontSize: '12px' }}>Experts</p>
                <div className="bg-icon"><Users /></div>
              </div>

              <div className="worker-image-card" style={{ borderRadius: '8px', overflow: 'hidden', height: '150px' }}>
                <img 
                  src="https://www.shutterstock.com/shutterstock/videos/1099126811/thumb/1.jpg?ip=x480" 
                  alt="Worker" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Values & Main Image */}
          <div style={{ flex: '1' }}>
            <div className="right-column-inner">
              
              {/* This part goes BOTTOM on mobile */}
              <div className="text-content-wrapper">
                <div className="values-flex" style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                  <div>
                    <h5 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '15px' }}>Our Vision</h5>
                    <p style={{ fontSize: '13px', color: '#64748b' }}>To be a leader in sustainable energy production.</p>
                  </div>
                  <div>
                    <h5 style={{ fontWeight: '700', marginBottom: '5px', fontSize: '15px' }}>Our Mission</h5>
                    <p style={{ fontSize: '13px', color: '#64748b' }}>Delivering innovative power through responsible engineering.</p>
                  </div>
                </div>

                <button style={{ 
                  backgroundColor: '#2563eb', color: '#fff', padding: '10px 20px', 
                  borderRadius: '4px', border: 'none', fontWeight: '600',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  cursor: 'pointer', marginBottom: '30px', fontSize: '14px'
                }}>
                  VIEW PROJECTS <MoveRight size={18} />
                </button>
              </div>

              {/* This part goes TOP on mobile */}
              <div className="right-image-wrapper" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                <img 
                  src="./hydropower-about.jpg" 
                  alt="Hydropower Plant" 
                  style={{ width: '100%', display: 'block' }}
                />
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;