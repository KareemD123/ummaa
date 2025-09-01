import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import useOnClickOutside from "use-onclickoutside";

import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

// Header styles are imported in main.scss

type HeaderType = {
  isErrorPage?: boolean;
};

const Header = ({ isErrorPage }: HeaderType) => {
  const router = useRouter();
  const arrayPaths = useMemo(() => ["/"], []);

  const [onTop, setOnTop] = useState(
    !(!arrayPaths.includes(router.pathname) || isErrorPage),
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
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
  }, [router.pathname, isErrorPage, arrayPaths]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const closeSearch = () => {
    // Search functionality to be implemented
  };

  // Check if we're on mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  // on click outside
  useOnClickOutside(searchRef, closeSearch);

  return (
    <header className={`header ${!onTop ? "header--fixed" : ""}`}>
      <div className="header__container container">
        <Link href="/">
          <h1 className="header__logo">
            {/* <img
              src="/images/logos/UMMAA-Logo-SVG.svg"
              alt="UMMAA Logo"
              width="175"
              height="75"
            /> */}
            UMMAA
          </h1>
        </Link>
        {/* Conditional Navigation Rendering */}
        {isMobile ? (
          <MobileNav isOpen={menuOpen} onClose={closeMenu} />
        ) : (
          <DesktopNav
            activeDropdown={activeDropdown}
            setActiveDropdown={setActiveDropdown}
          />
        )}

        <div className="header__actions">
          {/* <button
            ref={searchRef}
            className={`header__search ${searchOpen ? "header__search--active" : ""}`}
          >
            <form className="header__search-form">
              <i
                className="icon-cancel"
                onClick={closeSearch}
              />
              <input
                type="text"
                name="search"
                placeholder="Search members, events, or resources"
              />
            </form>
            <i
              onClick={closeSearch}
              className="icon-search"
            />
          </button> */}
          {/* <Link href="/register" legacyBehavior>
            <button className="btn-cart">
              <i className="icon-cart" />
              <span>Join</span>
            </button>
          </Link>
          <Link href="/login" legacyBehavior>
            <button className="header__btn-avatar">
              <i className="icon-avatar" />
            </button>
          </Link> */}
          <button
            onClick={() => setMenuOpen(true)}
            className="header__btn-menu"
          >
            <i
              className={`header__hamburger ${menuOpen ? "header__hamburger--active" : ""}`}
            >
              <span />
            </i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
