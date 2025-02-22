import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">
        <p>Copyright © 2025 Gutcare Clinic | All Rights Reserved</p>
      </div>
      <div className="footer-links">
        <a href="#">Doctor</a>
        <a href="#">Treatments</a>
        <a href="#">Visitors</a>
        <a href="#">About</a>
      </div>
      <div className="social-icons">
        <img src="/assets/facebook-icon.png" alt="Facebook" />
        <img src="/assets/twitter-icon.png" alt="Twitter" />
        <img src="/assets/instagram-icon.png" alt="Instagram" />
      </div>
    </footer>
  );
}
