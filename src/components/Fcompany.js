import React, { useEffect, useState } from 'react';
import '../styles/global.css';

const FeaturedCompanies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Simulate fetching from a database (you can replace this with a real API call later)
    const fetchCompanies = async () => {
      const demoData = [
        {
          id: 1,
          name: 'Phison Real Estates',
          image: '/images/img-phison.avif',
          description: 'Phison is a real estate company that brings you modern, spacious and luxurious houses to the market.',
        },
        {
          id: 2,
          name: 'XY Properties',
          image: '/images/img-xy.avif',
          description: 'Specializing in XY properties, we offer a curated selection of upscale homes and estates.',
        },
        {
          id: 3,
          name: 'ABC Real Estate',
          image: '/images/img-ABC.avif',
          description: 'ABC offers a wide range of residential and commercial properties, providing personalized service and reliable market expertise for all our clients.',
        },
        {
          id: 4,
          name: 'Hosea Real Estate',
          image: '/images/img-Hosea.avif',
          description: 'With over 10 years of experience, Hosea real estates connects clients with residential and commercial spaces in prime locations across Addis Ababa.',
        },
      ];

      // Simulate delay
      setTimeout(() => setCompanies(demoData), 500);
    };

    fetchCompanies();
  }, []);

  return (
    <div>
      {/* FEATURED COMPANIES */}
      <section className="container">
        <h2>Featured Companies</h2>
        <div className="featured-companies">
          {companies.map((company) => (
            <a key={company.id} href="/" className="companies-card-link">
              <div className="companies-card">
                <div>
                  <img src={company.image} className="companies-img" alt={company.name} />
                </div>
                <h3>{company.name}</h3>
                <p>{company.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedCompanies;
