import React, { useEffect } from "react";
import './blog.css';

function Blog() {
    useEffect(() => {
        let currentIndex = 0;
        const slides = document.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.dot');

        function showSlides(index) {
            if (index >= slides.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex = index;
            }

            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === currentIndex);
            });

            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === currentIndex);
            });
        }

        function currentSlide(index) {
            showSlides(index);
        }

        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.addEventListener('click', () => currentSlide(index));
        });

        showSlides(currentIndex);
    }, []);

    return (
        <section className="blog-section">
            <div className="container">
                <h2>Our Blog</h2>
                <p>Read our regular travel blog and know the latest update of tour and travel</p>
                <div className="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="card">
                                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/blog-1.jpg" alt="Blog Image 1" />
                                <p>21 November 2021</p>
                                <h3>How to become a pro web designer in 2022 and get remote job?</h3>
                                <button>Read More</button>
                            </div>
                            <div className="card">
                                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/blog-2.jpg" alt="Blog Image 2" />
                                <p>21 November 2021</p>
                                <h3>How to become a pro web designer in 2022 and get remote job?</h3>
                                <button>Read More</button>
                            </div>
                            <div className="card">
                                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/blog-3.jpg" alt="Blog Image 3" />
                                <p>21 November 2021</p>
                                <h3>How to become a pro web designer in 2022 and get remote job?</h3>
                                <button>Read More</button>
                            </div>
                        </div>
                        
                        <div className="carousel-item">
                            <div className="card">
                                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/blog-4.jpg" alt="Blog Image 4" />
                                <p>21 November 2021</p>
                                <h3>How to become a pro web designer in 2022 and get remote job?</h3>
                                <button>Read More</button>
                            </div>
                            <div className="card">
                                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/blog-5.jpg" alt="Blog Image 5" />
                                <p>21 November 2021</p>
                                <h3>How to become a pro web designer in 2022 and get remote job?</h3>
                                <button>Read More</button>
                            </div>
                            <div className="card">
                                <img src="https://vincenttang1101.github.io/education-platform-landing-page/assets/img/blog-6.jpg" alt="Blog Image 6" />
                                <p>21 November 2021</p>
                                <h3>How to become a pro web designer in 2022 and get remote job?</h3>
                                <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-indicators">
                        <span className="dot active"></span>
                        <span className="dot"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
