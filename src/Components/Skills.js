import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Skills() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid skill-div ">
      <br />

      <div className="container d-flex justify-content-center align-items-center">
        <h1 id="skills" className="first">
          My
        </h1>
        <h1 className="second">Skills</h1>
      </div>
      <br />
      <br />

      <div className="container">
        <div className="row">
          <div className="col-md-6 my-3">
            <div class="card2" data-aos="fade-right">
              <h4 className="skill-name">HTML</h4>
              <div className="container">
                <ProgressBar
                  completed={80}
                  className="wrapper mb-2"
                  barContainerClassName="container2"
                  completedClassName="barCompleted2"
                  labelClassName="label"
                />
              </div>
              <h4 className="skill-name">CSS</h4>
              <div className="container">
                <ProgressBar
                  completed={80}
                  className="wrapper mb-2"
                  barContainerClassName="container2"
                  completedClassName="barCompleted2"
                  labelClassName="label"
                />
              </div>
              <h4 className="skill-name">Javascript</h4>
              <div className="container">
                <ProgressBar
                  completed={70}
                  className="wrapper mb-2"
                  barContainerClassName="container2"
                  completedClassName="barCompleted3"
                  labelClassName="label"
                />
              </div>
              <h4 className="skill-name">React.Js</h4>
              <div className="container">
                <ProgressBar
                  completed={60}
                  className="wrapper mb-2"
                  barContainerClassName="container2"
                  completedClassName="barCompleted4"
                  labelClassName="label"
                />
              </div>
              <br />
              <br />
            </div>
          </div>

          <div className="col-md-6 my-3">
            <div class="card2" data-aos="fade-right">
              <h4 className="skill-name">C++</h4>
              <div className="container">
                <ProgressBar
                  completed={70}
                  className="wrapper mb-2"
                  barContainerClassName="container2"
                  completedClassName="barCompleted3"
                  labelClassName="label"
                />
              </div>
              <h4 className="skill-name">C#</h4>
              <div className="container">
                <ProgressBar
                  completed={70}
                  className="wrapper mb-2"
                  barContainerClassName="container2"
                  completedClassName="barCompleted3"
                  labelClassName="label"
                />
              </div>
              <h4 className="skill-name">Problem Solving</h4>
              <div className="container">
                <ProgressBar
                  completed={60}
                  className="wrapper mb-2"
                  barContainerClassName="container2"
                  completedClassName="barCompleted4"
                  labelClassName="label"
                />
              </div>
              <h4 className="skill-name">Communication Skills</h4>
              <div className="container">
                <ProgressBar
                  completed={60}
                  className="wrapper mb-2"
                  barContainerClassName="container2"
                  completedClassName="barCompleted4"
                  labelClassName="label"
                />
              </div>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
