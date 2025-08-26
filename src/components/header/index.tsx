import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import useOnClickOutside from "use-onclickoutside";

type HeaderType = {
  isErrorPage?: boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const arrayPaths = ["/"];

  const [onTop, setOnTop] = useState(
    !(!arrayPaths.includes(router.pathname) || isErrorPage),
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  // State for dropdown hover functionality
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const navRef = useRef(null);
  const searchRef = useRef(null);

  const headerClass = () => {
    if (window.pageYOffset === 0) {
      setOnTop(true);
    } else {
      setOnTop(false);
    }
  };

  useEffect(() => {
    if (!arrayPaths.includes(router.pathname) || isErrorPage) {
      return;
    }

    headerClass();
    const handleScroll = () => {
      headerClass();
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [router.pathname, isErrorPage]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // Dropdown hover handlers
  const handleDropdownEnter = (dropdownName: string) => {
    setActiveDropdown(dropdownName);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // on click outside
  useOnClickOutside(navRef, closeMenu);
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={`site-header ${!onTop ? "site-header--fixed" : ""}`}>
      <div className="container">
        <Link href="/">
          <h1 className="site-logo">
            {/* <img
              src="/images/logos/UMMAA-Logo-SVG.svg"
              alt="UMMAA Logo"
              width="175"
              height="75"
            /> */}
            UMMAA
          </h1>
        </Link>
        <nav
          ref={navRef}
          className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}
        >
          {/* 
            NAVIGATION DROPDOWN STRUCTURE:
            - Each nav item with dropdown needs onMouseEnter/onMouseLeave handlers
            - Add className "has-dropdown" for styling
            - Dropdown content is in .nav-dropdown div
            - To customize: modify the dropdown content arrays below
            - To add new items: copy the structure and add to the content arrays
            - To remove dropdowns: remove onMouse handlers and .nav-dropdown div
          */}

          {/* About Section with Dropdown */}
          <div
            className={`nav-item has-dropdown ${activeDropdown === "about" ? "active" : ""}`}
            onMouseEnter={() => handleDropdownEnter("about")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link href="/about">About</Link>
            <div className="nav-dropdown">
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
              </div>
            </div>
          </div>

          {/* Events Section with Dropdown */}
          <div
            className={`nav-item has-dropdown ${activeDropdown === "events" ? "active" : ""}`}
            onMouseEnter={() => handleDropdownEnter("events")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link href="/events">Events</Link>
            <div className="nav-dropdown">
              <div className="dropdown-content">
                <div className="dropdown-section">
                  <h4>Upcoming Events</h4>
                  <Link href="/events/upcoming">All Upcoming Events</Link>
                  <Link href="/events/networking">Networking Events</Link>
                  <Link href="/events/professional">
                    Professional Development
                  </Link>
                  <Link href="/events/social">Social Gatherings</Link>
                </div>
                <div className="dropdown-section">
                  <h4>Annual Events</h4>
                  <Link href="/events/gala">Annual Gala</Link>
                  <Link href="/events/iftar">Community Iftar</Link>
                  <Link href="/events/graduation">Graduation Celebration</Link>
                  <Link href="/events/fundraiser">Fundraising Events</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Members Section with Dropdown */}
          <div
            className={`nav-item has-dropdown ${activeDropdown === "members" ? "active" : ""}`}
            onMouseEnter={() => handleDropdownEnter("members")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link href="/members">Members</Link>
            <div className="nav-dropdown">
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
              </div>
            </div>
          </div>

          {/* Resources Section with Dropdown */}
          <div
            className={`nav-item has-dropdown ${activeDropdown === "resources" ? "active" : ""}`}
            onMouseEnter={() => handleDropdownEnter("resources")}
            onMouseLeave={handleDropdownLeave}
          >
            <Link href="/resources">Resources</Link>
            <div className="nav-dropdown">
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
              </div>
            </div>
          </div>

          {/* Member Portal Button (no dropdown) */}
          <button className="site-nav__btn">
            <p>Member Portal</p>
          </button>
        </nav>

        <div className="site-header__actions">
          <button
            ref={searchRef}
            className={`search-form-wrapper ${searchOpen ? "search-form--active" : ""}`}
          >
            <form className="search-form">
              <i
                className="icon-cancel"
                onClick={() => setSearchOpen(!searchOpen)}
              />
              <input
                type="text"
                name="search"
                placeholder="Search members, events, or resources"
              />
            </form>
            <i
              onClick={() => setSearchOpen(!searchOpen)}
              className="icon-search"
            />
          </button>
          {/* <Link href="/register" legacyBehavior>
            <button className="btn-cart">
              <i className="icon-cart" />
              <span>Join</span>
            </button>
          </Link>
          <Link href="/login" legacyBehavior>
            <button className="site-header__btn-avatar">
              <i className="icon-avatar" />
            </button>
          </Link> */}
          <button
            onClick={() => setMenuOpen(true)}
            className="site-header__btn-menu"
          >
            <i className="btn-hamburger">
              <span />
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
