import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

import Layout from "../../layouts/Main";

// About page styles are imported in main.scss

const About = () => {
  return (
    <Layout>
      <Breadcrumb />

      <section className="about-page">
        <div className="container">
          <div className="about-page__header">
            <h1 className="about-page__title">About UMMAA</h1>
            <p className="about-page__subtitle">
              The University of Toronto Muslim Alumni Association serves as a
              bridge connecting Muslim graduates across all faculties and
              decades, fostering a strong network of professional and personal
              relationships rooted in shared faith and academic excellence.
            </p>
          </div>

          <div className="about-page__content">
            <div className="about-page__mission">
              <h2 className="about-page__section-title">Our Mission</h2>
              <p className="about-page__mission-text">
                UMMAA aims to enhance the University of Toronto community by
                promoting Islamic values of service, knowledge-seeking, and
                social responsibility. We strive to be a platform where Muslim
                alumni can give back to their alma mater, support the next
                generation of Muslim students, and contribute positively to
                Canadian society through professional excellence, community
                engagement, and interfaith dialogue.
              </p>
              <p className="about-page__mission-text">
                UMMAA is committed to building an inclusive and welcoming
                community that embraces the rich diversity of Muslim alumni,
                including different cultural backgrounds, professional
                experiences, and perspectives on faith practice.
              </p>
            </div>

            <div className="about-page__goals">
              <h2 className="about-page__section-title">Our Goals</h2>

              <div className="about-page__goals-grid">
                <div className="about-page__goals-section">
                  <h3 className="about-page__goals-subtitle">
                    Short Term Goals
                  </h3>
                  <ul className="about-page__goals-list">
                    <li>
                      Establish a foundational membership base of 100+ Muslim
                      alumni within the first year
                    </li>
                    <li>
                      Launch quarterly networking events including industry
                      panels and professional mixers
                    </li>
                    <li>
                      Create a mentorship program pairing experienced alumni
                      with current Muslim students
                    </li>
                    <li>
                      Organize annual Iftar dinner and Eid celebration events
                      for community building
                    </li>
                    <li>
                      Develop partnerships with existing U of T Muslim student
                      organizations
                    </li>
                    <li>
                      Establish an online community platform for year-round
                      engagement
                    </li>
                  </ul>
                </div>

                <div className="about-page__goals-section">
                  <h3 className="about-page__goals-subtitle">
                    Long Term Goals
                  </h3>
                  <ul className="about-page__goals-list">
                    <li>
                      Build an endowment fund to provide scholarships for Muslim
                      students facing financial hardship
                    </li>
                    <li>
                      Establish UMMAA as a strong professional network for
                      Muslim U of T graduates globally
                    </li>
                    <li>
                      Create industry-specific chapters (healthcare, technology,
                      finance, law, education)
                    </li>
                    <li>
                      Develop international chapters in major cities with
                      significant Muslim U of T alumni populations
                    </li>
                    <li>
                      Launch an annual conference featuring prominent Muslim
                      leaders in academia, business, and public service
                    </li>
                    <li>
                      Establish regular community give-back initiatives
                      including Ramadan food drives
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="about-page__activities">
              <h2 className="about-page__section-title">Our Activities</h2>

              <div className="about-page__activities-grid">
                <div className="about-page__activity-card">
                  <h4 className="about-page__activity-title">
                    Professional Development
                  </h4>
                  <p className="about-page__activity-description">
                    Industry panels, career workshops, and networking events
                    targeting alumni at all career stages
                  </p>
                </div>

                <div className="about-page__activity-card">
                  <h4 className="about-page__activity-title">
                    Student Support
                  </h4>
                  <p className="about-page__activity-description">
                    Mentorship matching, scholarship programs, and career
                    guidance sessions for current Muslim students
                  </p>
                </div>

                <div className="about-page__activity-card">
                  <h4 className="about-page__activity-title">
                    Community Building
                  </h4>
                  <p className="about-page__activity-description">
                    Annual Iftar dinners, Eid celebrations, family BBQs, and
                    social gatherings to strengthen alumni bonds
                  </p>
                </div>

                <div className="about-page__activity-card">
                  <h4 className="about-page__activity-title">
                    Educational Initiatives
                  </h4>
                  <p className="about-page__activity-description">
                    Islamic heritage programming, interfaith dialogue events,
                    and lectures on contemporary issues
                  </p>
                </div>

                <div className="about-page__activity-card">
                  <h3 className="about-page__activity-title">Fundraising</h3>
                  <p className="about-page__activity-description">
                    Charity drives during Ramadan, scholarship fundraising
                    galas, and community service projects
                  </p>
                </div>

                <div className="about-page__activity-card">
                  <h3 className="about-page__activity-title">Collaboration</h3>
                  <p className="about-page__activity-description">
                    Joint events with other U of T alumni groups, Muslim
                    professional organizations, and faith-based communities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default About;
