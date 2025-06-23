import { useState } from "react";
import "./styles/components.scss";

const services = [
  {
    title: "Social Media & Digital Marketing",
    content:
      "We help businesses grow and connect with their target audience through strategic social media and digital marketing solutions. Our campaigns enhance brand visibility, drive engagement, and generate leads.",
  },
  {
    title: "Events Ticketing, Planning and Management",
    content: "Lorem ipsum dolor sit amet, consectur adipiscing elit.",
  },
  {
    title: "LED Screens Advertising",
    content: "Lorem ipsum dolor sit amet, consectur adipiscing elit.",
  },
];

const Service = () => {
  const [currentItem, setCurrentItem] = useState(0);
  return (
    <section>
      <div className="mt-4 d-flex justify-content-center align-items-center">
        <h1 className="text-secondary">Our Services</h1>
      </div>
      <div className="mt-4 image-container">
        <img src="/services.png" alt="Example" />

        <div className="text-overlay">
          <div className="left-section">
            <h4 className="text-primary">{services[currentItem].title}</h4>
            <p className="text-black">{services[currentItem].content}</p>
            <div className="mt-4 d-flex justify-content-start gap-3">
              {/*Left/prev button*/}
              <button
                className="btn text-primary"
                onClick={() =>
                  setCurrentItem(
                    (currentItem - 1 + services.length) % services.length
                  )
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 1-.5.5H2.707l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708.708L2.707 7.5H14.5a.5.5 0 0 1 .5.5z"
                  />
                </svg>
              </button>
              {/*Right/next button*/}
              <button
                className="btn text-primary"
                onClick={() =>
                  setCurrentItem((currentItem + 1) % services.length)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793L9.146 3.354a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="right-section">
            <button
              className="btn d-flex align-items-center gap-3"
              style={{ backgroundColor: "#ffc107", color: "#1b2025" }}
            >
              Advertise
              <span
                className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-dark"
                style={{ width: "31px", height: "31px" }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793L9.146 3.354a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-around" style={{ marginTop: -80 }}>
        {services.map((item, index) => (
          <div
            className="card text-white"
            key={index}
            style={{
              width: "18rem",
              margin: "1rem",
              backgroundColor: "#122454",
            }}
          >
            <div className="card-body">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text mt-4">{item.content}</p>
              <button className="btn text-secondary">
                <span
                  className="d-flex justify-content-center align-items-center rounded-circle border border-2 border-secondary"
                  style={{ width: "32px", height: "32px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                    style={{ transform: "scale(1.2)" }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793L9.146 3.354a.5.5 0 1 1 .708-.708l4.5 4.5a.5.5 0 0 1 0 .708l-4.5 4.5a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
