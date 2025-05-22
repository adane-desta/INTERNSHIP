import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'; // for regular heart icon
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'; // Importing the Footer component

const Properties = () => {
  const [properties, setProperties] = useState([]);

  // Simulate data fetching
  useEffect(() => {
    
    const mockData = [
      {
        imageUrl: '/images/img-Austin.avif',
        title: 'Modern house in Austin',
        status: 'For Sale',
        price: '$350,000',
        address: '123 Greenview Dr, Austin, TX',
      },
      {
        imageUrl: '/images/img-Seattle.avif',
        title: 'Downtown apartment',
        status: 'For Sale',
        price: '$2,200/mo',
        address: '456 Downtown Ave, Seattle, WA',
      },
      {
        imageUrl: '/images/img-Denver.avif',
        title: 'Hillside home',
        status: 'For Sale',
        price: '$475,000',
        address: '789 Hillside Ln, Denver, CO',
      },

      {
        imageUrl: '/images/img-Austin.avif',
        title: 'Modern house in Austin',
        status: 'For Sale',
        price: '$350,000',
        address: '123 Greenview Dr, Austin, TX',
      },
      {
        imageUrl: '/images/img-Seattle.avif',
        title: 'Downtown apartment',
        status: 'For Sale',
        price: '$2,200/mo',
        address: '456 Downtown Ave, Seattle, WA',
      },
      {
        imageUrl: '/images/img-Denver.avif',
        title: 'Hillside home',
        status: 'For Sale',
        price: '$475,000',
        address: '789 Hillside Ln, Denver, CO',
      },

      {
        imageUrl: '/images/img-Austin.avif',
        title: 'Modern house in Austin',
        status: 'For Sale',
        price: '$350,000',
        address: '123 Greenview Dr, Austin, TX',
      },
      {
        imageUrl: '/images/img-Seattle.avif',
        title: 'Downtown apartment',
        status: 'For Sale',
        price: '$2,200/mo',
        address: '456 Downtown Ave, Seattle, WA',
      },
      {
        imageUrl: '/images/img-Denver.avif',
        title: 'Hillside home',
        status: 'For Sale',
        price: '$475,000',
        address: '789 Hillside Ln, Denver, CO',
      },

      {
        imageUrl: '/images/img-Austin.avif',
        title: 'Modern house in Austin',
        status: 'For Sale',
        price: '$350,000',
        address: '123 Greenview Dr, Austin, TX',
      },
      {
        imageUrl: '/images/img-Seattle.avif',
        title: 'Downtown apartment',
        status: 'For Sale',
        price: '$2,200/mo',
        address: '456 Downtown Ave, Seattle, WA',
      },
      {
        imageUrl: '/images/img-Denver.avif',
        title: 'Hillside home',
        status: 'For Sale',
        price: '$475,000',
        address: '789 Hillside Ln, Denver, CO',
      },
    ];

    // Simulate a fetch delay
    setTimeout(() => {
      setProperties(mockData);
    }, 500); // 0.5 second delay to mimic loading
  }, []);

  return (
    <div>
    <Navbar />
    <section className="listings">
      <div className="container">
        <div className="section-header">
          <h2>Available Properties</h2>
        </div>

        <div className="propertyList-grid">
          {properties.map((property, index) => (
            <div className="property-card" key={index}>
              <div className="property-img">
                <img src={property.imageUrl} alt={property.title} />
                <span className="property-badge">{property.status}</span>
              </div>
              <div className="property-details">
                <div className="property-price">{property.price}</div>
                <div className="property-address">{property.address}</div>
                <div className="property-footer">
                <Link to={`/properties/${index}`} className="btn-outline btn-primary">
  View Details
</Link>

                  <button className="favorite-btn" aria-label="Add to favorites">
                     <FontAwesomeIcon icon={farHeart} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default Properties;
