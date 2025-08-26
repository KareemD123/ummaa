import Link from "next/link";
import React from "react";

interface DesktopNavProps {
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  activeDropdown,
  setActiveDropdown,
}) => {
  // Dropdown hover handlers
  const handleDropdownEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <nav className="desktop-nav">
      {/* About Section with Dropdown */}
      <div
        className="nav-item has-dropdown"
        onMouseEnter={() => handleDropdownEnter("about")}
        onMouseLeave={handleDropdownLeave}
      >
        <Link href="/about" className="nav-link">
          About
          <svg
            className="dropdown-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </Link>
        <div
          className={`nav-dropdown ${activeDropdown === "about" ? "nav-dropdown--active" : ""}`}
        >
          <Link href="/about/mission" className="dropdown-link">
            Our Mission
          </Link>
          <Link href="/about/history" className="dropdown-link">
            History
          </Link>
          <Link href="/about/board" className="dropdown-link">
            Board Members
          </Link>
          <Link href="/about/contact" className="dropdown-link">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Events Section with Dropdown */}
      <div
        className="nav-item has-dropdown"
        onMouseEnter={() => handleDropdownEnter("events")}
        onMouseLeave={handleDropdownLeave}
      >
        <Link href="/events" className="nav-link">
          Events
          <svg
            className="dropdown-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </Link>
        <div
          className={`nav-dropdown ${activeDropdown === "events" ? "nav-dropdown--active" : ""}`}
        >
          <Link href="/events/upcoming" className="dropdown-link">
            Upcoming Events
          </Link>
          <Link href="/events/past" className="dropdown-link">
            Past Events
          </Link>
          <Link href="/events/annual-gala" className="dropdown-link">
            Annual Gala
          </Link>
          <Link href="/events/networking" className="dropdown-link">
            Networking
          </Link>
        </div>
      </div>

      {/* Mentorship Section with Dropdown */}
      <div
        className="nav-item has-dropdown"
        onMouseEnter={() => handleDropdownEnter("mentorship")}
        onMouseLeave={handleDropdownLeave}
      >
        <Link href="/mentorship" className="nav-link">
          Mentorship
          <svg
            className="dropdown-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </Link>
        <div
          className={`nav-dropdown ${activeDropdown === "mentorship" ? "nav-dropdown--active" : ""}`}
        >
          <Link href="/mentorship/find-mentor" className="dropdown-link">
            Find a Mentor
          </Link>
          <Link href="/mentorship/become-mentor" className="dropdown-link">
            Become a Mentor
          </Link>
          <Link href="/mentorship/success-stories" className="dropdown-link">
            Success Stories
          </Link>
        </div>
      </div>

      {/* Resources Section with Dropdown */}
      <div
        className="nav-item has-dropdown"
        onMouseEnter={() => handleDropdownEnter("resources")}
        onMouseLeave={handleDropdownLeave}
      >
        <Link href="/resources" className="nav-link">
          Resources
          <svg
            className="dropdown-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </Link>
        <div
          className={`nav-dropdown ${activeDropdown === "resources" ? "nav-dropdown--active" : ""}`}
        >
          <Link href="/resources/career" className="dropdown-link">
            Career Resources
          </Link>
          <Link href="/resources/scholarships" className="dropdown-link">
            Scholarships
          </Link>
          <Link href="/resources/directory" className="dropdown-link">
            Alumni Directory
          </Link>
          <Link href="/resources/newsletter" className="dropdown-link">
            Newsletter
          </Link>
        </div>
      </div>

      {/* Simple nav items without dropdowns */}
      <Link href="/membership" className="nav-link">
        Membership
      </Link>
      <Link href="/donate" className="nav-link">
        Donate
      </Link>
    </nav>
  );
};

export default DesktopNav;
