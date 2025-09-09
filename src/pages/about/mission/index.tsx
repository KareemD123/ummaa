import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

import Layout from "../../../layouts/Main";

// Mission page styles are imported in main.scss

const Mission = () => {
  return (
    <Layout>
      <Breadcrumb />

      <section className="mission-page">
        <div className="container">
          <div className="mission-page__header">
            <h1 className="mission-page__title">Mission and Vision</h1>
            <p className="mission-page__subtitle">
              Our commitment to connecting Muslim graduates and fostering a
              vibrant community rooted in shared faith, academic excellence, and
              professional growth.
            </p>
          </div>

          <div className="mission-page__content">
            <div className="mission-page__section">
              <h2 className="mission-page__section-title">Mission</h2>
              <div className="mission-page__text-content">
                <p className="mission-page__text">
                  The University of Toronto Muslim Alumni Association (UMMAA)
                  connects Muslim graduates from all faculties and generations,
                  fostering a vibrant network rooted in shared faith, academic
                  excellence, and professional growth. We are dedicated to
                  supporting current Muslim students through mentorship, career
                  guidance, and meaningful opportunities, while cultivating
                  lasting relationships among alumni who share common values and
                  experiences.
                </p>
              </div>
            </div>

            <div className="mission-page__section">
              <h2 className="mission-page__section-title">Vision</h2>
              <div className="mission-page__text-content">
                <p className="mission-page__text">
                  UMMAA envisions a thriving community where Muslim alumni
                  actively contribute to the University of Toronto and Muslim
                  Canadian Network through service, knowledge, and social
                  responsibility. We aim to promote Islamic values by empowering
                  alumni to give back, support future generations, and engage in
                  initiatives that reflect professional excellence, community
                  involvement, and interfaith collaboration.
                </p>
                <p className="mission-page__text">
                  We are committed to building an inclusive and welcoming
                  environment that celebrates the rich diversity of Muslim
                  alumni—embracing varied cultural backgrounds, career paths,
                  and perspectives on faith.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Mission;
