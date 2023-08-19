import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Contact() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container-fluid skill-div ">
      <br />
      <div className="container d-flex justify-content-center align-items-center">
        <h1 id="connect" className="first">
          Lets
        </h1>
        <h1 className="second">Connect</h1>
      </div>
      <div className="container d-flex justify-content-center align-items-center">
        <img
          src={require("../Assets/icons8-facebook-50 (1).png")}
          alt=""
          className="mx-2"
        />
        <a href="https://www.instagram.com/saad_akmal_10/" target="_">
          <img
            src={require("../Assets/icons8-instagram-50.png")}
            alt=""
            className="mx-2"
          />
        </a>
        <a href="https://www.linkedin.com/in/saad-akmal-9a0a6b26b/" target="_">
          <img
            src={require("../Assets/icons8-linkedin-50.png")}
            alt=""
            className="mx-2"
          />
        </a>
        <a href="https://github.com/saadakmal460" target="_">
          <img
            src={require("../Assets/icons8-github-50.png")}
            alt=""
            className="mx-2"
          />
        </a>
      </div>
    </div>
  );
}
