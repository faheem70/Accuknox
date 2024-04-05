// About.js
import React from 'react';
import './Abouts.css';
import image from "../assets/about.jpg"
const About = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="content">
                    <h1 style={{ fontSize: '40px' }}>About Us</h1>
                    <p className="services-text animated-text">
                        Technologically empowering organisations to unlock success
                    </p>
                    <div className="button-container">
                        <button className="about-button">Talk to Us </button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={image} alt="About Image" className="animated-image" />
                </div>
            </div>

        </section>
    );
};

export default About;
