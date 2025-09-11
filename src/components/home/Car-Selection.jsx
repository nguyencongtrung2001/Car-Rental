import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowRoundForward } from "react-icons/io";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump } from "react-icons/fa";
import { FaRegSnowflake } from "react-icons/fa";
import dataCar from "../../data/dataCar";
import "../../css/home/car-section.css";
const CarSelection = () => {
  const dataSpecs = [
    {
      id: 1,
      icon: <TbAutomaticGearbox />,
      name: "Automat",
    },
    {
      id: 2,
      icon: <FaGasPump />,
      name: "PB 95",
    },
    {
      id: 3,
      icon: <FaRegSnowflake />,
      name: "Air Conditioner",
    },
  ];

  return (
    <section className="car-section">
      <div className="car-container">
        {/* Phần tiêu đề */}
        <div className="car-selection__title">
          <h1 className="car-title">Choose the car that suits you</h1>
          <div className="car-selection-all">
            <p>View all</p>
            <IoMdArrowRoundForward />
          </div>
        </div>

        {/* Danh sách xe */}
        <div className="car-selection__list">
          {dataCar.slice(0, 6).map((car) => (
            <div className="car-card" key={car.id}>
              {/* Hình ảnh xe */}
              <div className="car-image">
                <img src={car.image} alt={car.name} />
              </div>

              {/* Nội dung xe */}
              <div className="car-content">
                <div className="car-header">
                  <div className="car-title-type">
                    <h3 className="car-name">{car.name}</h3>
                    <p className="car-type">{car.types}</p>
                  </div>
                  <div className="car-price">
                    <span className="price">${car.price}</span>
                    <span className="price-unit">per day</span>
                  </div>
                </div>

                {/* Thông số kỹ thuật */}
                <div className="car-specs">
                  {dataSpecs.map((specs) => (
                    <div className="spec-item" key={specs.id}>
                      <i className="icon-ac">{specs.icon}</i>
                      <span className="name-ac">{specs.name}</span>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="car-footer">
                  <Link to={`/car/${car.id}`}>
                    <button className="btn-view">View Details</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CarSelection;