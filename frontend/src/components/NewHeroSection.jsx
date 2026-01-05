import React from 'react';
import { MobiusAnimation } from './MobiusAnimation';
import { ArrowRight } from 'lucide-react';

export const NewHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-scaleiq-white overflow-hidden pt-20" data-testid="hero-section">
      <MobiusAnimation />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="mb-4">
          <span className="inline-block px-4 py-2 bg-scaleiq-black text-scaleiq-white text-sm font-medium rounded-full">
            Digital Engineering Partner For Energy
          </span>
        </div>
        
        <h1 className="text-6xl lg:text-7xl font-bold text-scaleiq-black mb-6" data-testid="hero-title">
          Energy tech that works.
        </h1>
        
        <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
          The next phase of energy transformation demands a different approach. To stay ahead in an increasingly complex, asset-heavy environment, companies must move beyond tools and traditional service models.
        </p>
        
        <div className="mb-16">
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Co-innovating with our customers to solve the real barriers – to technology adoption and transformation in the energy sector.
          </p>
        </div>
        
        <button className="inline-flex items-center gap-2 px-8 py-4 bg-scaleiq-black text-scaleiq-white hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all" data-testid="hero-cta-button">
          Explore
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};