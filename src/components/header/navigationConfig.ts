export interface NavigationItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  dropdownSections?: DropdownSection[];
  color?: string;
  icon?: string;
}

export interface DropdownSection {
  title: string;
  links: DropdownLink[];
}

export interface DropdownLink {
  label: string;
  href: string;
  description?: string;
}

export const navigationConfig: NavigationItem[] = [
  {
    label: "About",
    href: "/",
    hasDropdown: true,
    dropdownSections: [
      {
        title: "Our Story",
        links: [
          { label: "UMMAA History", href: "/about/history" },
          { label: "Mission & Vision", href: "/about/mission" },
          // { label: "Leadership Team", href: "/about/leadership" },
          // { label: "Board of Advisors", href: "/about/board" },
        ],
      },
      //   {
      //     title: "Community",
      //     links: [
      //       { label: "Our Community", href: "/about/community" },
      //       { label: "Member Stories", href: "/about/testimonials" },
      //       { label: "Our Impact", href: "/about/impact" },
      //       { label: "Partnerships", href: "/about/partnerships" },
      //     ],
      //   },
    ],
  },
  {
    label: "Events",
    href: "/",
    hasDropdown: true,
    dropdownSections: [
      {
        title: "Events",
        links: [
          { label: "All Upcoming Events", href: "/events/upcoming" },
          { label: "Past Events", href: "/events/past-events" },
          // { label: "Networking Events", href: "/events/networking" },
          // { label: "Professional Development", href: "/events/professional" },
          // { label: "Social Gatherings", href: "/events/social" },
        ],
      },
      // {
      // title: "Annual Events",
      // links: [],
      // links: [
      //     { label: "Annual Gala", href: "/events/gala" },
      //     { label: "Community Iftar", href: "/events/iftar" },
      //     { label: "Graduation Celebration", href: "/events/graduation" },
      //     { label: "Fundraising Events", href: "/events/fundraiser" },
      // ],
      // },
    ],
  },
  {
    label: "Members",
    href: "/",
    hasDropdown: true,
    dropdownSections: [
      // {
      //     title: "Directory",
      //     links: [
      //         { label: "Member Directory", href: "/members/directory" },
      //         { label: "Find Alumni", href: "/members/search" },
      //         { label: "By Faculty", href: "/members/by-faculty" },
      //         { label: "By Graduation Year", href: "/members/by-year" },
      //     ],
      // },
      {
        title: "Membership",
        links: [
          { label: "Become a Member", href: "/members/join" },
          // {
          //   label: "Not an Alum? Join the Canadian Muslim Network (CMN)",
          //   href: "/members/cmn",
          // },
          {
            label: "Give Back Through Sponsorship",
            href: "/contact",
            // href: "/members/sponsorship",
          },
          // { label: "Member Benefits", href: "/members/benefits" },
          // { label: "Renew Membership", href: "/members/renewal" },
          // { label: "Update Profile", href: "/members/update" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "/",
    hasDropdown: true,
    dropdownSections: [
      // {
      //     title: "Career Support",
      //     links: [
      //         { label: "Career Resources", href: "/resources/career" },
      //         { label: "Mentorship Program", href: "/resources/mentorship" },
      //         { label: "Job Board", href: "/resources/job-board" },
      //         { label: "Resume Review", href: "/resources/resume" },
      //     ],
      // },
      {
        title: "Community Resources",
        links: [
          { label: "Prayer Spaces", href: "/resources/prayer-spaces" },
          { label: "Halal Dining", href: "/resources/halal-dining" },
          {
            label: "Additional Professional Networks",
            href: "/resources/additional-networks",
          },
          // { label: "Scholarships", href: "/resources/scholarships" },
          // { label: "Newsletter Archive", href: "/resources/newsletter" },
          {
            label: "Scholarships (Coming Soon)",
            href: "/resources/scholarships",
          },
        ],
      },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
    hasDropdown: false,
  },
  {
    label: "Donate",
    href: "/donate",
    hasDropdown: false,
  },
];

// Helper function to get navigation items with dropdowns
export const getDropdownItems = () =>
  navigationConfig.filter((item) => item.hasDropdown);

// Helper function to get simple navigation items
export const getSimpleItems = () =>
  navigationConfig.filter((item) => !item.hasDropdown);

// Helper function to get all dropdown links for mobile (flattened)
export const getMobileDropdownLinks = (itemLabel: string) => {
  const item = navigationConfig.find((nav) => nav.label === itemLabel);
  if (!item?.dropdownSections) return [];

  return item.dropdownSections.flatMap((section) => section.links);
};
