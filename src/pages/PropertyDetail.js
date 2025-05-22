// src/pages/PropertyDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/propertyDetail.css';

const PropertyDetail = () => {
  const { id } = useParams();

  // Mock data (ensure all properties have imageUrls array and consistent structure)
  const mockData = [
    {
      imageUrls: [
        '/images/img-Austin.avif',
        '/images/img-Seattle.avif', // Verify this path
        '/images/img-Austin.avif', // Verify this path
        '/images/img-Seattle.avif', // Verify this path
      ],
      title: 'Modern house in Austin',
      status: 'For Sale',
      price: '$350,000',
      address: '123 Greenview Dr, Austin, TX',
      description: 'Spacious modern home with open layout and natural light.',
      seller: {
        name: 'Austin Realty',
        phone: '09XX XXX XXX',
        memberSince: 'Jan 2023',
      },
      delivery: 'Viewing by appointment',
      condition: 'Used for 5yrs',
      area: "400m2",
    },
    {
  
      imageUrls: ['/images/img-Seattle.avif'],
      title: 'Downtown apartment',
      status: 'For Sale',
      price: '$2,200/mo',
      address: '456 Downtown Ave, Seattle, WA',
      description: 'Convenient downtown living with great city views.',
      seller: {
        name: 'Seattle Brokers',
        phone: '09XX XXX XXX',
        memberSince: 'Feb 2023',
      },
      condition: 'Used for 10yrs, built in 2006 E.C',
      area: "400m2",
    },
    {
     
      imageUrls: ['/images/img-Denver.avif', '/images/img-Denver-view.avif'], // Verify these paths
      title: 'Hillside home',
      status: 'For Sale',
      price: '$475,000',
      address: '789 Hillside Ln, Denver, CO',
      description: 'Peaceful home nestled in the hills with a large garden.',
      seller: {
        name: 'Denver Estates',
        phone: '09XX XXX XXX',
        memberSince: 'Mar 2023',
      },
      condition: 'New, built in this year',
      area: '350m2',
    },
  ];

  // Find the property by ID (index from URL)
  // Use parseInt(id) to ensure it's treated as a number for array access
  const property = mockData[parseInt(id)];

  // State to keep track of the current image index
  // Initialize with 0. This state will be managed by the component.
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Effect to reset image index when the property changes.
  // This is crucial when navigating between different property detail pages.
  useEffect(() => {
    // Only reset if the property was found
    if (property) {
      console.log(`Navigated to property ID: ${id}. Resetting image index to 0.`);
      setCurrentImageIndex(0);
    } else {
       console.log(`Property with ID ${id} not found.`);
    }
    // The dependency array ensures this effect runs only when the 'property' object changes.
    // React correctly handles object changes based on reference.
  }, [property, id]); // Added id to dependency array for completeness

  // Functions to navigate through images
  const goToPreviousImage = () => {
    console.log('Previous button clicked');
    setCurrentImageIndex(prevIndex => {
       const newIndex = prevIndex === 0 ? property.imageUrls.length - 1 : prevIndex - 1;
       console.log(`Moving from index ${prevIndex} to previous index: ${newIndex}`);
       console.log(`Attempting to load image: ${property.imageUrls[newIndex]}`); // Log the image path
       return newIndex;
    });
  };

  const goToNextImage = () => {
     console.log('Next button clicked');
    setCurrentImageIndex(prevIndex => {
       const newIndex = prevIndex === property.imageUrls.length - 1 ? 0 : prevIndex + 1;
       console.log(`Moving from index ${prevIndex} to next index: ${newIndex}`);
       console.log(`Attempting to load image: ${property.imageUrls[newIndex]}`); // Log the image path
       return newIndex;
    });
  };

  // Determine if navigation buttons should be shown
  // Use optional chaining (?.) for safer access
  const showNavigation = property?.imageUrls && property.imageUrls.length > 1;

  // Log the current image source whenever the currentImageIndex changes
  useEffect(() => {
    if (property && property.imageUrls && property.imageUrls.length > 0) {
        console.log(`Current image source path: ${property.imageUrls[currentImageIndex]}`);
    }
  }, [currentImageIndex, property]);


  // --- Error Handling ---
  if (!property) {
    return (
      <div>
        <Navbar />
        <section className="listings">
          <div className="container">
            <h2>Property Not Found</h2>
            <p>No property exists with ID: {id}</p>
            <Link to="/properties" className="btn btn-outline">Back to Listings</Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }


  return (
    <div>
      <Navbar />
      <section className="listings">
        <div className="container">
          <div className="section-header">
            <h2>{property.title}</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '20px auto' }}>
            <div className="property-card">


              <div className="property-image-container">
    
                {property.imageUrls && property.imageUrls.length > 0 ? (

                  <> 
                    <img
                      src={property.imageUrls[currentImageIndex]} // Display the image at the current index
                      alt={`${property.title} - ${currentImageIndex + 1}`}
                      className="property-main-image"
                    />
                    

                    {showNavigation && (
                       <div className="image-navigation"> 
                         <button onClick={goToPreviousImage}>
                           Previous
                         </button>
                       
                         <button onClick={goToNextImage}>
                           Next
                         </button>
                       </div>
                    )}
                  </>


                ) : (
                  <p>No images available for this property.</p>
                )}
                <span className="property-badge">{property.status}</span>
              </div>


              <div className="property-details">
                <div className="property-price">{property.price}</div>
                <div className="property-address">{property.address}</div>
                <div className ="property-surface-area">{property.area}</div>
               
                {property.condition && (
                  <div className="property-condition">{property.condition}</div>
                )}
                <div className="property-description">
                  <p>{property.description}</p>
                </div>

                {/* Conditionally render seller info if it exists */}
                {property.seller && (
                  <div className="seller-info-section">
                    <h3>Seller Information</h3>
                    <p><strong>Name:</strong> {property.seller.name}</p>
                    <p><strong>Phone:</strong> {property.seller.phone}</p>
                    <p><strong>Member Since:</strong> {property.seller.memberSince}</p>
                  </div>
                )}



                <div className="property-footer" style={{ marginTop: '20px' }}>
                  {/* Using the correct path to the properties listing page */}
                  <Link to="/properties" className="btn btn-outline">
                    Back to Listings
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PropertyDetail;