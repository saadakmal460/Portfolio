import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid  my-navbar">
        <a class="navbar-brand" href="#">
          SAAD.
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNav">
          <ul class="navbar-nav ms-auto list-components">
            <li class="nav-item">
              <a class="nav-link  mx-2" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">
                Education
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">
                Skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mx-2" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
