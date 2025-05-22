import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/global.css'; 
import '../styles/listings.css'; // Optional new CSS

const CompanyListings = () => {
  const { companyId } = useParams();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    // Updated mock data with features & images
    const demoListings = {
      1: [
        {
          id: 101,
          title: '3 Bed Luxury Apartment',
          price: '3M ETB',
          images: ['/images/apt1.avif', '/images/apt1-2.avif'],
          features: {
            bedrooms: 3,
            bathrooms: 2,
            location: 'Bole, Addis Ababa',
            size: '120 sqm',
          },
        },
        {
          id: 102,
          title: 'Villa with Garden',
          price: '5.5M ETB',
          images: ['/images/villa1.avif', '/images/villa1-2.avif'],
          features: {
            bedrooms: 4,
            bathrooms: 3,
            location: 'CMC, Addis Ababa',
            size: '300 sqm',
          },
        },
      ],
      // more companies...
    };

    setListings(demoListings[companyId] || []);
  }, [companyId]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2 className="page-title">Listings from Company #{companyId}</h2>
        <div className="listings-grid">
          {listings.map((listing) => (
            <div key={listing.id} className="listing-card">
              <div className="image-gallery">
                {listing.images.map((img, index) => (
                  <img key={index} src={img} alt={`Listing ${listing.id} - ${index}`} className="gallery-img" />
                ))}
              </div>
              <h3>{listing.title}</h3>
              <p className="price">{listing.price}</p>
              <ul className="features">
                <li><strong>Location:</strong> {listing.features.location}</li>
                <li><strong>Size:</strong> {listing.features.size}</li>
                <li><strong>Bedrooms:</strong> {listing.features.bedrooms}</li>
                <li><strong>Bathrooms:</strong> {listing.features.bathrooms}</li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CompanyListings;
