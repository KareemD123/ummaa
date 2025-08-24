import Footer from "@/components/footer";
import PageIntro from "@/components/page-intro";
import Subscribe from "@/components/subscribe";

import Layout from "../layouts/Main";

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      <section className="featured">
        <div className="container">
          <article
            style={{ backgroundImage: "url(/images/uoftcampusimg1.png)" }}
            className="featured-item featured-item-large"
          >
            <div className="featured-item__content">
              <h3>Join Our Growing Community</h3>
              <a href="/register" className="btn btn--rounded">
                Become a Member
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/uoftimg2.jpg)" }}
            className="featured-item featured-item-small-first"
          >
            <div className="featured-item__content">
              <h3>Upcoming Events</h3>
              <a href="/events" className="btn btn--rounded">
                View Calendar
              </a>
            </div>
          </article>

          <article
            style={{ backgroundImage: "url(/images/featured-3.jpg)" }}
            className="featured-item featured-item-small"
          >
            <div className="featured-item__content">
              <h3>Mentorship Program</h3>
              <a href="/mentorship" className="btn btn--rounded">
                GET INVOLVED
              </a>
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
      <Footer />
    </Layout>
  );
};

export default IndexPage;
