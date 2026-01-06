import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MobiusStrip3D } from './MobiusStrip3D';

export const NewHeroSection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center bg-scaleiq-white pt-20" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Content */}
          <div className="order-2 lg:order-1">
            <h1 className="text-6xl lg:text-7xl font-bold text-scaleiq-black mb-8 leading-tight" data-testid="hero-title">
              <span className="text-scaleiq-gold">Digital Engineering</span>
              <br />
              Partner for Energy
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

          {/* RIGHT: 3D Mobius Strip */}
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square bg-scaleiq-black rounded-2xl overflow-hidden shadow-2xl border-4 border-scaleiq-gold/20">
              <MobiusStrip3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};