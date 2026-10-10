import React from "react";

function Contact() {
  return (
    <section className="contact page">
      <p className="section-title">GET IN TOUCH</p>
      <h1>Contact Me</h1>
      <p>
        Feel free to contact me for networking projects,
        opportunities or professional connections.
      </p>

      <div className="contact-info">
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:isharapramodi3@gmail.com" style={{ color: "#38bdf8", textDecoration: "none" }}>
            isharapramodi3@gmail.com
          </a>
        </p>

        <p>
          <strong>LinkedIn:</strong>{" "}
          <a 
            href="https://www.linkedin.com/in/ishara-pramodi-518680362" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            ishara-pramodi-518680362
          </a>
        </p>

        <p>
          <strong>GitHub:</strong>{" "}
          <a 
            href="https://github.com/Ishara-ui" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ color: "#38bdf8", textDecoration: "none" }}
          >
            Ishara-ui
          </a>
        </p>
      </div>

      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message" rows="6"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;