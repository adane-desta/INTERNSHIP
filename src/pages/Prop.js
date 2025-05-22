import React, { useState } from 'react';
import '../styles/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faRulerCombined, faWheelchair, faPaw } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

const Home = () => {
  // For demo show until database is built
  const mockProperties = [
    {
      imageUrl: '/images/img-Austin.avif',
      title: 'Modern house in Austin',
      status: 'For Sale',
      price: 350000,
      type: 'House',
      address: '123 Greenview Dr, Austin, TX',
      features: ['3 Beds', '2 Baths', '1,200 sqft'],
    },
    {
      imageUrl: '/images/img-Seattle.avif',
      title: 'Downtown apartment',
      status: 'For Sale',
      price: 2200,
      type: 'Apartment',
      address: '456 Downtown Ave, Seattle, WA',
      features: ['2 Beds', '1 Bath', 'Wheelchair'],
    },
    {
      imageUrl: '/images/img-Denver.avif',
      title: 'Hillside home',
      status: 'For Sale',
      price: 475000,
      type: 'House',
      address: '789 Hillside Ln, Denver, CO',
      features: ['4 Beds', '3 Baths', 'Pet-Friendly'],
    },
  ];

  // Draft filters while user types
  const [filtersDraft, setFiltersDraft] = useState({
    query: '',
    price: 'Any',
    type: 'Any',
  });

  // Actual filters applied only when user clicks "Search"
  const [filters, setFilters] = useState(filtersDraft);

  const handleFilterChange = (e) => {
    setFiltersDraft({ ...filtersDraft, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    setFilters(filtersDraft); // Apply filters when button is clicked
  };

  const filteredProperties = mockProperties.filter((prop) => {
    const matchQuery =
      prop.address.toLowerCase().includes(filters.query.toLowerCase()) ||
      prop.title.toLowerCase().includes(filters.query.toLowerCase());

    const matchPrice =
      filters.price === 'Any' ||
      (filters.price === 'Under 1M ETB' && prop.price < 1000000) ||
      (filters.price === '1M ETB - 3M ETB' && prop.price >= 1000000 && prop.price <= 3000000) ||
      (filters.price === '3M ETB - 6M ETB' && prop.price > 3000000 && prop.price <= 6000000) ||
      (filters.price === '6M ETB - 9M ETB' && prop.price > 6000000 && prop.price <= 9000000) ||
      (filters.price === 'Over 10M ETB' && prop.price > 10000000);

    const matchType = filters.type === 'Any' || filters.type === prop.type;

    return matchQuery && matchPrice && matchType;
  });

  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="container hero-content">
          <h1>Find Your Dream Home</h1>
          <p>Search from thousands of verified listings with accessibility features.</p>

          <div className="search-box">
            <div className="search-row">
              <input
                type="text"
                name="query"
                placeholder="City, Neighborhood, or Real Estates ID"
                value={filtersDraft.query}
                onChange={handleFilterChange}
              />
              <select name="price" value={filtersDraft.price} onChange={handleFilterChange}>
                <option value="Any">Any Price</option>
                <option>Under 1M ETB</option>
                <option>1M ETB - 3M ETB</option>
                <option>3M ETB - 6M ETB</option>
                <option>6M ETB - 9M ETB</option>
                <option>Over 10M ETB</option>
              </select>
              <select name="type" value={filtersDraft.type} onChange={handleFilterChange}>
                <option value="Any">Any Type</option>
                <option>House</option>
                <option>Apartment</option>
                <option>Condo</option>
                <option>Accessible Housing</option>
              </select>
            </div>
            <button className="btn-primary search-btn" onClick={handleSearch}>
              Search Homes
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED LISTINGS */}
      <section className="listings">
        <div className="container">
          <div className="section-header">
            <h2>Featured Listings</h2>
          </div>

          <div className="property-grid">
            {filteredProperties.length === 0 ? (
              <p>No properties found. Try different filters.</p>
            ) : (
              filteredProperties.map((property, index) => (
                <div className="property-card" key={index}>
                  <div className="property-img">
                    <img src={property.imageUrl} alt={property.title} />
                    <span className="property-badge">{property.status}</span>
                  </div>
                  <div className="property-details">
                    <div className="property-price">
                      {property.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                    </div>
                    <div className="property-address">{property.address}</div>
                    <div className="property-features">
                      {property.features.map((f, i) => (
                        <span className="feature" key={i}>
                          {f.includes('Bed') && <FontAwesomeIcon icon={faBed} />}
                          {f.includes('Bath') && <FontAwesomeIcon icon={faBath} />}
                          {f.includes('sqft') && <FontAwesomeIcon icon={faRulerCombined} />}
                          {f.includes('Wheelchair') && <FontAwesomeIcon icon={faWheelchair} />}
                          {f.includes('Pet') && <FontAwesomeIcon icon={faPaw} />}
                          {' '}{f}
                        </span>
                      ))}
                    </div>
                    <div className="property-footer">
                      <button className="btn-outline">View Details</button>
                      <button className="favorite-btn" aria-label="Add to favorites">
                        <FontAwesomeIcon icon={farHeart} />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

{/* FEATURED COMPANIES */}
<section className="container">
        <h2>Featured Companies</h2>
        <div className="featured-companies">
          <a href="/" className="companies-card-link">
            <div className="companies-card">
              <div>
                <img src="/images/img-phison.avif" className="companies-img" alt="" />
              </div>
              <h3>Phison Real Estates</h3>
              <p>Phison is a real estate company that brings you modern, spacious and luxurious houses to the market.</p>
            </div>
          </a>

          <a href="/" className="companies-card-link">
            <div className="companies-card">
              <div>
                <img src="/images/img-xy.avif" className="companies-img" alt="" />
              </div>
              <h3>XY Properties</h3>
              <p>Specializing in XY properties, we offer a curated selection of upscale homes and estates.</p>
            </div>
          </a>

          <a href="/" className="companies-card-link">
            <div className="companies-card">
              <div>
                <img src="/images/img-ABC.avif" className="companies-img" alt="" />
              </div>
              <h3>ABC Real Estate</h3>
              <p>ABC offers a wide range of residential and commercial properties, providing personalized service and reliable market expertise for all our clients.</p>
            </div>
          </a>

          <a href="/" className="companies-card-link">
            <div className="companies-card">
              <div>
                <img src="/images/img-Hosea.avif" className="companies-img" alt="" />
              </div>
              <h3>Hosea Real Estate</h3>
              <p>With over 10 years of experience, Hosea real estates connects clients with residential and commercial spaces in prime locations across Addis Ababa.</p>
            </div>
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
