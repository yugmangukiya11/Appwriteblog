import React, { useState } from 'react';
import Container from '../container/Container';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="w-full py-12 bg-gray-50">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <p className="text-gray-700 text-lg mb-8">
          Have a question or feedback? Reach out to us using the form or the contact information below.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* ---------- Form ---------- */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>

          {/* ---------- Contact Info ---------- */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-600 text-xl" />
              <span className="text-gray-700 font-medium">123 Street Name, City, Country</span>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-600 text-xl" />
              <span className="text-gray-700 font-medium">contact@example.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-600 text-xl" />
              <span className="text-gray-700 font-medium">+91 98765 43210</span>
            </div>

            {/* Optional: Map or additional info */}
            <div className="mt-6">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps?q=Surat,+Gujarat,+India&output=embed"
                className="w-full h-48 rounded-lg border-0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
