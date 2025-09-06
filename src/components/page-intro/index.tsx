import Link from "next/link";
import { useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Page-intro styles are imported in main.scss

const PageIntro = () => {
  SwiperCore.use([EffectFade, Navigation, Autoplay]);
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of event photos for the carousel
  const eventPhotos = [
    "/images/event-photos/event-photo-19.jpg",
    "/images/event-photos/event-photo-01.jpg",
    "/images/event-photos/event-photo-03.jpg",
    "/images/event-photos/event-photo-08.jpg",
    "/images/event-photos/event-photo-10.jpg",
    "/images/event-photos/event-photo-17.jpg",
  ];

  // Slide content data
  const slideContent = [
    {
      title: "Connecting Muslim Alumni Across Generations",
      ctaText: "Join UMMAA",
      ctaLink: "/auth/register",
    },
    {
      title: "Professional Excellence Through Community",
      ctaText: "View Events",
      ctaLink: "/events",
    },
    {
      title: "Building Lasting Connections",
      ctaText: "Learn More",
      ctaLink: "/about",
    },
    {
      title: "Celebrating Our Heritage",
      ctaText: "View Gallery",
      ctaLink: "/events/past-events",
    },
    {
      title: "Connecting Muslim Alumni Across Generations",
      ctaText: "Join UMMAA",
      ctaLink: "/auth/register",
    },
    {
      title: "Professional Excellence Through Community",
      ctaText: "View Events",
      ctaLink: "/events",
    },
    {
      title: "Building Lasting Connections",
      ctaText: "Learn More",
      ctaLink: "/about",
    },
    {
      title: "Celebrating Our Heritage",
      ctaText: "View Gallery",
      ctaLink: "/events/past-events",
    },
  ];

  return (
    <section className="page-intro">
      <Swiper
        navigation
        effect="slide"
        speed={1200}
        loop={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
        className="swiper-wrapper"
      >
        {eventPhotos.slice(0, 6).map((photo, index) => (
          <SwiperSlide key={index}>
            <div
              className="page-intro__slide"
              style={{ backgroundImage: `url('${photo}')` }}
            >
              <div className="container">
                {/* Clean slide without text overlay */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="page-intro__data">
        <div className="container">
          <div className="page-intro__active-content">
            <div className="page-intro__content-item">
              {/* <i className="icon-right" /> */}
              <div className="page-intro__data-item-content">
                <h4 className="page-intro__data-title">
                  {slideContent[activeSlide]?.title}
                </h4>
                <Link
                  href={slideContent[activeSlide]?.ctaLink || "#"}
                  className="page-intro__data-cta"
                >
                  {slideContent[activeSlide]?.ctaText}
                </Link>
              </div>
            </div>

            {/* Slide indicators */}
            <div className="page-intro__indicators">
              {eventPhotos.map((_, index) => (
                <div
                  key={index}
                  className={`page-intro__indicator ${
                    index === activeSlide ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
