import Logo from "../../assets/icons/logo";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__description">
            <h6>
              <Logo /> <span>UMMAA</span>
            </h6>
            <p>
              University of Toronto Muslim Alumni Association connects Muslim
              graduates across all faculties, fostering professional networks
              rooted in shared faith and academic excellence.
            </p>
            <ul className="site-footer__social-networks">
              <li>
                <a href="#">
                  <i className="icon-facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-youtube-play" />
                </a>
              </li>
            </ul>
          </div>

          <div className="site-footer__links">
            <ul>
              <li>Get Involved</li>
              <li>
                <a href="/events">Upcoming Events</a>
              </li>
              <li>
                <a href="/mentorship">Mentorship Program</a>
              </li>
              <li>
                <a href="/volunteer">Volunteer Opportunities</a>
              </li>
              <li>
                <a href="/scholarships">Scholarship Fund</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
            <ul>
              <li>Resources</li>
              <li>
                <a href="/members">Member Directory</a>
              </li>
              <li>
                <a href="/career">Career Resources</a>
              </li>
              <li>
                <a href="/newsletter">Newsletter</a>
              </li>
              <li>
                <a href="/register">Become a Member</a>
              </li>
              <li>
                <a href="/feedback">Site Feedback</a>
              </li>
            </ul>
            <ul>
              <li>Contact</li>
              <li>
                <a href="mailto:info@umaa.org">info@utmaa.org</a>
              </li>
              <li>
                <a href="tel:+14161234567">Phone: +1 416 123 4567</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="container">
          <p>© 2025 University of Toronto Muslim Alumni Association. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
