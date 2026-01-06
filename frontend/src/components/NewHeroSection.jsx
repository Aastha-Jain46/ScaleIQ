import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NewHeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center bg-scaleiq-white pt-20" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-6xl lg:text-7xl font-bold text-scaleiq-black mb-8 leading-tight" data-testid="hero-title">
              Digital Engineering Partner for Energy
            </h1>
            
            <p className="text-xl text-gray-700 mb-12 leading-relaxed">
              Co-innovating with our customers to solve the real barriers – to technology adoption and transformation in the energy sector.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/about/overview')}
                className="px-8 py-4 border-2 border-scaleiq-black text-scaleiq-black hover:bg-scaleiq-black hover:text-scaleiq-white font-medium rounded-lg transition-all" 
                data-testid="hero-explore-button"
              >
                Explore
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="px-8 py-4 border-2 border-scaleiq-gold text-scaleiq-gold hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all" 
                data-testid="hero-contact-button"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* RIGHT: Large Mobius Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square bg-scaleiq-black rounded-2xl flex items-center justify-center overflow-hidden relative">
              <svg
                className="w-full h-full"
                viewBox="0 0 800 800"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Main Mobius Loop */}
                <path
                  d="M 200 400 Q 300 200, 500 200 T 600 400 Q 700 600, 500 600 T 400 400 Q 300 200, 500 200"
                  stroke="#C8A951"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="2000"
                  strokeDashoffset="2000"
                  className="animate-mobius-flow"
                  opacity="0.6"
                />
                
                {/* Secondary Loop */}
                <path
                  d="M 250 400 C 330 250, 470 250, 570 400 C 650 550, 470 550, 380 400"
                  stroke="#C8A951"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="1800"
                  strokeDashoffset="1800"
                  className="animate-mobius-flow"
                  style={{ animationDelay: '4s' }}
                  opacity="0.4"
                />
                
                {/* Tertiary Loop */}
                <path
                  d="M 280 380 C 350 260, 450 260, 550 380 C 620 500, 450 500, 360 380"
                  stroke="#C8A951"
                  strokeWidth="1.5"
                  fill="none"
                  strokeDasharray="1600"
                  strokeDashoffset="1600"
                  className="animate-mobius-flow"
                  style={{ animationDelay: '8s' }}
                  opacity="0.3"
                />
                
                {/* Connection Points */}
                <circle cx="500" cy="200" r="4" fill="#C8A951" opacity="0.8">
                  <animate attributeName="r" values="4;8;4" dur="6s" repeatCount="indefinite" />
                </circle>
                <circle cx="600" cy="400" r="4" fill="#C8A951" opacity="0.6">
                  <animate attributeName="r" values="4;7;4" dur="5s" repeatCount="indefinite" />
                </circle>
                <circle cx="500" cy="600" r="4" fill="#C8A951" opacity="0.7">
                  <animate attributeName="r" values="4;9;4" dur="7s" repeatCount="indefinite" />
                </circle>
                <circle cx="400" cy="400" r="3" fill="#C8A951" opacity="0.5">
                  <animate attributeName="r" values="3;6;3" dur="4s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};