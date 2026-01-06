import React from 'react';
import { useNavigate } from 'react-router-dom';

export const CTASection = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-24 bg-scaleiq-black" data-testid="cta-section">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <div className="inline-block px-6 py-2 bg-scaleiq-gold/10 border border-scaleiq-gold text-scaleiq-gold text-sm font-medium rounded-full mb-8">
          Let's Talk
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-bold text-scaleiq-white mb-6">
          Rethink Your Digital Roadmap
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          For energy and infrastructure companies considering how to shape their digital transformation roadmap, we invite a thoughtful and confidential discussion.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => navigate('/about/overview')}
            className="px-8 py-4 bg-scaleiq-gold text-scaleiq-black hover:bg-scaleiq-white font-medium rounded-lg transition-all transform hover:scale-105"
            data-testid="cta-explore-button"
          >
            Explore
          </button>
          <button 
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-transparent border-2 border-scaleiq-white text-scaleiq-white hover:bg-scaleiq-white hover:text-scaleiq-black font-medium rounded-lg transition-all"
            data-testid="cta-contact-button"
          >
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};