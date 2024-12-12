import React from "react";
import { Link } from "react-router-dom";
import Image1 from "../assets/gallery/gallery-1.jpg";
import Image2 from "../assets/gallery/gallery-2.jpg";
import Image3 from "../assets/gallery/gallery-3.jpg";
import Image4 from "../assets/gallery/gallery-4.jpg";
import Image5 from "../assets/gallery/gallery-5.jpg";
import Image6 from "../assets/gallery/gallery-6.jpg";
import Image7 from "../assets/gallery/gallery-7.jpg";
import Image8 from "../assets/gallery/gallery-8-2.jpg";





export default function Home() {
  return (
    <>
      <main className="main">
        <section id="hero" className="hero section">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-6 text-center"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <h2>
                  <span>I'm </span>
                  <span className="underlight">Santatra Michado</span> a
                  Professional<span> Photographer from New York City</span>
                </h2>
                <p>
                  Blanditiis praesentium aliquam illum tempore incidunt debitis
                  dolorem magni est deserunt sed qui libero. Qui voluptas amet.
                </p>
                <a href="#" className="btn-get-started">
                  <Link to="/contact">Available for Hire</Link>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="gallery" className="gallery section">
          <div
            className="container-fluid"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row gy-4 justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={Image1} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-1.jpg"
                      title="Gallery 1"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={Image2} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-2.jpg"
                      title="Gallery 2"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={Image3} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-3.jpg"
                      title="Gallery 3"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={Image4} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-4.jpg"
                      title="Gallery 4"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={Image5} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-5.jpg"
                      title="Gallery 5"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={Image6} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-6.jpg"
                      title="Gallery 6"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={Image7} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-7.jpg"
                      title="Gallery 7"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6">
                <div className="gallery-item h-100">
                  <img src={Image8} className="img-fluid" alt="" />
                  <div className="gallery-links d-flex align-items-center justify-content-center">
                    <a
                      href="assets/img/gallery/gallery-8-2.jpg"
                      title="Gallery 8"
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-arrows-angle-expand"></i>
                    </a>
                    <a href="gallery-single.html" className="details-link">
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <div id="preloader">
    <div className="line"></div>
  </div> */}
    </>
  );
}
