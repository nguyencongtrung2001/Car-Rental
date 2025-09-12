import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump, FaRegSnowflake, FaUsers } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import dataCar from "../data/dataCar";
import "../css/vehicles.css";

const Vehicles = () => {
  const [selectedCategory, setSelectedCategory] = useState("All vehicles");
  const [filteredCars, setFilteredCars] = useState(dataCar);

  const categories = [
    { name: "All vehicles", icon: <IoCarSport /> },
    { name: "Sedan", icon: <IoCarSport /> },
    { name: "Cabriolet", icon: <IoCarSport /> },
    { name: "Pickup", icon: <IoCarSport /> },
    { name: "Suv", icon: <IoCarSport /> },
    { name: "Minivan", icon: <IoCarSport /> },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (category === "All vehicles") {
      setFilteredCars(dataCar);
    } else {
      const filtered = dataCar.filter(
        (car) => car.types.toLowerCase() === category.toLowerCase()
      );
      setFilteredCars(filtered);
    }
  };

  const carBrands = [
    {
      name: "Toyota",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png",
    },
    {
      name: "Ford",
      logo: "https://logos-world.net/wp-content/uploads/2021/08/Ford-Logo.png",
    },
    {
      name: "Mercedes",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Mercedes-Logo.png",
    },
    {
      name: "Jeep",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Jeep-Logo.png",
    },
    {
      name: "BMW",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/BMW-Logo.png",
    },
    {
      name: "Audi",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Audi-Logo.png",
    },
  ];

  return (
    <div className="vehicles-page">
      <Header />

      {/* Header Section */}
      <section className="vehicles-header">
        <div className="vehicles-header-container">
          <h1>Select a vehicle group</h1>
          
          {/* Category Filter */}
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`category-btn ${
                  selectedCategory === category.name ? "active" : ""
                }`}
                onClick={() => handleCategoryChange(category.name)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="vehicles-grid">
        <div className="vehicles-container">
          {filteredCars.map((car) => (
            <div key={car.id} className="vehicle-card">
              {/* Car Image */}
              <div className="vehicle-image">
                <img src={car.image} alt={car.name} />
              </div>

              {/* Car Info */}
              <div className="vehicle-info">
                <div className="vehicle-header">
                  <h3 className="vehicle-name">{car.name}</h3>
                  <div className="vehicle-price">
                    <span className="price">${car.price}</span>
                    <span className="price-period">per day</span>
                  </div>
                </div>

                <p className="vehicle-type">{car.types}</p>

                {/* Specifications */}
                <div className="vehicle-specs">
                  <div className="spec-item">
                    <TbAutomaticGearbox />
                    <span>{car.specification.gearBox}</span>
                  </div>
                  <div className="spec-item">
                    <FaUsers />
                    <span>PB {car.specification.seats}</span>
                  </div>
                  <div className="spec-item">
                    <FaRegSnowflake />
                    <span>Air Conditioner</span>
                  </div>
                </div>

                {/* View Details Button */}
                <Link to={`/car/${car.id}`}>
                  <button className="view-details-btn">View Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="brands-section">
        <div className="brands-container">
          {carBrands.map((brand, index) => (
            <div key={index} className="brand-logo">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Contact Section */}
      <section className="vehicles-contact">
        <div className="contact-container">
          <div className="contact-info">
            <div className="contact-item">
              <h4>Address</h4>
              <p>Oxford Ave. Cary, NC 27511</p>
            </div>
            <div className="contact-item">
              <h4>Email</h4>
              <p>nwiger@yahoo.com</p>
            </div>
            <div className="contact-item">
              <h4>Phone</h4>
              <p>+537 547-6401</p>
            </div>
          </div>

          <div className="footer-sections">
            <div className="footer-section">
              <h4>Useful links</h4>
              <ul>
                <li>About us</li>
                <li>Contact us</li>
                <li>Gallery</li>
                <li>Blog</li>
                <li>F.A.Q</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Vehicles</h4>
              <ul>
                <li>Sedan</li>
                <li>Cabriolet</li>
                <li>Pickup</li>
                <li>Minivan</li>
                <li>SUV</li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Download App</h4>
              <div className="download-buttons">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_o-G9mMFogqWSeYzzRALpqqr8E-pvKn39w&s"
                  alt="Download on App Store"
                  className="download-btn"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                  alt="Get it on Google Play"
                  className="download-btn"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vehicles;