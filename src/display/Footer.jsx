import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer id="footer" className="footer">
        <div className="container">
          <div className="copyright text-center ">
            <p>
              © <span>Copyright</span>{" "}
              <strong className="px-1 sitename">PhotoFolio</strong>{" "}
              <span>All Rights Reserved</span>
            </p>
          </div>
          <div className="social-links d-flex justify-content-center">
            <a href="">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </div>
        </div>
      </footer>

      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short"></i>
      </a>
      <footer className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <h5>Features</h5>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              iusto ex eligendi deleniti sequi velit beatae atque enim aliquid
              natus quae, vel voluptates sed quasi impedit ipsam aspernatur,
              expedita quos.
            </p>
            <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Cool stuff
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Random feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team feature
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Stuff for developers
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Another one
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Last time
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Resource name
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Another resource
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Final resource
                </a>
              </li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Team
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Locations
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Privacy
                </a>
              </li>
              <li className="mb-1">
                <a className="link-secondary text-decoration-none" href="#">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
