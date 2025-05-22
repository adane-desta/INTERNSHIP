import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Importing the Footer component
import '../styles/global.css'; // You can split styling later if needed
import '../styles/companies.css'; // Optional: create a new CSS file for companies page


const Companies = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Simulated fetch from backend or database
    const fetchCompanies = async () => {
      const demoCompanies = [
        {
          id: 1,
          name: 'Phison Real Estates',
          image: '/images/img-phison.avif',
          description:
            'Phison is a real estate company that brings you modern, spacious and luxurious houses to the market.',
        },
        {
          id: 2,
          name: 'XY Properties',
          image: '/images/img-xy.avif',
          description:
            'Specializing in XY properties, we offer a curated selection of upscale homes and estates.',
        },
        {
          id: 3,
          name: 'ABC Real Estate',
          image: '/images/img-ABC.avif',
          description:
            'ABC offers a wide range of residential and commercial properties with personalized service.',
        },
        {
          id: 4,
          name: 'Hosea Real Estate',
          image: '/images/img-Hosea.avif',
          description:
            'With over 10 years of experience, Hosea connects clients with prime properties across Addis Ababa.',
        },


        {
            id: 1,
            name: 'Phison Real Estates',
            image: '/images/img-phison.avif',
            description:
              'Phison is a real estate company that brings you modern, spacious and luxurious houses to the market.',
          },
          {
            id: 2,
            name: 'XY Properties',
            image: '/images/img-xy.avif',
            description:
              'Specializing in XY properties, we offer a curated selection of upscale homes and estates.',
          },



          {
            id: 1,
            name: 'Phison Real Estates',
            image: '/images/img-phison.avif',
            description:
              'Phison is a real estate company that brings you modern, spacious and luxurious houses to the market.',
          },
          {
            id: 2,
            name: 'XY Properties',
            image: '/images/img-xy.avif',
            description:
              'Specializing in XY properties, we offer a curated selection of upscale homes and estates.',
          },



          {
            id: 1,
            name: 'Phison Real Estates',
            image: '/images/img-phison.avif',
            description:
              'Phison is a real estate company that brings you modern, spacious and luxurious houses to the market.',
          },
          {
            id: 2,
            name: 'XY Properties',
            image: '/images/img-xy.avif',
            description:
              'Specializing in XY properties, we offer a curated selection of upscale homes and estates.',
          },



          {
            id: 1,
            name: 'Phison Real Estates',
            image: '/images/img-phison.avif',
            description:
              'Phison is a real estate company that brings you modern, spacious and luxurious houses to the market.',
          },
          {
            id: 2,
            name: 'XY Properties',
            image: '/images/img-xy.avif',
            description:
              'Specializing in XY properties, we offer a curated selection of upscale homes and estates.',
          },


      ];

      setTimeout(() => setCompanies(demoCompanies), 500); // Simulate API delay
    };

    fetchCompanies();
  }, []);

  return (
    <div>
        <Navbar /> {/* Include Navbar component */}
    <div className="companies-page container">
      <h2 className="page-title">Registered Companies</h2>
      <div className="companies-list">
        {companies.map((company) => (
          <div key={company.id} className="companies-card">
            <img
              src={company.image}
              alt={company.name}
              className="companies-img"
            />
            <div className="companies-info">
              <h3>{company.name}</h3>
              <p>{company.description}</p>
              {/* Future: Link to company profile or their listings */}
              <button className="btn-outline btn-primary">View Listings</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer /> {/* Include Footer component */}
    </div>
  );
};

export default Companies;
