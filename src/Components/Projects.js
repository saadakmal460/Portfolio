import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
export default function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid project-div">
      <br />
      <br />
      <div className="container d-flex justify-content-center align-items-center">
        <h1 id="projects" className="first">
          My
        </h1>
        <h1 className="second">Projects</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-4 my-3">
            <div class="card" data-aos="fade-right">
              <img
                className="card-img-top image-height"
                src={require("../Assets/news matrix.jpg")}
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title">The News Matrix</h4>
                <p class="card-text">
                  Uniting Information and Insights. Immerse yourself in a matrix
                  of news categories.
                </p>
                <a
                  href="https://github.com/saadakmal460/The-News-Matrix"
                  class="btn talk-button"
                  target="_"
                >
                  Open in GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-3">
            <div class="card" data-aos="fade-right">
              <img
                className="card-img-top image-height"
                src={require("../Assets/Hms.jpg")}
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title">HMS</h4>
                <p class="card-text">
                  A managment software for hostels made with C# and
                  .NetFramework
                </p>
                <a
                  href="https://github.com/saadakmal460/HMS"
                  class="btn talk-button"
                  target="_"
                >
                  Open in GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-3">
            <div class="card" data-aos="fade-right">
              <img
                className="card-img-top image-height"
                src={require("../Assets/Screenshot 2023-08-16 225227.png")}
                alt="..."
              />
              <div class="card-body">
                <h4 class="card-title">Galactic Warzone</h4>
                <p class="card-text">
                  A 2d game made using Windows Form and a framework which was
                  made by using OOP concepts
                </p>
                <a
                  href="https://github.com/saadakmal460/Galactic-Warzone"
                  class="btn talk-button"
                  target="_"
                >
                  Open in GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
}
