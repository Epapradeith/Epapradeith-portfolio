import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage('Your message has been sent! I will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 5000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
        
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          {/* Contact Information */}
          <div className="w-full md:w-2/5">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-blue-600 mr-4" />
                <p className="text-gray-700">+1-659-253-3628</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-blue-600 mr-4" />
                <a href="mailto:epaprodith0303@gmail.com" className="text-gray-700 hover:text-blue-600 transition duration-300">
                  epaprodith0303@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaLinkedin className="text-blue-600 mr-4" />
                <a 
                  href="http://www.linkedin.com/in/epapradeith-rachety-196243111" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center">
                <FaGithub className="text-blue-600 mr-4" />
                <a 
                  href="https://github.com/Epaprodith03" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-700 hover:text-blue-600 transition duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="w-full md:w-3/5">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
              {submitMessage && (
                <div className="mb-6 text-green-600 p-4 bg-green-50 rounded-lg">
                  {submitMessage}
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300 font-medium flex justify-center"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}