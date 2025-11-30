import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { DotGrid, ElectricBorder } from "@/components/custom-effects";
import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import PhotoGallery from "@/components/photo-gallery";
import { eventPhotosArray } from "@/config/imageUrls";
import { animateCountUp } from "@/utils/countUp";

import Layout from "../layouts/Main";

// Homepage styles are imported in main.scss

const IndexPage = () => {
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
              <PhotoGallery
                photos={eventPhotosArray}
                title="Event Photo Gallery"
                description="Browse through photos from our various events and celebrations."
                shuffleOnMount={true}
              />
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

      <Footer />
    </Layout>
  );
};

export default IndexPage;
