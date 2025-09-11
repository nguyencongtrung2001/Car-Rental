import React from "react";
import "../../css/home/download.css";
import imgdownload from "../../assets/couplephone.avif";

const Download = () => {
  return (
    <section className="download-app">
      <div className="download-container">
        {/* Nội dung bên trái */}
        <div className="download-content">
          <h1 className="download-app__title">Download Mobile App</h1>
          <p className="download-app__desc">
            Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus
            turpis nibh placerat massa. Fermentum urna ut at et in. Turpis
            aliquet cras hendrerit enim condimentum. Condimentum interdum risus
            bibendum urna.
          </p>
          <div className="download-app__btn">
            <button
              className="btn-download app-store"
              aria-label="Download on the App Store"
            ></button>
            <button
              className="btn-download ch-play"
              aria-label="Download on Google Play"
            ></button>
          </div>
        </div>

        {/* Hình ảnh bên phải */}
        <div className="download-image">
          <img
            className="image-couplephone"
            src={imgdownload}
            alt="Couple using mobile app"
          />
        </div>
      </div>
    </section>
  );
};

export default Download;
