import React from "react";
import './content.css'

function Content () {
    return (
       
    <div class="testimonial-container">
        <div class="testimonial">
            <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/avatar-feedback-1.jpg" alt="Profile Picture" class="profile-pic"/>
            <div class="testimonial-text">
                <h3>Peter Moor</h3>
                <p>Student of Web Design</p>
                <div class="testimonial-icons">
                    <span class="icon-dot"></span>
                    <span class="icon-dot"></span>
                    <span class="icon-dot"></span>
                </div>
            </div>
            <blockquote class="testimonial-quote">
                <span class="quote-icon">&ldquo;</span>
                Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned.
                <span class="quote-icon">&rdquo;</span>
            </blockquote>
        </div>
    </div>

    )
}
export default Content