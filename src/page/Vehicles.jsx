import React, { useState, Suspense } from "react";
import { Link } from "react-router-dom";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump, FaRegSnowflake, FaUsers } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import dataCar from "../data/dataCar";
import toyota from "../assets/brand/toyota.png";
import ford from "../assets/brand/ford.png";
import mercedes from "../assets/brand/mercedes.png";
import jeep from "../assets/brand/jeep.png";
import bmw from "../assets/brand/bmw.png";
import audi from "../assets/brand/audi.png";

// Lazy load Header and Footer components
const Header = React.lazy(() => import("../components/Header"));
const Footer = React.lazy(() => import("../components/Footer"));

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
    { name: "Toyota", logo: toyota },
    { name: "Ford", logo: ford },
    { name: "Mercedes", logo: mercedes },
    { name: "Jeep", logo: jeep },
    { name: "BMW", logo: bmw },
    { name: "Audi", logo: audi },
  ];

  return (
    <div className="vehicles-page">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>

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
              {/* Car Image with Lazy Loading */}
              <div className="vehicle-image">
                <img src={car.image} alt={car.name} loading="lazy" />
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
              <img src={brand.logo} alt={brand.name} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Vehicles;