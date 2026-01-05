import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export const NewHeader = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  const navigation = [
    {
      name: 'About',
      items: [
        { name: 'Overview', path: '/about/overview' },
        { name: 'The ScaleIQ Model', path: '/about/model' },
        { name: 'Leadership', path: '/about/leadership' },
        { name: 'Investors', path: '/about/investors' },
        { name: 'Partners & Growth', path: '/about/partners' },
      ]
    },
    {
      name: 'Whom We Serve',
      items: [
        { name: 'Oil & Gas Companies', path: '/serve/oil-gas' },
        { name: 'Energy Companies', path: '/serve/energy' },
        { name: 'Renewables & Utilities', path: '/serve/renewables' },
        { name: 'Energy ISVs', path: '/serve/isvs' },
        { name: 'Oil Service Companies', path: '/serve/oil-service' },
      ]
    },
    {
      name: 'Digital Engineering',
      items: [
        { name: 'Application Development & Management', path: '/digital/app-dev' },
        { name: 'AI Enablement', path: '/digital/ai' },
        { name: 'Product Engineering', path: '/digital/product' },
        { name: 'Professional Services', path: '/digital/professional' },
        { name: 'Technical Consulting', path: '/digital/consulting' },
        { name: 'Staff Augmentation', path: '/digital/staff' },
      ]
    },
    {
      name: 'Products',
      items: [
        { name: 'OgesOne', path: '/products/ogesone' },
        { name: 'Product 2', path: '/products/product2' },
        { name: 'Product 3', path: '/products/product3' },
      ]
    },
    { name: 'GCC Solutions', path: '/gcc-solutions' },
    {
      name: 'News & Insights',
      items: [
        { name: 'News', path: '/news' },
        { name: 'ScaleIQ Insight', path: '/insights' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'Events', path: '/events' },
      ]
    },
    { name: 'Join Us', path: '/join' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (item) => {
    if (item.path) {
      navigate(item.path);
      setOpenDropdown(null);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-scaleiq-white border-b border-gray-200" data-testid="main-header">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3" data-testid="logo-link">
            <div className="text-2xl font-bold text-scaleiq-black">
              Scale<span className="text-scaleiq-gold">IQ</span>
            </div>
          </Link>

          {/* Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.items && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.items ? (
                  <>
                    <button
                      className="px-4 py-2 text-sm font-medium text-scaleiq-black hover:text-scaleiq-gold transition-colors flex items-center gap-1"
                      data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-0 w-64 bg-scaleiq-white shadow-lg border border-gray-200 rounded-md py-2">
                        {item.items.map((subItem) => (
                          <button
                            key={subItem.name}
                            onClick={() => handleNavClick(subItem)}
                            className="block w-full text-left px-4 py-2 text-sm text-scaleiq-black hover:bg-gray-50 hover:text-scaleiq-gold transition-colors"
                            data-testid={`subnav-${subItem.name.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            {subItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(item)}
                    className="px-4 py-2 text-sm font-medium text-scaleiq-black hover:text-scaleiq-gold transition-colors"
                    data-testid={`nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};