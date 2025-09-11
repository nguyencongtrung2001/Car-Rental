import React from "react";
import "../css/car/cardetail.css";
import Header from "../components/Header";
import InforCar from "../components/car/InforCar";

const CarDetail = () => {
  return (
    <div className="car-detail">
      <Header />
      <InforCar />
    </div>
  );
};

export default CarDetail;
