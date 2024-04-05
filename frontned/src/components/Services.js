// Services.js
import React from 'react';
import './Service.css';
import backgroundImage from '../assets/services.jpg';
import service2 from "../assets/service2.jpg"

const Services = () => {
    return (
        <section className="services-section">
            <div className="container">
                <div className="content">
                    <div className="header-overlay">
                        <h1 style={{ fontSize: '36px' }}>Our Services</h1>
                    </div>
                    <p className="services-text animated-text">
                        This is service page where you can see our works
                    </p>
                    <div className="button-container">
                        <button className="about-button">Services</button>
                    </div>
                </div>
                <div className="image-container">
                    <img src={backgroundImage} alt="Background" className="animated-image" />
                </div>
            </div>
            <hr></hr>
            <div className='container2'>
                <div className='heading2'>
                    <h1>Overview</h1>

                </div>
                <p className='service-text'>Navigate Frontend with Accuknox</p>
                <div className='service2'>
                    <p className='text2'>
                        Today, Frontend Development has emerged as a new dimension of generating
                        business value by driving innovations rapidly and inducing enterprise resilience
                        and agility. In this era of unpredictability, it is imperative for a future-forward
                        organization to leverage Frontend Development services and accelerate business growth.
                        <br></br><br></br>
                        Frontend development services involve creating the visual and interactive elements of websites or web
                        applications that users directly interact with. This includes designing and implementing layouts, buttons,
                        forms, and other components using technologies like HTML, CSS, and JavaScript. Frontend developers
                        focus on making sure these elements are visually appealing, responsive across different devices,
                        and functional across various web browsers.
                        <br></br><br></br>
                        They may also utilize frontend frameworks and libraries
                        to streamline development and improve user interface consistency. Additionally, frontend developers
                        optimize code and assets for better performance and ensure accessibility for users with disabilities.
                        Overall, frontend development services aim to create engaging and user-friendly digital
                        experiences on the web.
                    </p>
                </div>
                <div className="img-container">
                    <img src={service2} alt="Image" className="service2-image" />
                </div>
            </div>

        </section>
    );
};

export default Services;
