import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const EnergyTechSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const caseStudies = [
    {
      title: 'Subsurface Prospecting',
      description: 'Subsurface data is scattered across seismic, logs, drilling, cores, and simulations, making full-field interpretation slow and inconsistent. Complex geology and limited data integration lead to uncertainty in reservoir mapping and higher exploration risk.'
    },
    {
      title: 'MOC Modernization',
      description: 'MOC processes were handled through a mix of email, spreadsheets, and legacy applications, slowing approvals and increasing operational risk. Lack of workflow automation and system integration made it difficult to ensure traceability, accountability, and timely execution.'
    },
    {
      title: 'Data Integration Across Asset Operations',
      description: 'Operational and engineering data was spread across historians, enterprise systems, and bespoke applications. Limited integration and inconsistent data quality made cross-asset visibility difficult and slowed analytics and AI adoption.'
    },
    {
      title: 'Domain-Driven AI in Operations',
      description: 'AI initiatives struggled to move beyond pilots due to limited domain context and poor integration with operational workflows. Models operated in isolation, reducing trust and limiting their impact on day-to-day decision-making.'
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-24 bg-gray-50 border-t-4 border-scaleiq-gold" data-testid="energy-tech-section">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-scaleiq-black mb-6">
            <span className="text-scaleiq-gold">Energy tech</span> that works.
          </h2>
          
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            The next phase of energy transformation demands a different approach. To stay ahead in an increasingly complex, asset-heavy environment, companies must move beyond tools and traditional service models.
          </p>
        </div>

        {/* Case Studies Carousel */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-scaleiq-black">
              <span className="text-scaleiq-gold">Case Studies</span>
            </h3>
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3 rounded-lg border-2 border-scaleiq-gold text-scaleiq-gold hover:bg-scaleiq-gold hover:text-scaleiq-black transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-lg border-2 border-scaleiq-gold text-scaleiq-gold hover:bg-scaleiq-gold hover:text-scaleiq-black transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {caseStudies.map((study, index) => (
                <div key={index} className="min-w-full px-2">
                  <div className="p-8 bg-scaleiq-white border-l-4 border-scaleiq-gold rounded-lg shadow-lg">
                    <div className="inline-block px-4 py-2 bg-scaleiq-gold/10 text-scaleiq-gold text-sm font-medium rounded-full mb-4">
                      Case Study
                    </div>
                    <h4 className="text-2xl font-bold text-scaleiq-black mb-4">{study.title}</h4>
                    <p className="text-gray-700 leading-relaxed mb-6">{study.description}</p>
                    <button className="px-6 py-3 bg-scaleiq-black text-scaleiq-white hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all">
                      Read Case Study
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {caseStudies.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  activeSlide === index 
                    ? 'w-8 bg-scaleiq-gold' 
                    : 'w-2 bg-gray-300 hover:bg-scaleiq-gold/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* See More CTA */}
          <div className="text-center mt-12">
            <button 
              onClick={() => window.location.href = '/case-studies'}
              className="px-8 py-4 border-2 border-scaleiq-gold text-scaleiq-gold hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all"
            >
              See More Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};