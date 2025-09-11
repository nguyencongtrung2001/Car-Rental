import React from "react";
import { useParams } from "react-router-dom";
import dataCar from "../../data/dataCar";
import "../../css/car/inforcar.css"
const InforCar = () => {
  const { id } = useParams();
  const car = dataCar.find((car) => car.id === parseInt(id));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <section className="car">
      <div className="car-container">
        <div className="car-detail__image">
          <div className="car-detail__title">
            <h1 className="car-detail__name">{car.name}</h1>
            <span className="car-detail__price">${car.price}</span>
            <span className="car-detail__unit">per day</span>
          </div>
          <div className="car-detail__img">
            <img src={car.image} alt={car.name} />
          </div>
          <div className="car-detail-list">
            <h3>Gallery</h3>
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
        <div className="car-detail__specs">
          <h3>Technical Specification</h3>
          <div className="car-detail__spec-item">
            <p><strong>Gearbox:</strong> {car.specification.gearBox}</p>
            <p><strong>Fuel:</strong> {car.specification.fuel}</p>
            <p><strong>Doors:</strong> {car.specification.doors}</p>
            <p><strong>Seats:</strong> {car.specification.seats}</p>
            <p><strong>Distance:</strong> {car.specification.distance} km</p>
            <p><strong>Air Conditioner:</strong> {car.specification.airConditioner ? "Yes" : "No"}</p>
          </div>
          <h3>Equipment</h3>
          <div className="car-detail__equipment">
            {car.equipment.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InforCar;