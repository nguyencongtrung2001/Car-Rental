import React from "react";
import headcart from '../../assets/image.png'
const StatsSection = () => {
  const statsItems = [
    {
      id: 1,
      title: "Erat at semper",
      content:
        "Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum",
    },
    {
      id: 2,
      title: "Urna nec vivamus risus duis arcu",
      content:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper",
    },
    {
      id: 3,
      title: "Lobortis euismod imperdiet tempus",
      content:
        "Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi",
    },
    {
      id: 4,
      title: "Cras nulla aliquet nam eleifend amet et",
      content:
        "Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero",
    },
  ];

  return (
    <section className="stats-section">
      <div className="stats-section__container">
        <div className="stats-section__image">
          {/* Placeholder image; replace with actual image path */}
          <img
            className="stats-section__image-img"
            src={headcart}
            alt="Car rental illustration"
          />
        </div>
        <div className="stats-section__list">
          {statsItems.map((item) => (
            <div className="stats-section__item" key={item.id}>
              <div className="stats-section__item__number">{item.id}</div>
              <div className="stats-section__item__content">
                <h1>{item.title}</h1>
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;