import Button from '@restart/ui/esm/Button';
import React from 'react';
import './Footer.css';
import {Link} from 'react-router-dom';

function Footer() {
    return (
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">Join The Mailing List!</p>
          <p className="footer-subscription-text">
            You can Unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="footer-input"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Me</h2>
              <Link to="/">Home</Link>
              <Link to="/">Services</Link>
              <Link to="/">Productions</Link>
              <Link to="/connect">Connect</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                D.Anthony
                <i class="fas fa-headphones" />
              </Link>
            </div>
            <small className="website-rights">D.Anthony @ 2021</small>
            <div className="social-icons">
              <Link
                to="https://www.facebook.com/GxDRYCH/community"
                target="_blank"
                aria-label="Facebook"
                className="social-icon-link facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="https://www.instagram.com/rychbeats/"
                target="_blank"
                aria-label="Instagram"
                className="social-icon-link instagram"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="https://soundcloud.com/gxdrychhttps://music.apple.com/us/artist/gxd-rych/1447972433"
                target="_blank"
                aria-label="SoundCloud"
                className="social-icon-link soundcloud"
              >
                <i className="fab fa-soundcloud"></i>
              </Link>
              <Link
                to="https://music.apple.com/us/artist/gxd-rych/1447972433"
                target="_blank"
                aria-label="Apple Music"
                className="social-icon-link applemusic"
              >
                <i className="fab fa-apple"></i>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
}

export default Footer;