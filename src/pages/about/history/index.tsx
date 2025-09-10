import Footer from "@/components/footer";

import Layout from "../../../layouts/Main";

// History page styles are imported in main.scss

const History = () => {
  return (
    <Layout>
      <div className="history-hero">
        <div className="container">
          <h1>Our History</h1>
          <p>
            The story of how UMMAA was founded and our journey to build the
            largest and most vibrant Muslim identity at the University of
            Toronto.
          </p>
        </div>
      </div>

      <section className="history-page">
        <div className="container">
          <div className="history-page__content">
            <div className="history-page__section">
              <div className="history-page__text-content">
                <p className="history-page__text">
                  The University of Toronto Muslim Alumni Association (UMMAA)
                  was founded by a driven group of Muslim Alumni who recognized
                  the need for a lasting community that supports both graduates
                  and current students. Rooted in our shared experiences as
                  active members of the University of Toronto's Muslim Students'
                  Association (MSA), we sought to strengthen the connection
                  between alumni and the student body.
                </p>
                <p className="history-page__text">
                  Through career networking events and mentorship initiatives in
                  the MSA, we witnessed the powerful impact alumni could have on
                  students' academic and professional journeys. These efforts
                  revealed a greater need—an official Muslim Alumni Association
                  that could serve as a hub for connection, support, and growth.
                </p>
                <p className="history-page__text">
                  Our vision is to cultivate the largest and most vibrant Muslim
                  identity at the University of Toronto. We aim to build a
                  strong, value-driven network that fosters leadership,
                  character development, and intellectual engagement. As a
                  visible minority, it is vital to empower Muslim voices,
                  nurture future leaders, and inspire excellence—starting with
                  meaningful conversations in the classroom and extending far
                  beyond.
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

export default History;
