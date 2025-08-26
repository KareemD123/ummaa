import Link from "next/link";
import React, { useState } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Mobile dropdown click handlers
  const handleDropdownClick = (dropdownName: string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const handleLinkClick = () => {
    onClose();
    setActiveDropdown(null);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="mobile-nav-overlay" onClick={onClose} />}

      {/* Mobile Navigation Panel */}
      <nav className={`mobile-nav ${isOpen ? "mobile-nav--open" : ""}`}>
        <div className="mobile-nav__header">
          <div className="mobile-nav__logo">
            <img
              src="/images/logos/UMMAA-Logo-SVG.svg"
              alt="UMMAA Logo"
              className="mobile-nav__logo-img"
            />
          </div>
          <button className="mobile-nav__close" onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="mobile-nav__content">
          {/* About Section with Dropdown */}
          <div className="mobile-nav-item">
            <button
              className="mobile-nav-link mobile-nav-link--dropdown"
              onClick={(e) => handleDropdownClick("about", e)}
            >
              About
              <svg
                className={`dropdown-arrow ${activeDropdown === "about" ? "dropdown-arrow--active" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <div
              className={`mobile-nav-dropdown ${activeDropdown === "about" ? "mobile-nav-dropdown--active" : ""}`}
            >
              <Link
                href="/about/mission"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Our Mission
              </Link>
              <Link
                href="/about/history"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                History
              </Link>
              <Link
                href="/about/board"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Board Members
              </Link>
              <Link
                href="/about/contact"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Events Section with Dropdown */}
          <div className="mobile-nav-item">
            <button
              className="mobile-nav-link mobile-nav-link--dropdown"
              onClick={(e) => handleDropdownClick("events", e)}
            >
              Events
              <svg
                className={`dropdown-arrow ${activeDropdown === "events" ? "dropdown-arrow--active" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <div
              className={`mobile-nav-dropdown ${activeDropdown === "events" ? "mobile-nav-dropdown--active" : ""}`}
            >
              <Link
                href="/events/upcoming"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Upcoming Events
              </Link>
              <Link
                href="/events/past"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Past Events
              </Link>
              <Link
                href="/events/annual-gala"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Annual Gala
              </Link>
              <Link
                href="/events/networking"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Networking
              </Link>
            </div>
          </div>

          {/* Mentorship Section with Dropdown */}
          <div className="mobile-nav-item">
            <button
              className="mobile-nav-link mobile-nav-link--dropdown"
              onClick={(e) => handleDropdownClick("mentorship", e)}
            >
              Mentorship
              <svg
                className={`dropdown-arrow ${activeDropdown === "mentorship" ? "dropdown-arrow--active" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <div
              className={`mobile-nav-dropdown ${activeDropdown === "mentorship" ? "mobile-nav-dropdown--active" : ""}`}
            >
              <Link
                href="/mentorship/find-mentor"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Find a Mentor
              </Link>
              <Link
                href="/mentorship/become-mentor"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Become a Mentor
              </Link>
              <Link
                href="/mentorship/success-stories"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Success Stories
              </Link>
            </div>
          </div>

          {/* Resources Section with Dropdown */}
          <div className="mobile-nav-item">
            <button
              className="mobile-nav-link mobile-nav-link--dropdown"
              onClick={(e) => handleDropdownClick("resources", e)}
            >
              Resources
              <svg
                className={`dropdown-arrow ${activeDropdown === "resources" ? "dropdown-arrow--active" : ""}`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <polyline points="6,9 12,15 18,9"></polyline>
              </svg>
            </button>
            <div
              className={`mobile-nav-dropdown ${activeDropdown === "resources" ? "mobile-nav-dropdown--active" : ""}`}
            >
              <Link
                href="/resources/career"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Career Resources
              </Link>
              <Link
                href="/resources/scholarships"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Scholarships
              </Link>
              <Link
                href="/resources/directory"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Alumni Directory
              </Link>
              <Link
                href="/resources/newsletter"
                className="mobile-dropdown-link"
                onClick={handleLinkClick}
              >
                Newsletter
              </Link>
            </div>
          </div>

          {/* Simple nav items without dropdowns */}
          <Link
            href="/membership"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            Membership
          </Link>
          <Link
            href="/donate"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            Donate
          </Link>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
