import React from 'react';
import car from '../../assets/cart.png'
const Hero = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., API call or state update)
    console.log('Form submitted');
  };

  const selectType = ['Sedan', 'SUV', 'Luxury', 'Van'];

  return (
    <section className="hero">
      <div className="hero-container" >
        <div className='hero-image'>
          <img src={car} alt="car porche" />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">Experience the road like never before</h1>
          <p className='hero-status'>Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper</p>
          <button className="hero-button">View cars</button>
        </div>
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
            <label htmlFor="rental-date">Rental date</label>
            <input type="date" id="rental-date" name="rental-date" required />
          </div>
          <div className="form-field">
            <label htmlFor="return-date">Return date</label>
            <input type="date" id="return-date" name="return-date" required />
          </div>
          <button type="submit" className="book-now-btn">
            Book now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Hero;