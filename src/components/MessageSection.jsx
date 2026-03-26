import React from 'react';
import { Quote } from 'lucide-react';

const MessageSection = () => {
  const inlineStyles = `
    .message-section {
      padding: 50px 0;
      background-color: #ffffff;
      overflow: hidden;
    }
    .message-container {
      display: flex;
      align-items: center;
      gap: 80px;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    .message-content {
      flex: 1.2;
    }
    .message-image-wrapper {
      flex: 0.8;
      display: flex;
      justify-content: center;
      position: relative;
    }
    /* Adjusted Blob to frame the head/shoulders properly */
    .blob-shape {
      width: 100%;
      max-width: 420px;
      aspect-ratio: 0.85 / 1; /* Slightly taller for portrait view */
      background-color: #f1f5f9;
      border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
      overflow: hidden;
      box-shadow: 20px 20px 60px rgba(0,0,0,0.05);
      border: 8px solid #fff;
    }
    .chairman-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center; /* Ensures head is always visible */
      transition: transform 0.5s ease;
    }
    .blob-shape:hover .chairman-img {
      transform: scale(1.05);
    }
    .read-more-btn {
      display: inline-block;
      padding: 14px 32px;
      background-color: #3b82f6;
      color: white;
      text-decoration: none;
      border-radius: 2px;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.3s ease;
      margin-top: 30px;
      box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);
    }
    .read-more-btn:hover {
      background-color: #2563eb;
      transform: translateY(-2px);
    }

    @media (max-width: 991px) {
      .message-container {
        flex-direction: column-reverse; /* Image moves to top on mobile */
        text-align: center;
        gap: 50px;
      }
      .message-content {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .blob-shape {
        max-width: 320px;
      }
    }
  `;

  return (
    <section className="message-section">
      <style>{inlineStyles}</style>
      <div className="message-container">
        
        {/* Left: Message Content */}
        <div className="message-content">
          <div style={{ color: '#bfdbfe', marginBottom: '20px' }}>
            <Quote size={54} fill="currentColor" />
          </div>
          
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 36px)', color: '#1e40af', fontWeight: '800', marginBottom: '10px' }}>
            Message from Chairman
          </h2>
          
          <h4 style={{ fontSize: '18px', color: '#475569', fontWeight: '600', marginBottom: '25px', letterSpacing: '0.5px' }}>
            CHAIRMAN'S MESSAGE
          </h4>
          
          <p style={{ color: '#64748b', lineHeight: '1.8', fontSize: '16px', maxWidth: '600px' }}>
            It is an absolute honor to lead Rawa Energy Development Ltd. as we forge ahead in 
            the renewable energy landscape. Our mission is built on the foundation of 
            sustainable innovation and community empowerment. We don't just build power plants; 
            we build the future of energy in Nepal.
          </p>

          <a href="/about/chairman" className="read-more-btn">
            READ MORE
          </a>
        </div>

        {/* Right: Founder Image with Blob */}
        <div className="message-image-wrapper">
          <div className="blob-shape">
            <img 
              src="./image.png" // The founder image you provided
              alt="Chairman of Rawa Energy" 
              className="chairman-img"
            />
          </div>
          
          {/* Decorative element (Optional Blue Circle behind) */}
          <div style={{ 
            position: 'absolute', 
            bottom: '-10px', 
            right: '10%', 
            width: '80px', 
            height: '80px', 
            backgroundColor: '#3b82f6', 
            borderRadius: '50%', 
            zIndex: -1,
            opacity: 0.1
          }} />
        </div>

      </div>
    </section>
  );
};

export default MessageSection;