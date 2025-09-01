import Link from "next/link";

// Footer styles are imported in main.scss

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <img
            src="/images/logos/UMMAA-Logo-SVG.svg"
            alt="UMMAA Logo"
            width="345"
            height="245"
          />
        </div>
        <div className="footer__links">
          <ul className="footer__links-group">
            <li className="footer__links-item footer__links-item--title">
              Get Involved
            </li>
            <li className="footer__links-item">
              <Link href="/events" className="footer__links-link">
                Upcoming Events
              </Link>
            </li>
            <li className="footer__links-item">
              <Link href="/mentorship" className="footer__links-link">
                Mentorship Program
              </Link>
            </li>
            <li className="footer__links-item">
              <Link href="/volunteer" className="footer__links-link">
                Volunteer Opportunities
              </Link>
            </li>
            <li className="footer__links-item">
              <Link href="/scholarships" className="footer__links-link">
                Scholarship Fund
              </Link>
            </li>
            <li className="footer__links-item">
              <Link href="/contact" className="footer__links-link">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="footer__links-group">
            <li className="footer__links-item footer__links-item--title">
              Resources
            </li>
            <li className="footer__links-item">
              <Link href="/members" className="footer__links-link">
                Member Directory
              </Link>
            </li>
            <li className="footer__links-item">
              <Link href="/career" className="footer__links-link">
                Career Resources
              </Link>
            </li>
            <li className="footer__links-item">
              <Link href="/newsletter" className="footer__links-link">
                Newsletter
              </Link>
            </li>
            <li className="footer__links-item">
              <Link href="/register" className="footer__links-link">
                Become a Member
              </Link>
            </li>
            <li className="footer__links-item">
              <Link href="/feedback" className="footer__links-link">
                Site Feedback
              </Link>
            </li>
          </ul>
          <ul className="footer__links-group">
            <li className="footer__links-item footer__links-item--title">
              Contact
            </li>
            <li className="footer__links-item">
              <a href="mailto:info@ummaa.org" className="footer__links-link">
                info@ummaa.org
              </a>
            </li>
            <li className="footer__links-item">
              <a href="tel:+14161234567" className="footer__links-link">
                Phone: +1 416 123 4567
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__description">
        <p>
          University of Toronto Muslim Alumni Association connects Muslim
          graduates across all faculties, fostering professional networks rooted
          in shared faith and academic excellence.
        </p>
        <ul className="footer__social">
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <i className="icon-facebook" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <i className="icon-instagram" />
            </a>
          </li>
          <li className="footer__social-item">
            <a href="#" className="footer__social-link">
              <i className="icon-youtube-play" />
            </a>
          </li>
        </ul>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container container">
          <p className="footer__bottom-text">
            © 2025 University of Toronto Muslim Alumni Association. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
