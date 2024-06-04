import React from "react";
import './header.css';

function Header() {
    return (
        <body>
        <header>
            <nav>
                <div class="logo">Lesson.</div>
                <ul class="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Reviews</a></li>
                </ul>
                <button class="sign-up">Sign Up</button>
            </nav>
        </header>
        <main>
            <div class="content">
                <div class="image">
                    <img src="https://images.unsplash.com/photo-1701725313832-d8f7fadb3006?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Forest Image"/>
                    <div class="courses">
                        <div class="course">
                            <div class="course-icon">📙</div>
                            <div class="course-info">
                                <span class="course-count">20 Courses</span>
                                <span class="course-name">UI/UX Design</span>
                            </div>
                        </div>
                        <div class="course">
                            <div class="course-icon">📘</div>
                            <div class="course-info">
                                <span class="course-count">20 Courses</span>
                                <span class="course-name">Development</span>
                            </div>
                        </div>
                        <div class="course">
                            <div class="course-icon">📗</div>
                            <div class="course-info">
                                <span class="course-count">30 Courses</span>
                                <span class="course-name">Marketing</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="text-content">
                    <h1>Learn without limits and spread knowledge.</h1>
                    <p>Build new skills for that “this is my year” feeling with courses, certificates, and degrees from world-class universities and companies.</p>
                    <div class="buttons">
                        <button class="see-courses">See Courses</button>
                        <button class="watch-video">Watch Video</button>
                    </div>
                    <div class="engagement">
                        <div class="students">
                            <span class="count">50K</span>
                            <span class="label">Students</span>
                        </div>
                        <div class="courses-count">
                            <span class="count">70+</span>
                            <span class="label">Courses</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </body>
    );
}

export default Header;