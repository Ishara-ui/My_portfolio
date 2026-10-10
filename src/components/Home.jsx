import React from "react";
import { Link } from "react-router-dom";
import profileImage from "../assets/image.jpeg";

function Home() {
  return (
    <section className="home">

      {/* LEFT SIDE */}
      <div className="home-content">

        <p className="hello">HELLO, I'M</p>

        <h1>Ishara Pramodi</h1>

        <h2>BICT Undergraduate | Networking Enthusiast</h2>

        <p>
          I am interested in Computer Networking, Network Infrastructure,
          Network Security and modern networking technologies.
        </p>

        {/* BUTTONS */}
        <div className="home-buttons">

          <Link to="/projects" className="btn">
            View My Projects
          </Link>

          <Link to="/contact" className="btn second-btn">
            Contact Me
          </Link>

        </div>

        {/* SOCIAL LINKS */}
        <div className="social-links">

          <a
            href="https://www.linkedin.com/in/ishara-pramodi-518680362"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Ishara-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

      </div>


      {/* RIGHT SIDE - PHOTO */}
      <div className="home-photo">

        {/* YOUR PHOTO */}
        <img
          src={profileImage}
          alt="Ishara Pramodi"
        />

      </div>

    </section>
  );
}

export default Home;