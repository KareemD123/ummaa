import Link from "next/link";

import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import Subscribe from "@/components/subscribe";

import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section
        className="section"
        style={{ padding: "50px 0", backgroundColor: "transparent" }}
      >
        <div className="container">
          <div
            className="member-stats"
            style={{
              padding: "40px 0",
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "var(--charcoal)",
                marginBottom: "30px",
                fontSize: "24px",
              }}
            >
              Our Community Impact
            </h3>
            {/* TODO: Fetch these stats dynamically */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "30px",
              }}
            >
              <div>
                <h4
                  style={{
                    color: "var(--university-blue)",
                    fontSize: "42px",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  150+
                </h4>
                <p style={{ color: "var(--charcoal)" }}>Active Alumni</p>
              </div>
              <div>
                <h4
                  style={{
                    color: "var(--university-blue)",
                    fontSize: "42px",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  50+
                </h4>
                <p style={{ color: "var(--charcoal)" }}>Available Mentors</p>
              </div>
              <div>
                <h4
                  style={{
                    color: "var(--university-blue)",
                    fontSize: "42px",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  6
                </h4>
                <p style={{ color: "var(--charcoal)" }}>
                  Industries Represented
                </p>
              </div>
              <div>
                <h4
                  style={{
                    color: "var(--university-blue)",
                    fontSize: "42px",
                    fontWeight: "600",
                    marginBottom: "5px",
                  }}
                >
                  15+
                </h4>
                <p style={{ color: "var(--charcoal)" }}>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/uoftcampusimg1.png)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Join Our Growing Community</h3>
              <Link href="/register" className="btn btn--rounded">
                Become a Member
              </Link>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/uoftimg2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Upcoming Events</h3>
              <Link href="/events" className="btn btn--rounded">
                View Calendar
              </Link>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
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

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping" />
              <div className="data-item__content">
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
              <div className="data-item__content">
                <h4>Student Support</h4>
                <p>
                  Supporting current Muslim students through mentorship, career
                  guidance, and scholarship opportunities.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-cash" />
              <div className="data-item__content">
                <h4>Community Building</h4>
                <p>
                  Creating meaningful connections among alumni who share common
                  values, experiences, and Islamic principles.
                </p>
              </div>
            </li>

            <li>
              <i className="icon-materials" />
              <div className="data-item__content">
                <h4>Social Responsibility</h4>
                <p>
                  Contributing positively to Canadian society through community
                  engagement, interfaith dialogue, and service.
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
          <div
            className="membership-section"
            style={{
              backgroundColor: "var(--light-gray)",
              padding: "60px",
              borderRadius: "15px",
              textAlign: "center",
              margin: "50px 0",
            }}
          >
            <h2 style={{ color: "var(--charcoal)", marginBottom: "20px" }}>
              Join Our Community
            </h2>
            <p
              style={{
                color: "var(--charcoal)",
                fontSize: "18px",
                lineHeight: "1.6",
                marginBottom: "30px",
                maxWidth: "700px",
                margin: "0 auto 30px auto",
              }}
            >
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

      <Footer />
    </Layout>
  );
};

export default IndexPage;
