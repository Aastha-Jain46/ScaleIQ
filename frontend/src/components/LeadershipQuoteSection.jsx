import React from 'react';

export const LeadershipQuoteSection = () => {
  return (
    <section className="py-20 bg-gray-50" data-testid="leadership-quote-section">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-scaleiq-black mb-12">
          Driven By Global Leaders in Energy and Infra Tech
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          The hardest problems in energy are not building technology, but integrating it into live, regulated, and interdependent systems. It demands leadership capable of balancing innovation with operational risk, regulatory constraint, and system continuity at scale.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Founded and led by industry veterans in the energy technology space, the ScaleIQ team brings a long-term view on meaningfully transforming mission-critical environments - where decisions made today must deliver value and resilience for decades to come.
        </p>
        <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 border-2 border-scaleiq-black text-scaleiq-black hover:bg-scaleiq-black hover:text-scaleiq-white font-medium rounded-lg transition-all" data-testid="more-about-us-btn">
          More About Us
        </button>
      </div>
    </section>
  );
};