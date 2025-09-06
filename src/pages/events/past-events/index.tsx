import Image from "next/image";
import { useEffect, useState } from "react";

import Footer from "@/components/footer";

import Layout from "../../../layouts/Main";

// Past events page styles will be imported in main.scss

interface PastEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  attendees: number;
  image: string;
}

const PastEvents = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [showAllEvents, setShowAllEvents] = useState<boolean>(false);

  // Sample past events data
  const pastEvents: PastEvent[] = [
    {
      id: "1",
      title: "Alumni CEO & Founder Panel",
      date: "2025-02-27",
      location:
        "Galbraith-Building Room 202, University of Toronto St. George Campus",
      description:
        "Highlighting Careers in Engineering, Entrepeneurship & Start-ups",
      attendees: 70,
      image: "/images/event-photos/event-photo-01.jpg",
    },
    {
      id: "2",
      title: "Alumni Law Panel",
      date: "2025-01-14",
      location:
        "MFC Main Activity Hall, University of Toronto St. George Campus",
      description:
        "Illuminating the path for advocacy: Highlighting careers in Law, Government, and Public Policy",
      attendees: 60,
      image: "/images/event-photos/event-photo-19.jpg",
    },
    {
      id: "3",
      title: "Alumni Healthcare & Health Innovation Panel",
      date: "2024-10-17",
      location:
        "OISE, OIC 154 Drama Studio, University of Toronto St. George Campus",
      description:
        "Engaging in discussions on the intersection of healthcare and innovation",
      attendees: 40,
      image: "/images/event-photos/event-photo-13.jpg",
    },
  ];

  // Array of all event photos
  const eventPhotos = [
    "/images/event-photos/event-photo-01.jpg",
    "/images/event-photos/event-photo-02.jpg",
    "/images/event-photos/event-photo-03.jpg",
    "/images/event-photos/event-photo-04.jpg",
    "/images/event-photos/event-photo-05.jpg",
    "/images/event-photos/event-photo-06.jpg",
    "/images/event-photos/event-photo-07.jpg",
    "/images/event-photos/event-photo-08.jpg",
    "/images/event-photos/event-photo-09.jpg",
    "/images/event-photos/event-photo-10.jpg",
    "/images/event-photos/event-photo-11.jpg",
    "/images/event-photos/event-photo-12.jpg",
    "/images/event-photos/event-photo-13.jpg",
    "/images/event-photos/event-photo-14.jpg",
    "/images/event-photos/event-photo-15.jpg",
    "/images/event-photos/event-photo-16.jpg",
    "/images/event-photos/event-photo-17.jpg",
    "/images/event-photos/event-photo-18.jpg",
    "/images/event-photos/event-photo-19.jpg",
  ];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!selectedPhoto) return;

      if (e.key === "Escape") {
        closeModal();
      } else if (e.key === "ArrowLeft") {
        navigatePhoto(-1);
      } else if (e.key === "ArrowRight") {
        navigatePhoto(1);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [selectedPhoto, currentPhotoIndex]);

  const openModal = (photo: string, index: number) => {
    setSelectedPhoto(photo);
    setCurrentPhotoIndex(index);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  const navigatePhoto = (direction: number) => {
    const newIndex = currentPhotoIndex + direction;
    if (newIndex >= 0 && newIndex < eventPhotos.length) {
      setCurrentPhotoIndex(newIndex);
      setSelectedPhoto(eventPhotos[newIndex]);
    }
  };

  return (
    <Layout>
      <div className="past-events-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Past Events</h1>

            <div className="description">
              <p>
                <strong>Relive the Memorable Moments!</strong>
              </p>
              <p>
                Browse through photos and memories from our community
                gatherings, professional development sessions, and networking
                events. These moments showcase the vibrant connections and
                meaningful experiences that define our alumni community.
              </p>
              {/* <div className="fun-fact">
                <p>
                  <span className="fun-fact-icon">📸</span>
                  <strong>Photo Gallery</strong> - Explore our collection of event
                  photos below and click on any image to view it in full size with
                  easy navigation through our entire gallery!
                </p>
              </div> */}
            </div>
          </div>
        </div>

        <section className="past-events-content">
          <div className="container">
            {/* Recent Events List */}
            <div className="past-events-page__events-section">
              <h2 className="past-events-page__section-title">Recent Events</h2>
              <div className="past-events-page__events-list">
                {(showAllEvents ? pastEvents : pastEvents.slice(0, 2)).map(
                  (event) => (
                    <div
                      key={event.id}
                      className="past-events-page__event-item"
                    >
                      <div className="past-events-page__event-image">
                        <Image
                          src={event.image}
                          alt={event.title}
                          width={400}
                          height={300}
                          className="past-events-page__event-img"
                          priority={event.id === "1"}
                        />
                      </div>
                      <div className="past-events-page__event-content">
                        <h3 className="past-events-page__event-title">
                          {event.title}
                        </h3>
                        <div className="past-events-page__event-date-large">
                          {new Date(event.date)
                            .toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })
                            .toUpperCase()}
                        </div>
                        <p className="past-events-page__event-description">
                          {event.description}
                        </p>
                        {/* <button className="past-events-page__register-btn">
                        Register for Event
                      </button> */}
                      </div>
                    </div>
                  ),
                )}
              </div>

              {/* View More Button */}
              {pastEvents.length > 2 && (
                <div className="past-events-page__view-more-container">
                  <button
                    className="past-events-page__view-more-btn"
                    onClick={() => setShowAllEvents(!showAllEvents)}
                  >
                    {showAllEvents ? "View Less" : "View More"}
                  </button>
                </div>
              )}
            </div>

            {/* Photo Gallery */}
            <div className="past-events-page__gallery-section">
              <h2 className="past-events-page__section-title">
                Event Photo Gallery
              </h2>
              <p className="past-events-page__gallery-description">
                Browse through photos from our various events and celebrations.
              </p>

              <div className="past-events-page__gallery">
                {eventPhotos.map((photo, index) => {
                  // Create different sizes for masonry layout
                  const sizes = ["small", "medium", "large"];
                  const randomSize = sizes[index % 3];

                  return (
                    <div
                      key={index}
                      className={`past-events-page__gallery-item past-events-page__gallery-item--${randomSize}`}
                      onClick={() => openModal(photo, index)}
                    >
                      <Image
                        src={photo}
                        alt={`Event photo ${index + 1}`}
                        width={400}
                        height={400}
                        className="past-events-page__gallery-image"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <div className="past-events-page__gallery-overlay">
                        <span className="past-events-page__gallery-zoom">
                          🔍
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for enlarged photo view */}
      {selectedPhoto && (
        <div className="past-events-page__modal" onClick={closeModal}>
          <div
            className="past-events-page__modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="past-events-page__modal-close"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Navigation arrows */}
            {currentPhotoIndex > 0 && (
              <button
                className="past-events-page__modal-nav past-events-page__modal-nav--prev"
                onClick={() => navigatePhoto(-1)}
              >
                ‹
              </button>
            )}

            {currentPhotoIndex < eventPhotos.length - 1 && (
              <button
                className="past-events-page__modal-nav past-events-page__modal-nav--next"
                onClick={() => navigatePhoto(1)}
              >
                ›
              </button>
            )}

            <img
              src={selectedPhoto}
              alt={`Event photo ${currentPhotoIndex + 1} of ${eventPhotos.length}`}
              className="past-events-page__modal-image"
            />

            {/* Photo counter */}
            <div className="past-events-page__modal-counter">
              {currentPhotoIndex + 1} / {eventPhotos.length}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </Layout>
  );
};

export default PastEvents;
