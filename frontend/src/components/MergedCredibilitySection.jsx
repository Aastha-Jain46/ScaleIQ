import React from 'react';

export const MergedCredibilitySection = () => {
  const domains = [
    { name: 'Oil & Gas', icon: '⚡' },
    { name: 'Engineering', icon: '⚙️' },
    { name: 'Energy Tech', icon: '🔋' },
    { name: 'Consulting', icon: '💼' },
    { name: 'Digital', icon: '💻' }
  ];

  const metrics = [
    { number: '700+', label: 'Global Energy Experts', highlight: true },
    { number: '250+', label: 'Years of cumulative energy tech experience', highlight: false },
    { number: '20+', label: 'Fortune 500 energy companies', highlight: true },
    { number: '50+', label: 'Projects delivered in energy space', highlight: false }
  ];

  return (
    <section className="py-24 bg-scaleiq-black" data-testid="merged-credibility-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-6 py-2 bg-scaleiq-gold/10 border border-scaleiq-gold text-scaleiq-gold text-sm font-medium rounded-full mb-6">
            Expertise & Impact
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-scaleiq-white mb-6">
            Driven By Global Leaders in Energy and Infra Tech
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Founded and led by industry veterans in the energy technology space, the ScaleIQ team brings a long-term view on meaningfully transforming mission-critical environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT: Domain Expertise Tiles */}
          <div>
            <h3 className="text-2xl font-bold text-scaleiq-gold mb-8">Domain Expertise</h3>
            <div className="grid grid-cols-2 gap-4">
              {domains.map((domain, index) => (
                <div 
                  key={index}
                  className="p-6 bg-scaleiq-white/5 border border-scaleiq-gold/20 rounded-lg hover:border-scaleiq-gold hover:bg-scaleiq-white/10 transition-all"
                  data-testid={`domain-tile-${index}`}
                >
                  <div className="text-3xl mb-3">{domain.icon}</div>
                  <div className="text-scaleiq-white font-medium">{domain.name}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Large Numeric Impact */}
          <div>
            <h3 className="text-2xl font-bold text-scaleiq-gold mb-8">Impact at Scale</h3>
            <div className="space-y-6">
              {metrics.map((metric, index) => (
                <div 
                  key={index}
                  className="p-6 bg-scaleiq-white/5 border-l-4 border-scaleiq-gold rounded-lg hover:bg-scaleiq-white/10 transition-all"
                  data-testid={`metric-${index}`}
                >
                  <div className={`text-5xl font-bold mb-2 ${
                    metric.highlight ? 'text-scaleiq-gold' : 'text-scaleiq-white'
                  }`}>
                    {metric.number}
                  </div>
                  <div className="text-gray-300 text-sm">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};