import React from "react";

export default function Body() {
  return (
    <div className="container-fluid my-section">
      <div className="row info mx-auto">
        <div className="col-md-6">
          <div className="container">
            <h1 className="main-name mx-auto">Hi,I'm Saad Akmal</h1>
            <h3 className="main-name2 mx-auto ">Front-End Developer</h3>
            <br />
            <p className="animate__animated animate__fadeInLeft">
              I'm a passionate front-end web developer and a dedicated student
              at UET Lahore. I blend creativity with coding skills to craft
              visually pleasing and user-centric websites. Let's connect design
              and technology to make the web an exciting place.
            </p>
            <button className="btn talk-button">Lets Talk</button>
          </div>
        </div>
        <div className="col-md-6 pic-div">
          <img
            className="profile-pic"
            src={require("../Assets/[removal.ai]_64d9b3d9-3e3d-4922-8ff8-cfc425f856f8-whatsapp-image-2023-08-03-at-8-00-05-pm-1.png")}
            alt=""
          />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
