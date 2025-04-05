import React from "react";
import "./Aboutme.css";

const AboutMe = () => {
  return (
    <section className="about-me-section">
      <div className="about-me-content">
        <h1>About Me</h1>
        <h2>Hi There!</h2>
        <p>
          I'm Ashish Gautam, a Computer Engineer with a B.Tech degree,
          specializing in front-end design. I have a passion for creating
          visually appealing and user-friendly interfaces, combining technical
          expertise with a keen eye for design. I love crafting designs that
          blend creativity and functionality, always staying updated with the
          latest trends and technologies.
        </p>
        <p className="connect-text">Want to know more about me !</p>
        <div className="connect-buttons">
          <a href="#contact" className="connect-button">
          Linkedin
          </a>
          <a href="#blog" className="connect-button">
            Github
          </a>
          <a href="/Professional Resume CV Aashish Gautam.pdf" className="connect-button" download>
  Download CV
</a>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
