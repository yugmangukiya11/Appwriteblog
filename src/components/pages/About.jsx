import React from 'react';
import Container from '../container/Container';

function About() {
  return (
    <div className="w-full py-12 bg-gray-50">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-700 text-lg md:text-xl mb-6 leading-relaxed">
          Welcome to our blog platform! We are dedicated to sharing knowledge, tutorials, and insights with the community.
          Our mission is to provide quality content for developers, enthusiasts, and learners around the globe.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-8 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=800&q=80"
              alt="About us"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>

          {/* More Info */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700 mb-4">
              We aim to create a platform where knowledge is easily accessible and sharing experiences helps everyone grow.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Community-focused content</li>
              <li>High-quality tutorials</li>
              <li>Inclusive and welcoming environment</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
