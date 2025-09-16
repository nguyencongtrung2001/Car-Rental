import React from 'react';
import { GrMapLocation } from "react-icons/gr";
import { TbWallet } from "react-icons/tb";
import { PiCarProfileLight } from "react-icons/pi";

const Feature = () => {
  const cardInfor = [
    {
      id: 1,
      icon: <GrMapLocation />,
      title: "Availability",
      infor: "Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis",
    },
    {
      id: 2,
      icon: <PiCarProfileLight />,
      title: "Comfort",
      infor: "Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis",
    },
    {
      id: 3,
      icon: <TbWallet />,
      title: "Saving",
      infor: "Pretium convallis id diam sed commodo vestibulum lobortis volutpat",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        {cardInfor.map((item) => (
          <div className="features__item" key={item.id}>
            <div className="features__item__icon">{item.icon}</div>
            <p className="features__item__text">{item.title}</p>
            <p className="features__item__description">{item.infor}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;