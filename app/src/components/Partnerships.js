import React from "react";

const Partnerships = () => {
  return (
    <section style={{ backgroundColor: "#c9d4f3" }}>
      <div className="mt-4 mb-4 d-flex justify-content-between">
        <div className="mt-4 mx-2 d-flex flex-column justify-content-start">
          <h4>Partnerships</h4>
          <p>Trusted by fast growing brands</p>
        </div>
        <div className="mt-4">
          <button className="btn d-flex align-items-center gap-2 custom-btn">
            <span>Partner with us today</span>
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
          </button>
        </div>
      </div>
      <div
        className="mx-4 d-flex justify-content-around"
        style={{ backgroundColor: "#122454" }}
      >
        <div className=" mt-4 d-flex flex-column">
          <img src="" alt="Brand X" />
          <p className="mt-4 text-white">Brand X</p>
        </div>
        <div className="mt-4 d-flex flex-column">
          <img src="" alt="Brand Y" />
          <p className="mt-4 text-white">Brand Y</p>
        </div>
        <div className="mt-4 d-flex flex-column">
          <img src="" alt="Brand Z" />
          <p className="mt-4 text-white">Brand Z</p>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
