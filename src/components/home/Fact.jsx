import React from "react";
import { FaCarRear } from "react-icons/fa6";
import { BsPeople } from "react-icons/bs";
import { IoSpeedometerOutline } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
// import pocher from '../assets/porcherngang.png'
import "../../css/home/fact.css";

const Fact = () => {
  const dataFact = [
    {
      id: 1,
      icon: <FaCarRear className="item__icon" />,
      number: "540+",
      label: "Cars",
    },
    {
      id: 2,
      icon: <BsPeople className="item__icon" />,
      number: "20k+",
      label: "Customer",
    },
    {
      id: 3,
      icon: <SlCalender className="item__icon" />,
      number: "25+",
      label: "Years",
    },
    {
      id: 4,
      icon: <IoSpeedometerOutline className="item__icon" />,
      number: "20m+",
      label: "Miles",
    },
  ];

  return (
    <section className="facts-section">
      <div className="facts-container">
        {/* Tiêu đề */}
        <h1 className="fact-title">Facts in Numbers</h1>
        <h5 className="fact-description">
          Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
          bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper
          fermentum.
        </h5>

        {/* Danh sách fact */}
        <div className="facts-section__list">
          {dataFact.map((item) => (
            <div className="fact-list-item" key={item.id}>
              {item.icon}
              <div className="item-element">
                <span className="item__numbers">{item.number}</span>
                <span className="item__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fact;
