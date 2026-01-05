import React from 'react';

export const CaseStudyHighlight = () => {
  return (
    <section className="py-20 bg-scaleiq-black" data-testid="case-study-highlight">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-scaleiq-white mb-6">
              Subsurface Prospecting
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Subsurface data is scattered across seismic, logs, drilling, cores, and simulations, making full-field interpretation slow and inconsistent. Complex geology and limited data integration lead to uncertainty in reservoir mapping and higher exploration risk.
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-scaleiq-gold text-scaleiq-black hover:bg-scaleiq-white font-medium rounded-lg transition-all" data-testid="case-study-btn">
              Case Study
            </button>
          </div>
          <div className="h-64 bg-gray-800 rounded-lg flex items-center justify-center">
            <div className="text-gray-500 text-sm">Case Study Visual</div>
          </div>
        </div>
      </div>
    </section>
  );
};