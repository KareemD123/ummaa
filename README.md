# University of Toronto Muslim Alumni Association (UMMAA) Website

A modern, responsive website built for the University of Toronto Muslim Alumni Association to connect alumni, facilitate networking, and support current students through mentorship and community engagement.

## About UMMAA

The University of Toronto Muslim Alumni Association connects Muslim graduates from all U of T campuses (St. George, Mississauga, Scarborough) across undergraduate, graduate, and professional programs. Our mission is to foster professional excellence, support current students, build community, and contribute positively to Canadian society.

## Getting Started

To run the development server locally:

```bash
yarn install
yarn dev
```

Open [http://localhost:3200](http://localhost:3200) to view the website.

## Tech Stack

- **Framework:** Next.js 15 with TypeScript
- **Styling:** SCSS with BEM methodology
- **State Management:** Redux Toolkit with Redux Persist
- **UI Components:** Custom responsive components
- **Fonts:** Poppins via Next.js font optimization

## Features

- **Member Directory:** Browse and connect with alumni across different industries
- **Event Management:** View upcoming alumni events and networking opportunities
- **Mentorship Program:** Connect students with experienced alumni mentors
- **User Authentication:** Secure login and registration system
- **Responsive Design:** Optimized for all devices and screen sizes

## Available Pages

- **Home:** `/` - Landing page with community stats and mission
- **Members:** `/members` - Alumni directory with filtering and search
- **Events:** `/events` - Upcoming events and networking opportunities
- **About:** `/about` - Information about UMMAA and our mission
- **Login/Register:** `/login`, `/register` - User authentication
- **404:** `/page-not-found` - Custom error page

## Data Structure

The website uses mock data for development, located in `src/utils/data/`:
- `members.ts` - Alumni member profiles
- `events.ts` - Community events and activities

API endpoints are handled through Next.js API routes in `src/pages/api/`.

## Recent Updates - December 2024

- Cleaned up e-commerce template remnants
- Implemented alumni-focused architecture
- Updated Redux store for user management
- Renamed API endpoints for clarity
- Improved component structure and naming
