import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

interface DesktopNavProps {
  activeDropdown: string | null;
  setActiveDropdown: (dropdown: string | null) => void;
}

const DesktopNav: React.FC<DesktopNavProps> = ({
  activeDropdown,
  setActiveDropdown,
}) => {
  // State to manage the portal container and dropdown positions
  const [portalContainer, setPortalContainer] = useState<HTMLElement | null>(
    null,
  );
  const [dropdownRects, setDropdownRects] = useState<{
    [key: string]: DOMRect | null;
  }>({});

  // Refs for each nav item to calculate positions
  const navItemRefs = {
    about: useRef<HTMLDivElement>(null),
    events: useRef<HTMLDivElement>(null),
    members: useRef<HTMLDivElement>(null),
    resources: useRef<HTMLDivElement>(null),
  };

  // Type for dropdown names to ensure type safety
  type DropdownName = keyof typeof navItemRefs;

  // Dropdown hover handlers
  const handleDropdownEnter = (dropdownName: DropdownName) => {
    const navItemRef = navItemRefs[dropdownName];
    if (navItemRef?.current) {
      const rect = navItemRef.current.getBoundingClientRect();
      setDropdownRects((prev) => ({ ...prev, [dropdownName]: rect }));
    }
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Setup portal container and event listeners
  useEffect(() => {
    // Create portal container if it doesn't exist
    if (!portalContainer) {
      const div = document.createElement("div");
      div.id = "dropdown-portal";
      document.body.appendChild(div);
      setPortalContainer(div);
    }

    // Calculate initial positions for all nav items
    Object.entries(navItemRefs).forEach(([key, ref]) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setDropdownRects((prev) => ({
          ...prev,
          [key]: rect,
        }));
      }
    });

    // Cleanup
    return () => {
      if (portalContainer) {
        document.body.removeChild(portalContainer);
      }
    };
  }, []);

  // Recalculate positions on window resize
  useEffect(() => {
    const handleResize = () => {
      Object.entries(navItemRefs).forEach(([key, ref]) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          setDropdownRects((prev) => ({
            ...prev,
            [key]: rect,
          }));
        }
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Render dropdown content through portal
  const renderDropdownPortal = (
    dropdownName: DropdownName,
    content: React.ReactNode,
  ) => {
    if (
      !activeDropdown ||
      activeDropdown !== dropdownName ||
      !portalContainer ||
      !dropdownRects[dropdownName]
    ) {
      return null;
    }

    const rect = dropdownRects[dropdownName];
    if (!rect) return null;

    // Position the dropdown under the nav item, centered horizontally
    const viewportWidth = window.innerWidth;
    const dropdownWidth = viewportWidth * 0.75; // 75% of viewport width
    const leftPosition = (viewportWidth - dropdownWidth) / 2; // Center the dropdown

    const style = {
      position: "fixed" as const,
      top: `${rect.bottom}px`,
      left: `${leftPosition}px`,
      width: `${dropdownWidth}px`,
      zIndex: 9999,
    };

    return ReactDOM.createPortal(
      <div className="nav-dropdown-portal" style={style}>
        {content}
      </div>,
      portalContainer,
    );
  };

  return (
    <nav className="desktop-nav">
      {/* About Section with Dropdown */}
      <div
        ref={navItemRefs.about}
        className={`nav-item has-dropdown ${activeDropdown === "about" ? "active" : ""}`}
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
        {renderDropdownPortal(
          "about",
          <div className="dropdown-content">
            <div className="dropdown-section">
              <h4>Our Story</h4>
              <Link href="/about/history">UMMAA History</Link>
              <Link href="/about/mission">Mission & Vision</Link>
              <Link href="/about/leadership">Leadership Team</Link>
              <Link href="/about/board">Board of Directors</Link>
            </div>
            <div className="dropdown-section">
              <h4>Community</h4>
              <Link href="/about/community">Our Community</Link>
              <Link href="/about/testimonials">Member Stories</Link>
              <Link href="/about/impact">Our Impact</Link>
              <Link href="/about/partnerships">Partnerships</Link>
            </div>
          </div>,
        )}
      </div>

      {/* Events Section with Dropdown */}
      <div
        ref={navItemRefs.events}
        className={`nav-item has-dropdown ${activeDropdown === "events" ? "active" : ""}`}
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
        {renderDropdownPortal(
          "events",
          <div className="dropdown-content">
            <div className="dropdown-section">
              <h4>Upcoming Events</h4>
              <Link href="/events/upcoming">All Upcoming Events</Link>
              <Link href="/events/networking">Networking Events</Link>
              <Link href="/events/professional">Professional Development</Link>
              <Link href="/events/social">Social Gatherings</Link>
            </div>
            <div className="dropdown-section">
              <h4>Annual Events</h4>
              <Link href="/events/gala">Annual Gala</Link>
              <Link href="/events/iftar">Community Iftar</Link>
              <Link href="/events/graduation">Graduation Celebration</Link>
              <Link href="/events/fundraiser">Fundraising Events</Link>
            </div>
          </div>,
        )}
      </div>

      {/* Mentorship Section with Dropdown */}
      <div
        ref={navItemRefs.members}
        className={`nav-item has-dropdown ${activeDropdown === "members" ? "active" : ""}`}
        onMouseEnter={() => handleDropdownEnter("members")}
        onMouseLeave={handleDropdownLeave}
      >
        <Link href="/members" className="nav-link">
          Members
          <svg
            className="dropdown-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </Link>
        {renderDropdownPortal(
          "members",
          <div className="dropdown-content">
            <div className="dropdown-section">
              <h4>Directory</h4>
              <Link href="/members/directory">Member Directory</Link>
              <Link href="/members/search">Find Alumni</Link>
              <Link href="/members/by-faculty">By Faculty</Link>
              <Link href="/members/by-year">By Graduation Year</Link>
            </div>
            <div className="dropdown-section">
              <h4>Membership</h4>
              <Link href="/members/join">Become a Member</Link>
              <Link href="/members/benefits">Member Benefits</Link>
              <Link href="/members/renewal">Renew Membership</Link>
              <Link href="/members/update">Update Profile</Link>
            </div>
          </div>,
        )}
      </div>

      {/* Resources Section with Dropdown */}
      <div
        ref={navItemRefs.resources}
        className={`nav-item has-dropdown ${activeDropdown === "resources" ? "active" : ""}`}
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
        {renderDropdownPortal(
          "resources",
          <div className="dropdown-content">
            <div className="dropdown-section">
              <h4>Career Support</h4>
              <Link href="/resources/career">Career Resources</Link>
              <Link href="/resources/mentorship">Mentorship Program</Link>
              <Link href="/resources/job-board">Job Board</Link>
              <Link href="/resources/resume">Resume Review</Link>
            </div>
            <div className="dropdown-section">
              <h4>Community Resources</h4>
              <Link href="/resources/prayer-spaces">Prayer Spaces</Link>
              <Link href="/resources/halal-dining">Halal Dining</Link>
              <Link href="/resources/scholarships">Scholarships</Link>
              <Link href="/resources/newsletter">Newsletter Archive</Link>
            </div>
          </div>,
        )}
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
