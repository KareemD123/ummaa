import Link from "next/link";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Page-intro styles are imported in main.scss

const PageIntro = () => {
  SwiperCore.use([EffectFade, Navigation, Autoplay]);

  return (
    <section className="page-intro">
      <Swiper
        navigation
        effect="slide"
        speed={2000}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="swiper-wrapper"
      >
        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/uoftimg3.jpg')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h3>Connecting Muslim Alumni Across Generations</h3>
                <Link href="/register" className="page-intro__cta-button">
                  <i className="icon-right" />
                  Join UMMAA
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="page-intro__slide"
            style={{ backgroundImage: "url('/images/UofTcampus.avif')" }}
          >
            <div className="container">
              <div className="page-intro__slide__content">
                <h3>Professional Excellence Through Community</h3>
                <Link href="/events" className="page-intro__cta-button">
                  <i className="icon-right" />
                  View Events
                </Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="page-intro__data">
        <div className="container">
          <ul className="page-intro__data-items">
            <li>
              <i className="icon-shipping" />
              <div className="page-intro__data-item-content">
                <h4>Growing Network</h4>
                <p>100+ Muslim alumni across all U of T faculties</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping" />
              <div className="page-intro__data-item-content">
                <h4>Professional Excellence</h4>
                <p>Our members lead in healthcare, tech, finance, and law</p>
              </div>
            </li>

            <li>
              <i className="icon-cash" />
              <div className="page-intro__data-item-content">
                <h4>Student Support</h4>
                <p>
                  Mentorship and scholarship opportunities for current students
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
