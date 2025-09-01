import Link from "next/link";

import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import Subscribe from "@/components/subscribe";

import Layout from "../layouts/Main";

// Homepage styles are imported in main.scss

const IndexPage = () => {
  return (
    <Layout>
      <div className="homepage">
        <PageIntro />

        <section className="section homepage__section--transparent">
          <div className="container">
            <div className="homepage__community-stats">
              <h3 className="homepage__community-stats-title">
                Our Community Impact
              </h3>
              {/* TODO: Fetch these stats dynamically */}
              <div className="homepage__community-stats-grid">
                <div>
                  <h4 className="homepage__community-stats-number">150+</h4>
                  <p className="homepage__community-stats-label">
                    Active Alumni
                  </p>
                </div>
                <div>
                  <h4 className="homepage__community-stats-number">50+</h4>
                  <p className="homepage__community-stats-label">
                    Available Mentors
                  </p>
                </div>
                <div>
                  <h4 className="homepage__community-stats-number">6</h4>
                  <p className="homepage__community-stats-label">
                    Industries Represented
                  </p>
                </div>
                <div>
                  <h4 className="homepage__community-stats-number">15+</h4>
                  <p className="homepage__community-stats-label">
                    Years of Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="homepage__featured">
          <div className="container">
            <article
              style={{ backgroundImage: "url(/images/uoftcampusimg1.png)" }}
              className="homepage__featured-item homepage__featured-item-large"
            >
              <div className="homepage__featured-item-content">
                <h3>Join Our Growing Community</h3>
                <Link href="/register" className="btn btn--rounded">
                  Become a Member
                </Link>
              </div>
            </article>

            <article
              style={{ backgroundImage: "url(/images/uoftimg2.jpg)" }}
              className="homepage__featured-item homepage__featured-item-small-first"
            >
              <div className="homepage__featured-item-content">
                <h3>Upcoming Events</h3>
                <Link href="/events" className="btn btn--rounded">
                  View Calendar
                </Link>
              </div>
            </article>

            <article
              style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
              className="homepage__featured-item homepage__featured-item-small"
            >
              <div className="homepage__featured-item-content">
                <h3>Mentorship Program</h3>
                <Link href="/mentorship" className="btn btn--rounded">
                  GET INVOLVED
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section__intro">
              <h4>Our Mission & Values</h4>
            </header>

            <ul className="homepage__mission-values">
              <li>
                <i className="icon-shipping" />
                <div className="homepage__mission-values-content">
                  <h4>Professional Excellence</h4>
                  <p>
                    Connecting Muslim alumni across all faculties and decades to
                    foster strong professional networks rooted in academic
                    excellence.
                  </p>
                </div>
              </li>

              <li>
                <i className="icon-payment" />
                <div className="homepage__mission-values-content">
                  <h4>Student Support</h4>
                  <p>
                    Supporting current Muslim students through mentorship,
                    career guidance, and scholarship opportunities.
                  </p>
                </div>
              </li>

              <li>
                <i className="icon-cash" />
                <div className="homepage__mission-values-content">
                  <h4>Community Building</h4>
                  <p>
                    Creating meaningful connections among alumni who share
                    common values, experiences, and Islamic principles.
                  </p>
                </div>
              </li>

              <li>
                <i className="icon-materials" />
                <div className="homepage__mission-values-content">
                  <h4>Social Responsibility</h4>
                  <p>
                    Contributing positively to Canadian society through
                    community engagement, interfaith dialogue, and service.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* <ProductsFeatured /> */}
        <Subscribe />

        <section className="section">
          <div className="container">
            <div className="homepage__membership-section">
              <h2 className="homepage__membership-title">Join Our Community</h2>
              <p className="homepage__membership-description">
                Our target membership includes Muslim alumni from all U of T
                campuses (St. George, Mississauga, Scarborough) spanning
                undergraduate, graduate, and professional programs across all
                faculties.
              </p>
              <Link href="/register" className="btn btn--rounded btn--yellow">
                Become a Member
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </Layout>
  );
};

export default IndexPage;
