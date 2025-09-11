import React from "react";
import "../../css/home/connect.css";
import { IoCarSport } from "react-icons/io5";

const Connect = () => {
  return (
    <section className="connect">
      <div className="connect-container">
        <IoCarSport className="icon-car" />
        <div className="connect-content">
          <h1 className="connect-content__title">
            Enjoy every mile with adorable companionship.
          </h1>
          <p className="connect-content__desc">
            Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
            bibendum ullamcorper in. Diam tincidunt tincidunt erat
          </p>
          <div className="connect-search">
            <input type="text" className="search-input" />
            <button className="search-btn">Search</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
