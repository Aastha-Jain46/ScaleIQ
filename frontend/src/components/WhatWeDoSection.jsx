import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const WhatWeDoSection = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      title: 'Digital Engineering Services',
      description: 'Delivering digital transformation that works in complex, asset-heavy energy environments - designed for reliability, scale, and real-world operations.',
      path: '/digital/app-dev'
    },
    {
      title: 'Products & Platforms',
      description: 'Suite of industry-leading products that support critical oil & gas sector workflows, analytics, and operational decision-making.',
      path: '/products/ogesone'
    },
    {
      title: 'GCC Setup & Operations',
      description: 'Designing and fulfilling GCC centers in India for oil & gas companies to strengthen technology staffing and delivery – not just reduce costs.',
      path: '/gcc-solutions'
    }
  ];

  return (
    <section className="py-20 bg-scaleiq-white" data-testid="what-we-do-section">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-scaleiq-black text-center mb-16">
          What We Do
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 border border-gray-200 rounded-lg hover:shadow-xl transition-all group cursor-pointer"
              onClick={() => navigate(service.path)}
              data-testid={`service-card-${index}`}
            >
              <h3 className="text-2xl font-bold text-scaleiq-black mb-4 group-hover:text-scaleiq-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <button className="inline-flex items-center gap-2 text-scaleiq-black group-hover:text-scaleiq-gold font-medium transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};