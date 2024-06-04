import React from "react";
import './card.css'

function Card () {
    return (
    <body>
    <div class="container">
        <div class="row">
            <div class="column">
                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/feature-1.jpg" alt="Image 1"/>
            </div>
            <div class="column">
                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/feature-2.jpg" alt="Image 2"/>
            </div>
            <div class="column text-section">
                <h2>Learner outcomes through our awesome platform</h2>
                <p>87% of people learning for professional development report career benefits like getting a promotion, a raise, or starting a new career.</p>
                <p>Lesson Impact Report (2022)</p>
                <a href="#" class="button">Sign Up</a>
            </div>
        </div>
        <div class="row">
            <div class="column text-section">
                <h2>Take the next step toward your personal and professional goals with Lesson.</h2>
                <p>Take the next step toward. Join now to receive personalized and more recommendations from the full Coursera catalog.</p>
                <a href="#" class="button">Join Now</a>
            </div>
            <div class="column">
                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/cta.jpg" alt="Image 3"/>
            </div>
        </div>
    </div>
</body>
    )
}

export default Card;