import React from "react";
import './header.css';

function Header() {
    return (
        <section className="courses-section">
            <h2>Our popular courses</h2>
            <p>Build new skills with new trendy courses and shine for the next future career.</p>
            <div className="courses-container">
                <div className="course-card">
                    <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/course-1.jpg" alt="Basic web design" />
                    <h3>Basic web design.</h3>
                    <p>Get the best course, gain knowledge and shine for your future career.</p>
                    <div className="course-footer">
                        <span className="price">$120.75</span>
                        <button>Book Now</button>
                    </div>
                </div>
                <div className="course-card">
                    <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/course-2.jpg" alt="UI/UX design" />
                    <h3>UI/UX design</h3>
                    <p>Get the best course, gain knowledge and shine for your future career.</p>
                    <div className="course-footer">
                        <span className="price">$120.75</span>
                        <button>Book Now</button>
                    </div>
                </div>
                <div className="course-card">
                    <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/course-3.jpg" alt="Web App design" />
                    <h3>Web App design</h3>
                    <p>Get the best course, gain knowledge and shine for your future career.</p>
                    <div className="course-footer">
                        <span className="price">$120.75</span>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
            <div className="navigation-arrows">
                <button className="arrow left-arrow">&#10094;</button>
                <button className="arrow right-arrow">&#10095;</button>
            </div>               
           
        </section>

        
        
        
        
        
    );
}

export default Header;
