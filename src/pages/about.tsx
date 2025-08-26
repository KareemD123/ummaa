import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

import Layout from "../layouts/Main";

const About = () => {
  return (
    <Layout>
      <Breadcrumb />

      <section className="about-page" style={{ padding: "50px 0" }}>
        <div className="container">
          <div
            className="page-header"
            style={{ marginBottom: "50px", textAlign: "center" }}
          >
            <h1 style={{ color: "var(--color-primary)", marginBottom: "20px" }}>
              About UMMAA
            </h1>
            <p
              style={{
                color: "var(--color-text)",
                fontSize: "20px",
                maxWidth: "800px",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              The University of Toronto Muslim Alumni Association serves as a
              bridge connecting Muslim graduates across all faculties and
              decades, fostering a strong network of professional and personal
              relationships rooted in shared faith and academic excellence.
            </p>
          </div>

          <div
            className="about-content"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            <div className="mission-section" style={{ marginBottom: "50px" }}>
              <h2
                style={{
                  color: "var(--color-primary)",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                Our Mission
              </h2>
              <p
                style={{
                  color: "var(--color-text)",
                  fontSize: "16px",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
                UMMAA aims to enhance the University of Toronto community by
                promoting Islamic values of service, knowledge-seeking, and
                social responsibility. We strive to be a platform where Muslim
                alumni can give back to their alma mater, support the next
                generation of Muslim students, and contribute positively to
                Canadian society through professional excellence, community
                engagement, and interfaith dialogue.
              </p>
              <p
                style={{
                  color: "var(--color-text)",
                  fontSize: "16px",
                  lineHeight: "1.7",
                }}
              >
                UMMAA is committed to building an inclusive and welcoming
                community that embraces the rich diversity of Muslim alumni,
                including different cultural backgrounds, professional
                experiences, and perspectives on faith practice.
              </p>
            </div>

            <div className="goals-section" style={{ marginBottom: "50px" }}>
              <h2
                style={{
                  color: "var(--color-primary)",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                Our Goals
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
                  gap: "40px",
                }}
              >
                <div className="short-term-goals">
                  <h3
                    style={{
                      color: "var(--color-secondary)",
                      marginBottom: "20px",
                    }}
                  >
                    Short Term Goals
                  </h3>
                  <ul
                    style={{
                      color: "var(--color-text)",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <li style={{ marginBottom: "10px" }}>
                      Establish a foundational membership base of 100+ Muslim
                      alumni within the first year
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Launch quarterly networking events including industry
                      panels and professional mixers
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Create a mentorship program pairing experienced alumni
                      with current Muslim students
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Organize annual Iftar dinner and Eid celebration events
                      for community building
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Develop partnerships with existing U of T Muslim student
                      organizations
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Establish an online community platform for year-round
                      engagement
                    </li>
                  </ul>
                </div>

                <div className="long-term-goals">
                  <h3
                    style={{
                      color: "var(--color-secondary)",
                      marginBottom: "20px",
                    }}
                  >
                    Long Term Goals
                  </h3>
                  <ul
                    style={{
                      color: "var(--color-text)",
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    <li style={{ marginBottom: "10px" }}>
                      Build an endowment fund to provide scholarships for Muslim
                      students facing financial hardship
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Establish UMMAA as a strong professional network for
                      Muslim U of T graduates globally
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Create industry-specific chapters (healthcare, technology,
                      finance, law, education)
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Develop international chapters in major cities with
                      significant Muslim U of T alumni populations
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Launch an annual conference featuring prominent Muslim
                      leaders in academia, business, and public service
                    </li>
                    <li style={{ marginBottom: "10px" }}>
                      Establish regular community give-back initiatives
                      including Ramadan food drives
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div
              className="activities-section"
              style={{ marginBottom: "50px" }}
            >
              <h2
                style={{
                  color: "var(--color-primary)",
                  marginBottom: "30px",
                  textAlign: "center",
                }}
              >
                Our Activities
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                  gap: "30px",
                }}
              >
                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "var(--color-light)",
                    borderRadius: "10px",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "15px",
                    }}
                  >
                    Professional Development
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text)",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    Industry panels, career workshops, and networking events
                    targeting alumni at all career stages
                  </p>
                </div>

                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "var(--color-light)",
                    borderRadius: "10px",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "15px",
                    }}
                  >
                    Student Support
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text)",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    Mentorship matching, scholarship programs, and career
                    guidance sessions for current Muslim students
                  </p>
                </div>

                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "var(--color-light)",
                    borderRadius: "10px",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "15px",
                    }}
                  >
                    Community Building
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text)",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    Annual Iftar dinners, Eid celebrations, family BBQs, and
                    social gatherings to strengthen alumni bonds
                  </p>
                </div>

                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "var(--color-light)",
                    borderRadius: "10px",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "15px",
                    }}
                  >
                    Educational Initiatives
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text)",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    Islamic heritage programming, interfaith dialogue events,
                    and lectures on contemporary issues
                  </p>
                </div>

                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "var(--color-light)",
                    borderRadius: "10px",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "15px",
                    }}
                  >
                    Fundraising
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text)",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
                    Charity drives during Ramadan, scholarship fundraising
                    galas, and community service projects
                  </p>
                </div>

                <div
                  style={{
                    padding: "25px",
                    backgroundColor: "var(--color-light)",
                    borderRadius: "10px",
                  }}
                >
                  <h4
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "15px",
                    }}
                  >
                    Collaboration
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text)",
                      fontSize: "14px",
                      lineHeight: "1.6",
                    }}
                  >
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
