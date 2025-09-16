import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoLocation, IoMail, IoCall, IoTime } from "react-icons/io5";
import toyota from "../assets/brand/toyota.png";
import ford from "../assets/brand/ford.png";
import mercedes from "../assets/brand/mercedes.png";
import jeep from "../assets/brand/jeep.png";
import bmw from "../assets/brand/bmw.png";
import audi from "../assets/brand/audi.png";
const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  const selectType = ["Sedan", "SUV", "Luxury", "Van"];

  const contactInfo = [
    {
      id: 1,
      icon: <IoLocation />,
      title: "Address",
      detail: "Oxford Ave. Cary, NC 27511",
    },
    {
      id: 2,
      icon: <IoMail />,
      title: "Email",
      detail: "nwiger@yahoo.com",
    },
    {
      id: 3,
      icon: <IoCall />,
      title: "Phone",
      detail: "+537 547-6401",
    },
    {
      id: 4,
      icon: <IoTime />,
      title: "Opening hours",
      detail: "Sun-Mon: 10am - 10pm",
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "How To Choose The Right Car",
      category: "News",
      date: "12April 2024",
      image:
        "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=400&h=250&fit=crop",
    },
    {
      id: 2,
      title: "Which plan is right for me?",
      category: "News",
      date: "12April 2024",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=250&fit=crop",
    },
    {
      id: 3,
      title: "Enjoy Speed, Choice & Total Control",
      category: "News",
      date: "12April 2024",
      image:
        "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=400&h=250&fit=crop",
    },
  ];

  const carBrands = [
    {
      name: "Toyota",
      logo: toyota,
    },
    {
      name: "Ford",
      logo: ford,
    },
    {
      name: "Mercedes",
      logo: mercedes,
    },
    {
      name: "Jeep",
      logo: jeep,
    },
    {
      name: "BMW",
      logo: bmw,
    },
    {
      name: "Audi",
      logo: audi,
    },
  ];

  return (
    <div className="contact-page">
      <Header />

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="breadcrumb-container">
          <h1>Contact Us</h1>
          <div className="breadcrumb-path">
            <span>Home</span>
            <span>/</span>
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="booking-hero-section">
        <div className="booking-hero-container">
          {/* Booking Form */}
          <div className="booking-form-section">
            <form className="booking-form" onSubmit={handleSubmit}>
              <h2>Book your car</h2>
              <div className="form-field">
                <select id="car-type" name="car-type" required>
                  <option value="">Car type</option>
                  {selectType.map((option) => (
                    <option key={option} value={option.toLowerCase()}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-field">
                <input
                  type="text"
                  id="rental-place"
                  name="rental-place"
                  placeholder="Place of rental"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="text"
                  id="return-place"
                  name="return-place"
                  placeholder="Place of return"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="date"
                  id="rental-date"
                  name="rental-date"
                  required
                />
              </div>
              <div className="form-field">
                <input
                  type="date"
                  id="return-date"
                  name="return-date"
                  required
                />
              </div>
              <button type="submit" className="book-now-btn">
                Book now
              </button>
            </form>
          </div>

          {/* Hero Image */}
          <div className="hero-image-section">
            <img
              src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=500&fit=crop"
              alt="Car rental background"
            />
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="contact-info-section">
        <div className="contact-info-container">
          {contactInfo.map((item) => (
            <div key={item.id} className="contact-info-card">
              <div className="contact-info-icon">{item.icon}</div>
              <div className="contact-info-content">
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="blog-container">
          <h2>Latest blog posts & news</h2>
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <h3>{post.title}</h3>
                  <div className="blog-meta">
                    <span>{post.category}</span>
                    <span>/</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="brands-section">
        <div className="brands-container">
          {carBrands.map((brand, index) => (
            <div key={index} className="brand-logo">
              <img src={brand.logo} alt={brand.name} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
