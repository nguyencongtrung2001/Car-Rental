import React from "react";
import { useParams } from "react-router-dom";
import dataCar from "../../data/dataCar";
import { GiPathDistance } from "react-icons/gi";
import { TbAutomaticGearbox } from "react-icons/tb";
import { FaGasPump, FaRegSnowflake, FaSdCard } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CarSelection from "../home/Car-Selection";
const InforCar = () => {
  const { id } = useParams();
  const car = dataCar.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  const dataIcons = [
    {
      id: 1,
      icon: <TbAutomaticGearbox />,
      title: "Gear Box",
      name: car.specification.gearBox,
    },
    {
      id: 2,
      icon: <FaGasPump />,
      title: "Fuel",
      name: car.specification.fuel,
    },
    {
      id: 3,
      icon: <FaSdCard />,
      title: "Doors",
      name: car.specification.doors,
    },
    {
      id: 4,
      icon: <FaRegSnowflake />,
      title: "Air Conditioner",
      name: car.specification.airConditioner ? "Yes" : "No",
    },
    {
      id: 5,
      icon: <IoMdPerson />,
      title: "Seats",
      name: car.specification.seats,
    },
    {
      id: 6,
      icon: <GiPathDistance />,
      title: "Distance",
      name: car.specification.distance, // <-- FIX sai trước đó
    },
  ];

  return (
    <div className="car-detail">
      <Header />
      <section className="car">
        <div className="car-container">
          {/* ========== Ảnh + Gallery ========== */}
          <div className="car-detail__image">
            <div className="car-detail__title">
              <h1 className="car-detail__name">{car.name}</h1>
              <span className="car-detail__price">${car.price}</span>
              <span className="car-detail__unit">/ per day</span>
            </div>

            <div className="car-detail__img">
              <img src={car.image} alt={car.name} />
            </div>

            <div className="car-detail-list">
              <div className="car-gallery">
                {car.gallery.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${car.name} gallery ${index + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ========== Thông số kỹ thuật + Equipment ========== */}
          <div className="car-detail__specs">
            <h3>Technical Specification</h3>
            <div className="car-detail__spec-grid">
              {dataIcons.map((item) => (
                <div className="spec-card-item" key={item.id}>
                  <i className="icon-spec">{item.icon}</i>
                  <div className="spec-info">
                    <span className="spec-title">{item.title}</span>
                    <span className="spec-name">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
            <button className="car-rent-btn">Rent a car</button>
            <h3>Equipment</h3>
            <div className="car-detail__equipment">
              {car.equipment.map((item, index) => (
                <div className="car-detail__equipment-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CarSelection title="Other car"/>
      <Footer />
    </div>
  );
};

export default InforCar;
