import React from "react";

import awsCert from "../assets/aws.jpg";
import aws2Cert from "../assets/AWS2.png";
import britishCert from "../assets/british.png";
import cEssentialCert from "../assets/c_essentiol.png";
import cIntroCert from "../assets/c_intro.png";
import packetRacerCert from "../assets/packetRacer.png";
import ecCert from "../assets/EC.png";
import cyberSecCert from "../assets/cybersecurity.png";

function Certificates() {
  return (
    <section className="page">
      <p className="section-title">MY ACHIEVEMENTS</p>
      <h1>Certificates</h1>

      <div className="certificate-container">

        {/* 1. AWS - Generative AI Foundations */}
        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={awsCert}
              alt="AWS Generative AI Foundations Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <h3>AWS Academy Graduate - Generative AI Foundations</h3>
          <p>AWS Academy (12 Hours Course)</p>

          <a
            href={awsCert}
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>


        {/* 2. AWS Student Builder */}
        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={aws2Cert}
              alt="AWS Student Builder Kickoff Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <h3>AWS Student Builder Kickoff: Cloud Concepts & Career Paths</h3>
          <p>AWS Student Builder Group, South Eastern University of Sri Lanka</p>

          <a
            href={aws2Cert}
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>


        {/* 3. British Council */}
        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={britishCert}
              alt="British Council Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <h3>English Language Learning (Elementary Level)</h3>
          <p>British Council Sri Lanka (30 Hours)</p>

          <a
            href={britishCert}
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>


        {/* 4. Cisco - C Essentials 1 */}
        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={cEssentialCert}
              alt="C Essentials 1 Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <h3>C Essentials 1</h3>
          <p>Cisco Networking Academy / South Eastern University of Sri Lanka</p>

          <a
            href={cEssentialCert}
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>


        {/* 5. Sololearn - Introduction to C */}
        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={cIntroCert}
              alt="Introduction to C Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <h3>Introduction to C</h3>
          <p>Sololearn (Issued: 13 May, 2025)</p>

          <a
            href={cIntroCert}
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>


        {/* 6. Cisco - Getting Started with Cisco Packet Tracer */}
        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={packetRacerCert}
              alt="Getting Started with Cisco Packet Tracer Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <h3>Getting Started with Cisco Packet Tracer</h3>
          <p>Cisco Networking Academy (Completed: 08 Aug 2026)</p>

          <a
            href={packetRacerCert}
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>


        {/* 7. EC-Council - CEH v13 First look Session */}
        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={ecCert}
              alt="EC-Council CEH v13 Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <h3>CEH v13 First look Session</h3>
          <p>EC-Council (1 CPE Credit | 08-05-2026)</p>

          <a
            href={ecCert}
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>

{/* 8. Cisco - Introduction to Cybersecurity */}
        <div className="certificate-card">
          <div className="certificate-image">
            <img
              src={cyberSecCert}
              alt="Introduction to Cybersecurity Certificate"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>

          <h3>Introduction to Cybersecurity</h3>
          <p>Cisco Networking Academy (Completed: 09 Oct 2026)</p>

          <a
            href={cyberSecCert}
            target="_blank"
            rel="noreferrer"
          >
            <button>View Certificate</button>
          </a>
        </div>

      </div>
        

    </section>
  );
}

export default Certificates;