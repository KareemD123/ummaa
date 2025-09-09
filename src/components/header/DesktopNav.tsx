import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

import { getDropdownItems, getSimpleItems } from "./navigationConfig";

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

  // Create refs dynamically for dropdown items
  const dropdownItems = getDropdownItems();
  const navItemRefs = useRef<{
    [key: string]: React.RefObject<HTMLDivElement>;
  }>(
    dropdownItems.reduce(
      (refs, item) => {
        refs[item.label.toLowerCase()] = React.createRef<HTMLDivElement>();
        return refs;
      },
      {} as { [key: string]: React.RefObject<HTMLDivElement> },
    ),
  ).current;

  // Type for dropdown names to ensure type safety
  type DropdownName = string;

  // Dropdown hover handlers
  const handleDropdownEnter = (dropdownName: DropdownName) => {
    const navItemRef = navItemRefs[dropdownName.toLowerCase()];
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
    const dropdownWidth = viewportWidth * 0.5; // 75% of viewport width
    const leftPosition = (viewportWidth - dropdownWidth) / 2; // Center the dropdown

    const style = {
      position: "fixed" as const,
      top: `${rect.bottom}px`,
      left: `${leftPosition + 20}px`,
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
      {/* Render dropdown navigation items */}
      {getDropdownItems().map((item) => {
        const itemKey = item.label.toLowerCase();
        return (
          <div
            key={itemKey}
            ref={navItemRefs[itemKey]}
            className={`nav-item has-dropdown ${activeDropdown === item.label ? "active" : ""}`}
            onMouseEnter={() => handleDropdownEnter(item.label)}
            onMouseLeave={handleDropdownLeave}
          >
            <Link href={item.href} className="nav-link">
              {item.label}
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
              item.label,
              <div className="dropdown-content">
                {item.dropdownSections?.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="dropdown-section">
                    <h4>{section.title}</h4>
                    {section.links.map((link, linkIndex) => (
                      <Link key={linkIndex} href={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>,
            )}
          </div>
        );
      })}

      {/* Render simple navigation items */}
      {getSimpleItems().map((item) => (
        <Link
          key={item.label.toLowerCase()}
          href={item.href}
          className="nav-link"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
