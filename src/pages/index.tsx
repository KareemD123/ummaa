import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { DotGrid, ElectricBorder } from "@/components/custom-effects";
import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import { animateCountUp } from "@/utils/countUp";

import Layout from "../layouts/Main";

// Homepage styles are imported in main.scss

const IndexPage = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const numberElements = entry.target.querySelectorAll(
              ".homepage__community-stats-number",
            );
            numberElements.forEach((el) => {
              const target = parseInt(el.getAttribute("data-count") || "0");
              animateCountUp(el as HTMLElement, target, 2000);
            });
            setHasAnimated(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    const statsSection = document.querySelector(".homepage__community-stats");
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Array of all event photos for gallery
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
      <div className="homepage">
        <PageIntro />


        {/* Main content area with DotGrid background */}
        <div className="homepage__main-content">
          {/* Interactive dot grid background for main content only */}
          <DotGrid
            dotSize={6}
            gap={45}
            shockRadius={300}
            // baseColor="rgba(125, 249, 255, 0.4)"
            baseColor="#7df9ff"
            hoverColor="rgba(154, 85, 196, 0.64)"
            // animationSpeed={0.1}
            speedTrigger={0.1}
            className="homepage__main-content-dotgrid"
          />
          {/* Spotlight Section */}
          <section className="homepage__spotlight">
            <div className="homepage__spotlight-container">
              <Image
                src="/images/team/Meet-Our-Advisors.png"
                alt="Meet Our Advisors"
                width={1920}
                height={1080}
                className="homepage__spotlight-image"
                priority
              />
            </div>
          </section>
          <section className="section homepage__section--transparent">
            <div className="container">
              <div className="homepage__community-stats">
                <h3 className="homepage__community-stats-title">
                  Our Community Impact
                </h3>
                <div className="homepage__community-stats-grid">
                  <div>
                    <h4
                      className="homepage__community-stats-number"
                      data-count="120"
                    >
                      0+
                    </h4>
                    <p className="homepage__community-stats-label">
                      Active Alumni
                    </p>
                  </div>
                  <div>
                    <h4
                      className="homepage__community-stats-number"
                      data-count="20"
                    >
                      0+
                    </h4>
                    <p className="homepage__community-stats-label">
                      Available Mentors
                    </p>
                  </div>
                  <div>
                    <h4
                      className="homepage__community-stats-number"
                      data-count="10"
                    >
                      0+
                    </h4>
                    <p className="homepage__community-stats-label">
                      Industries Represented
                    </p>
                  </div>
                  <div>
                    <h4
                      className="homepage__community-stats-number"
                      data-count="3"
                    >
                      0+
                    </h4>
                    <p className="homepage__community-stats-label">
                      Events Hosted
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="homepage__featured">
            <div className="container">
              <article className="homepage__featured-item homepage__featured-item-large homepage__featured-item--icon homepage__featured-item--community">
                <div className="homepage__featured-item-icon">
                  <i className="icon-avatar" />
                </div>
                <div className="homepage__featured-item-content">
                  <h3>Join Our Growing Community</h3>
                  <Link href="/members/join" className="btn btn--rounded">
                    Become a Member
                  </Link>
                </div>
              </article>

              <article className="homepage__featured-item homepage__featured-item-small-first homepage__featured-item--icon homepage__featured-item--events">
                <div className="homepage__featured-item-icon">
                  <i className="icon-send" />
                </div>
                <div className="homepage__featured-item-content">
                  <h3>Upcoming Events</h3>
                  <Link href="/events/upcoming" className="btn btn--rounded">
                    View
                  </Link>
                </div>
              </article>

              <article className="homepage__featured-item homepage__featured-item-small homepage__featured-item--icon homepage__featured-item--mentorship">
                <div className="homepage__featured-item-icon">
                  <i className="icon-materials" />
                </div>
                <div className="homepage__featured-item-content">
                  <h3>Mentorship Program</h3>
                  <Link href="/mentorship" className="btn btn--rounded">
                    GET INVOLVED
                  </Link>
                </div>
              </article>
            </div>
          </section>

          {/* Event Photo Gallery Section */}
          <section className="homepage__section">
            <div className="container">
              <div className="past-events-page__gallery-section">
                <h2 className="past-events-page__section-title">
                  Event Photo Gallery
                </h2>
                <p className="past-events-page__gallery-description">
                  Browse through photos from our various events and
                  celebrations.
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

          {/* <ProductsFeatured /> */}
          {/* <Subscribe /> */}

          <section className="section">
            <div className="container">
              <ElectricBorder
                color="#7df9ff"
                speed={0.4}
                chaos={0.5}
                thickness={3}
                style={{ borderRadius: 15 }}
              >
                <div className="homepage__membership-section">
                  <h2 className="homepage__membership-title">
                    Join Our Community
                  </h2>
                  <p className="homepage__membership-description">
                    Our target membership includes Muslim alumni from all U of T
                    campuses (St. George, Mississauga, Scarborough) spanning
                    undergraduate, graduate, and professional programs across
                    all faculties.
                  </p>
                  <Link
                    href="/members/join"
                    className="membership-btn btn btn--rounded"
                  >
                    Become a Member
                  </Link>
                </div>
              </ElectricBorder>
            </div>
          </section>
        </div>
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

export default IndexPage;
