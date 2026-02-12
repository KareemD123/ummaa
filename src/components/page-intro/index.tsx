import Link from "next/link";
import { useState } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { eventPhotos } from "@/config/imageUrls";

// Page-intro styles are imported in main.scss

const PageIntro = () => {
  SwiperCore.use([EffectFade, Navigation, Autoplay]);
  const [activeSlide, setActiveSlide] = useState(0);

  // Array of event photos for the carousel from centralized config
  const carouselPhotos = [
    eventPhotos.photo46,
    eventPhotos.photo03,
    eventPhotos.photo25,
    eventPhotos.photo49,
    eventPhotos.photo08,
    eventPhotos.photo10,
    eventPhotos.photo17,
  ];

  // Slide content data
  const slideContent = [
    {
      title: "Connecting Muslim Alumni Across Generations",
      ctaText: "Join UMMAA",
      ctaLink: "/members/join",
    },
    {
      title: "Professional Excellence Through Community",
      ctaText: "View Events",
      ctaLink: "/events",
    },
    {
      title: "Building Lasting Connections",
      ctaText: "Learn More",
      ctaLink: "/about/mission",
    },
    {
      title: "Celebrating Our Heritage",
      ctaText: "View Gallery",
      ctaLink: "/events/past-events",
    },
    {
      title: "Connecting Muslim Alumni Across Generations",
      ctaText: "Join UMMAA",
      ctaLink: "/members/join",
    },
    {
      title: "Professional Excellence Through Community",
      ctaText: "View Events",
      ctaLink: "/events",
    },
    {
      title: "Building Lasting Connections",
      ctaText: "Learn More",
      ctaLink: "/about/mission",
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
        {carouselPhotos.map((photo, index) => (
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

      {/* Centered content overlay */}
      <div className="page-intro__overlay">
        <div className="page-intro__content-card">
          <h2 className="page-intro__title">
            {slideContent[activeSlide]?.title}
          </h2>
          <Link
            href={slideContent[activeSlide]?.ctaLink || "#"}
            className="page-intro__cta-button"
          >
            {slideContent[activeSlide]?.ctaText}
            <i className="icon-right" />
          </Link>
        </div>

        {/* Slide indicators */}
        <div className="page-intro__indicators">
          {carouselPhotos.map((_, index) => (
            <div
              key={index}
              className={`page-intro__indicator ${
                index === activeSlide ? "active" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
