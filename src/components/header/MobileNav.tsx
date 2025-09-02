import Link from "next/link";
import React, { useState } from "react";

import { getDropdownItems, getSimpleItems } from "./navigationConfig";

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
          {/* Render dropdown navigation items */}
          {getDropdownItems().map((item) => {
            const itemKey = item.label.toLowerCase();
            return (
              <div key={itemKey} className="mobile-nav-item">
                <button
                  className="mobile-nav-link mobile-nav-link--dropdown"
                  onClick={(e) => handleDropdownClick(item.label, e)}
                >
                  {item.label}
                  <svg
                    className={`dropdown-arrow ${activeDropdown === item.label ? "dropdown-arrow--active" : ""}`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <polyline points="6,9 12,15 18,9"></polyline>
                  </svg>
                </button>
                <div
                  className={`mobile-nav-dropdown ${activeDropdown === item.label ? "mobile-nav-dropdown--active" : ""}`}
                >
                  {item.dropdownSections?.flatMap((section) =>
                    section.links.map((link, linkIndex) => (
                      <Link
                        key={`${section.title}-${linkIndex}`}
                        href={link.href}
                        className="mobile-dropdown-link"
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </Link>
                    )),
                  )}
                </div>
              </div>
            );
          })}

          {/* Render simple navigation items */}
          {getSimpleItems().map((item) => (
            <Link
              key={item.label.toLowerCase()}
              href={item.href}
              className="mobile-nav-link"
              onClick={handleLinkClick}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
