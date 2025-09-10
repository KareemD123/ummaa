import Link from "next/link";

import Footer from "../components/footer";
import Layout from "../layouts/Main";

const ErrorPage = () => (
  <Layout>
    <section className="error-page">
      <div className="container">
        <div className="error-page__content">
          <div className="error-page__icon">
            <div className="rocket-container">
              <img
                src="/images/gifs/rocket-umma.gif"
                alt="UMMAA Rocket"
                className="rocket-gif"
                width="200"
                height="200"
              />
            </div>
          </div>
          <h1 className="error-page__title">Launching Soon</h1>
          <p className="error-page__description">
            Something amazing is launching soon! Stay tuned.
          </p>
          <Link href="/" className="btn btn--rounded btn--yellow">
            Go to Home
          </Link>
        </div>
      </div>
    </section>
    <Footer />
  </Layout>
);

export default ErrorPage;
