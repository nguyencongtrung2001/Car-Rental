import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoPlayCircle } from "react-icons/io5";
import { FaCar, FaUsers, FaCalendarAlt, FaRoute } from "react-icons/fa";
import "../css/about.css"

const About = () => {
  const stats = [
    {
      id: 1,
      icon: <FaCar />,
      number: "540+",
      label: "Cars",
    },
    {
      id: 2,
      icon: <FaUsers />,
      number: "20k+",
      label: "Happy Customers",
    },
    {
      id: 3,
      icon: <FaCalendarAlt />,
      number: "25+",
      label: "Years of experience",
    },
  ];

  const features = [
    {
      id: 1,
      title: "Variety Brands",
      description: "Choose from a wide selection of vehicles from top brands worldwide.",
      icon: "🚗",
    },
    {
      id: 2,
      title: "Awesome Support",
      description: "Our customer support is available 24/7 to help you with any issues.",
      icon: "🎧",
    },
    {
      id: 3,
      title: "Maximum Freedom",
      description: "Drive where you want, when you want with our flexible rental options.",
      icon: "🗝️",
    },
    {
      id: 4,
      title: "Flexibility On The Go",
      description: "Change your plans anytime with our flexible booking policies.",
      icon: "📱",
    },
  ];

  const memories = [
    {
      id: 1,
      text: "Enjoy every mile with adorable companionship",
    },
    {
      id: 2,
      text: "Create unforgettable moments on the road",
    },
    {
      id: 3,
      text: "Experience the freedom of exploration",
    },
    {
      id: 4,
      text: "Turn every journey into an adventure",
    },
  ];

  return (
    <div className="about-page">
      <Header />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-container">
          <div className="breadcrumb">
            <h1>About Us</h1>
            <p>Home / About Us</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="about-content">
        <div className="about-container">
          <div className="about-intro">
            <h2>Where every drive feels extraordinary</h2>
            <div className="intro-features">
              {features.map((feature) => (
                <div key={feature.id} className="feature-card">
                  <div className="feature-icon">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stats-container">
          {stats.map((stat) => (
            <div key={stat.id} className="stat-item">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3>{stat.number}</h3>
                <p>{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="about-gallery">
        <div className="about-container">
          <div className="gallery-content">
            <h2>Unlock unforgettable memories on the road</h2>
            <div className="memories-list">
              {memories.map((memory) => (
                <div key={memory.id} className="memory-item">
                  <div className="memory-dot"></div>
                  <span>{memory.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery-video">
            <div className="video-placeholder">
              <IoPlayCircle className="play-button" />
              <img
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop"
                alt="Car rental experience"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Download Section */}
      <section className="about-download">
        <div className="download-section">
          <div className="download-content">
            <div className="phone-mockup">
              <div className="phone-screen"></div>
            </div>
            <div className="download-info">
              <span className="download-label">Download our app</span>
              <h2>Download our app</h2>
              <p>
                Experience the convenience of booking your perfect car rental 
                right from your mobile device. Download our app for exclusive 
                deals and seamless booking experience.
              </p>
              <div className="download-buttons">
                <button className="app-store-btn">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_o-G9mMFogqWSeYzzRALpqqr8E-pvKn39w&s"
                    alt="Download on App Store"
                  />
                </button>
                <button className="play-store-btn">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt="Get it on Google Play"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="about-reviews">
        <div className="about-container">
          <h2>Reviews from our customers</h2>
          <div className="reviews-grid">
            <div className="review-card">
              <p>
                "Excellent service and quality vehicles. The booking process 
                was seamless and the customer support was outstanding."
              </p>
              <div className="reviewer">
                <div className="reviewer-avatar"></div>
                <div className="reviewer-info">
                  <h4>Emanuel Diante</h4>
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <p>
                "Great car rental experience. Wide selection of vehicles and 
                competitive prices. Highly recommend for anyone looking for 
                reliable transportation."
              </p>
              <div className="reviewer">
                <div className="reviewer-avatar"></div>
                <div className="reviewer-info">
                  <h4>Maria Gutierrez</h4>
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
            <div className="review-card">
              <p>
                "Amazing service! The car was clean, well-maintained, and the 
                rental process was quick and easy. Will definitely use again."
              </p>
              <div className="reviewer">
                <div className="reviewer-avatar"></div>
                <div className="reviewer-info">
                  <h4>Peter Johnson</h4>
                  <span>Verified Customer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="about-faq">
        <div className="about-container">
          <h2>Top Car Rental Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How does it work?</h3>
              <p>
                Browse our extensive fleet of vehicles, select your preferred car, 
                choose your rental dates, and complete the booking process online. 
                Pick up your vehicle at the designated location and enjoy your journey.
              </p>
            </div>
            <div className="faq-item">
              <h3>Can I rent a car without a credit card?</h3>
              <p>
                While a credit card is preferred for security purposes, we accept 
                debit cards and cash deposits in certain circumstances. Contact our 
                support team for alternative payment options.
              </p>
            </div>
            <div className="faq-item">
              <h3>What are the requirements for renting a car?</h3>
              <p>
                You must be at least 21 years old, have a valid driver's license, 
                and provide a major credit card. International customers need a 
                valid passport and international driving permit.
              </p>
            </div>
            <div className="faq-item">
              <h3>Does Car Rental allow me to drive with animals to the rental vehicle?</h3>
              <p>
                Yes, pets are allowed in our rental vehicles with prior notification 
                and a small additional cleaning fee. Please inform us during booking 
                if you plan to travel with pets.
              </p>
            </div>
            <div className="faq-item">
              <h3>Does Car Rental offer coverage protection for purchases with my rental?</h3>
              <p>
                We offer comprehensive insurance packages including collision damage 
                waiver, theft protection, and liability coverage. Additional coverage 
                options are available for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="about-cta">
        <div className="cta-container">
          <h2>Looking for a car?</h2>
          <p>+537 547-6401</p>
          <p>Contact us for the best deals and personalized service</p>
          <button className="cta-button">Contact Now</button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;