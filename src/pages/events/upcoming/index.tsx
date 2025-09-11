import Image from "next/image";
import { useEffect, useState } from "react";

import Footer from "@/components/footer";

import Layout from "../../../layouts/Main";

// Upcoming events page styles will be imported in main.scss

interface UpcomingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  registrationLink?: string;
  image: string;
  category: string;
  featured?: boolean;
  tentative?: boolean;
}

const UpcomingEvents = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [showAllEvents, setShowAllEvents] = useState<boolean>(false);

  // Sample upcoming events data
  const upcomingEvents: UpcomingEvent[] = [
    {
      id: "1",
      title: "Inaugural Networking Evening",
      date: "2025-11-15",
      // date: "TBD",
      time: "6:00 PM - 9:00 PM",
      location:
        // "Hart House Great Hall, University of Toronto St. George Campus",
        "TBD",
      description:
        "Join us for our inaugural networking evening where Muslim alumni from diverse fields will come together to share experiences, build connections, and celebrate our community. This special event marks the beginning of UMMAA's journey in fostering meaningful professional relationships.",
      registrationLink: "/contact",
      image: "/images/event-photos/event-photo-03.jpg",
      category: "Networking",
      featured: true,
      tentative: true,
    },
  ];

  // All event photos for the gallery
  const eventPhotos = [
    "/images/event-photos/event-photo-01.jpg",
    "/images/event-photos/event-photo-03.jpg",
    "/images/event-photos/event-photo-08.jpg",
    "/images/event-photos/event-photo-10.jpg",
    "/images/event-photos/event-photo-17.jpg",
    "/images/event-photos/event-photo-19.jpg",
  ];

  const openPhotoModal = (photo: string) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(eventPhotos.indexOf(photo));
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    const nextIndex = (currentPhotoIndex + 1) % eventPhotos.length;
    setCurrentPhotoIndex(nextIndex);
    setSelectedPhoto(eventPhotos[nextIndex]);
  };

  const prevPhoto = () => {
    const prevIndex =
      (currentPhotoIndex - 1 + eventPhotos.length) % eventPhotos.length;
    setCurrentPhotoIndex(prevIndex);
    setSelectedPhoto(eventPhotos[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedPhoto) {
        if (event.key === "Escape") {
          closePhotoModal();
        } else if (event.key === "ArrowRight") {
          nextPhoto();
        } else if (event.key === "ArrowLeft") {
          prevPhoto();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedPhoto, currentPhotoIndex]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const isEventSoon = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  };

  const displayedEvents = showAllEvents
    ? upcomingEvents
    : upcomingEvents.slice(0, 3);

  return (
    <Layout>
      <div className="upcoming-events-page">
        <div className="upcoming-hero">
          <div className="container">
            <h1>Upcoming Events</h1>
            <p>
              Join us for exciting upcoming events designed to connect, inspire,
              and empower our Muslim alumni community. From networking evenings
              to professional development workshops, there's something for
              everyone.
            </p>
          </div>
        </div>

        <section className="upcoming-content">
          <div className="container">
            {upcomingEvents.length > 0 ? (
              <>
                <div className="events-stats">
                  <div className="stat-card">
                    <div className="stat-number">{upcomingEvents.length}</div>
                    <div className="stat-label">Upcoming Events</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">
                      {upcomingEvents.filter((e) => isEventSoon(e.date)).length}
                    </div>
                    <div className="stat-label">This Week</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-number">
                      {upcomingEvents.filter((e) => e.featured).length}
                    </div>
                    <div className="stat-label">Featured Events</div>
                  </div>
                </div>

                <div className="events-grid">
                  {displayedEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`event-card ${event.featured ? "featured" : ""} ${isEventSoon(event.date) ? "coming-soon" : ""}`}
                    >
                      {event.featured && (
                        <div className="featured-badge">
                          <span>Featured Event</span>
                        </div>
                      )}
                      {isEventSoon(event.date) && (
                        <div className="coming-soon-badge">
                          <span>Coming Soon</span>
                        </div>
                      )}
                      <div className="event-image-container">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={400}
                          height={250}
                          className="event-image"
                          onClick={() => openPhotoModal(event.image)}
                        />
                        <div className="event-category">{event.category}</div>
                      </div>
                      <div className="event-content">
                        <div className="event-header">
                          <h3 className="event-title">{event.title}</h3>
                          <div className="event-date-time">
                            <div className="event-date">
                              {formatDate(event.date)} {event.tentative ? "(Tentative)" : ""}
                            </div>
                            <div className="event-time">{event.time}</div>
                          </div>
                        </div>
                        <div className="event-location">
                          <i className="icon-location" />
                          <span>Location: {event.location}</span>
                        </div>
                        <p className="event-description">{event.description}</p>
                        {event.registrationLink && (
                          <div className="event-actions">
                            <a
                              href={event.registrationLink}
                              className="register-btn"
                            >
                              Register Now
                              <i className="icon-right" />
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {upcomingEvents.length > 3 && (
                  <div className="load-more-section">
                    <button
                      className="load-more-btn"
                      onClick={() => setShowAllEvents(!showAllEvents)}
                    >
                      {showAllEvents
                        ? "Show Less"
                        : `View All ${upcomingEvents.length} Events`}
                      <i className={`icon-${showAllEvents ? "up" : "down"}`} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="no-events">
                <div className="no-events-content">
                  <i className="icon-calendar" />
                  <h3>No Upcoming Events</h3>
                  <p>
                    We're currently planning exciting new events for our
                    community. Check back soon or contact us to suggest an event
                    idea!
                  </p>
                  <a href="/contact" className="contact-btn">
                    Contact Us
                    <i className="icon-right" />
                  </a>
                </div>
              </div>
            )}

            {/* <div className="event-gallery-section">
            <h2>Event Gallery</h2>
            <p>Take a look at photos from our previous events and get excited for what's coming!</p>
            <div className="photo-gallery">
              {eventPhotos.map((photo, index) => (
                <div key={index} className="gallery-item">
                  <Image
                    src={photo}
                    alt={`Event photo ${index + 1}`}
                    width={300}
                    height={200}
                    className="gallery-image"
                    onClick={() => openPhotoModal(photo)}
                  />
                </div>
              ))}
            </div>
          </div> */}
          </div>
        </section>
      </div>

      {/* Photo Modal
      {selectedPhoto && (
        <div className="photo-modal" onClick={closePhotoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closePhotoModal}>
              <i className="icon-close" />
            </button>
            <button className="nav-btn prev-btn" onClick={prevPhoto}>
              <i className="icon-left" />
            </button>
            <Image
              src={selectedPhoto}
              alt="Event photo"
              width={800}
              height={600}
              className="modal-image"
            />
            <button className="nav-btn next-btn" onClick={nextPhoto}>
              <i className="icon-right" />
            </button>
            <div className="photo-counter">
              {currentPhotoIndex + 1} / {eventPhotos.length}
            </div>
          </div>
        </div>
      )} */}

      <Footer />
    </Layout>
  );
};

export default UpcomingEvents;
