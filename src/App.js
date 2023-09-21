import { useState } from "react";

function App() {
  const images = [
    { url: "http://localhost:3000/img1.jpg", alt: "img1" },
    { url: "http://localhost:3000/img2.jpg", alt: "img2" },
    { url: "http://localhost:3000/img3.jpg", alt: "img3" },
    { url: "http://localhost:3000/img4.jpg", alt: "img4" },
  ];
  const [current, setCurrent] = useState(0);
  const nextImage = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };
  const preImage = () => {
    setCurrent(current === 0 ? images.length : current - 1);
  };
  return (
    <div className="container my-5">
      <div className="row text-center">
        <div className="col-6">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              {images.map(
                (value, index) =>
                  current === index && (
                    <div className="carousel-inner" key={index}>
                      <div className="carousel-item active" key={index}>
                        <img
                          className="d-block w-100"
                          src={value.url}
                          alt={value.alt}
                        />
                      </div>
                    </div>
                  )
              )}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
              onClick={preImage}
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
              onClick={nextImage}
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
