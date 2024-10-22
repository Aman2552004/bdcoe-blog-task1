import React from 'react';
import './Contact.css';

function Footer() {
    return (
        <div id='contact'>
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear} Aman's Blog. All rights reserved.</p>
                <div className="social-links">
                <p>Contact us: <a href="mailto:amansinghrajput2352@gmail.com">amansinghrajput2352@gmail.com</a></p>

                    <a href="https://www.facebook.com/profile.php?id=100029965452661" target="_blank">Facebook</a>
                    <a href="https://twitter.com" target="_blank">Twitter</a>
                    <a href="https://www.instagram.com/_aman_2505/" target="_blank">Instagram</a>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default Footer;