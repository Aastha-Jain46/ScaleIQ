import React, { useState } from 'react';
import { NewHeader } from './NewHeader';
import { NewFooter } from './NewFooter';
import { GoToTop } from './GoToTop';
import { Toaster } from './ui/sonner';
import axios from 'axios';
import { toast } from 'sonner';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    company: '',
    position: '',
    phone: '',
    project_type: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const backendUrl = process.env.REACT_APP_BACKEND_URL || import.meta.env.REACT_APP_BACKEND_URL;
      await axios.post(`${backendUrl}/api/contact`, formData);
      toast.success('Thank you for reaching out. We will be in touch soon.');
      setFormData({
        full_name: '',
        email: '',
        company: '',
        position: '',
        phone: '',
        project_type: '',
        budget: '',
        timeline: '',
        message: ''
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-scaleiq-white">
      <NewHeader />
      
      <div className="pt-32 pb-20">
        <section className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-sm text-gray-500 mb-4">Contact Us</div>
          <h1 className="text-5xl font-bold text-scaleiq-black mb-8">
            Start a Conversation
          </h1>
          <p className="text-xl text-gray-700 mb-12">
            For energy and infrastructure companies considering how to shape their digital transformation roadmap, we invite a thoughtful and confidential discussion.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-scaleiq-black mb-2">Full Name *</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                  data-testid="contact-full-name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-scaleiq-black mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                  data-testid="contact-email"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-scaleiq-black mb-2">Company *</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                  data-testid="contact-company"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-scaleiq-black mb-2">Position *</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                  data-testid="contact-position"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-scaleiq-black mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                  data-testid="contact-phone"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-scaleiq-black mb-2">Project Type *</label>
                <select
                  name="project_type"
                  value={formData.project_type}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                  data-testid="contact-project-type"
                >
                  <option value="">Select...</option>
                  <option value="Digital Engineering">Digital Engineering</option>
                  <option value="GCC Setup">GCC Setup</option>
                  <option value="Products">Products</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-scaleiq-black mb-2">Budget</label>
                <input
                  type="text"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                  data-testid="contact-budget"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-scaleiq-black mb-2">Timeline *</label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                  data-testid="contact-timeline"
                >
                  <option value="">Select...</option>
                  <option value="Immediate">Immediate</option>
                  <option value="1-3 months">1-3 months</option>
                  <option value="3-6 months">3-6 months</option>
                  <option value="6+ months">6+ months</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-scaleiq-black mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scaleiq-gold focus:border-transparent"
                data-testid="contact-message"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-4 bg-scaleiq-black text-scaleiq-white hover:bg-scaleiq-gold hover:text-scaleiq-black font-medium rounded-lg transition-all disabled:opacity-50"
              data-testid="contact-submit-btn"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </section>
      </div>

      <NewFooter />
      <GoToTop />
    </div>
  );
};