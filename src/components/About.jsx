import React from "react";
import profileImage from "../assets/image.jpeg";

function About() {
  return (
    <section className="about">

    

      


      <div className="about-content">

        <p className="section-title">ABOUT ME</p>

        <h1>About Me</h1>

        <p>
          I am a BICT undergraduate with a strong interest in
          Computer Networking and Network Technologies.
        </p>

        <p>
         
          I enjoy exploring core networking concepts including routing, switching, 
          VLAN configuration, IP addressing (IPv4/IPv6), subnetting, and foundational 
          network security protocols. I love troubleshooting network issues and building 
          secure, reliable communication systems.
        </p>


        <div className="about-info">

          <div>
            <h3>Education</h3>
            <p>BICT Undergraduate</p>
            <p>Faculty of Technology</p>
          </div>

          <div>
            <h3>Interests</h3>
            <p>Computer Networking</p>
            <p>Network Security</p>
          </div>

          <div>
            <h3>Career Goal</h3>
            <p>Networking / IT Professional</p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;