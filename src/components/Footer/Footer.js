import React from "react";
import './footer.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function Footer () {
    return (
        <body>
        <footer class="footer">
            <div class="footer-section lesson">
                <h2>Lesson.</h2>
                <p>Need to help for your dream Career? trust us. With Lesson, study becomes a lot easier with us.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                    <a href="#"><i class="fab fa-linkedin"></i></a>
                </div>
            </div>
            <div class="footer-section company">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#">Our Pricing</a></li>
                    <li><a href="#">Latest News</a></li>
                </ul>
            </div>
            <div class="footer-section support">
                <h3>Support</h3>
                <ul>
                    <li><a href="#">FAQ's</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-section address">
                <h3>Address</h3>
                <p><strong>Location:</strong> 27 Division St, New York, NY 10002, USA</p>
                <p><strong>Email:</strong> email@gmail.com</p>
                <p><strong>Phone:</strong> +000 1234 567 890</p>
            </div>
            <div class="footer-bottom">
                <p>Copyright ©2022 webdesign.gdn All rights reserved</p>
            </div>
        </footer>
        <script src="https://kit.fontawesome.com/a076d05399.js"></script>
    </body>
    )
}


export default Footer;