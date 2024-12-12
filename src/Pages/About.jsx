import React from "react";
import { Link } from "react-router-dom";
import Profil from "../assets/gallery/profile-img.jpg";
export default function About() {
  return (
    <div classNameName="container py-3">
      <main class="main">
        <div class="page-title" data-aos="fade">
          <div class="heading">
            <div class="container">
              <div class="row d-flex justify-content-center text-center">
                <div class="col-lg-8">
                  <h1>About</h1>
                  <p class="mb-0">
                    Odio et unde deleniti. Deserunt numquam exercitationem.
                    Officiis quo odio sint voluptas consequatur ut a odio
                    voluptatem. Sit dolorum debitis veritatis natus dolores.
                    Quasi ratione sint. Sit quaerat ipsum dolorem.
                  </p>
                  <a href="#" class="cta-btn">
                  <Link to="/contact">Available for Hire</Link>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <nav class="breadcrumbs">
            <div class="container">
              <ol>
                <li>
                  <a href="#"><Link to="/">Home</Link></a>
                </li>
                <li class="current">About</li>
              </ol>
            </div>
          </nav>
        </div>

        <section id="about" class="about section">
          <div class="container" data-aos="fade-up" data-aos-delay="100">
            <div class="row gy-4 justify-content-center">
              <div class="col-lg-4">
                <img src={Profil} class="img-fluid" alt="" />
                {/* <img src="assets/img/profile-img.jpg" class="img-fluid" alt=""> */}
              </div>
              <div class="col-lg-5 content">
                <h2>
                  UI/UX DesiProfessional Photographer from New Yorkgner &amp;
                  Web Developer.
                </h2>
                <p class="fst-italic py-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div class="row">
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Birthday:</strong> <span>1 May 1995</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Website:</strong> <span>www.example.com</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Phone:</strong> <span>+123 456 7890</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>City:</strong> <span>New York, USA</span>
                      </li>
                    </ul>
                  </div>
                  <div class="col-lg-6">
                    <ul>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Age:</strong> <span>30</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Degree:</strong> <span>Master</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Email:</strong> <span>email@example.com</span>
                      </li>
                      <li>
                        <i class="bi bi-chevron-right"></i>{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <p class="py-3">
                  Officiis eligendi itaque labore et dolorum mollitia officiis
                  optio vero. Quisquam sunt adipisci omnis et ut. Nulla
                  accusantium dolor incidunt officia tempore. Et eius omnis.
                  Cupiditate ut dicta maxime officiis quidem quia. Sed et
                  consectetur qui quia repellendus itaque neque. Aliquid amet
                  quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis
                  culpa magni laudantium dolores.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
