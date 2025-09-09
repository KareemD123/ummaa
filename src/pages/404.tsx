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
              <svg
                className="rocket-icon"
                width="150"
                height="180"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rocket body */}
                <ellipse cx="50" cy="50" rx="18" ry="45" fill="#31708e" />

                {/* Rocket nose cone */}
                {/* <path d="M32 25 L50 5 L68 25 Z" fill="#31708e" /> */}

                {/* Rocket fins */}
                <path d="M32 75 L25 95 L32 88 Z" fill="#31708e" />
                <path d="M68 75 L75 95 L68 88 Z" fill="#31708e" />

                {/* Rocket window */}
                <circle cx="50" cy="40" r="9" fill="#87CEEB" />

                {/* Rocket details */}
                <rect x="41" y="55" width="18" height="4" fill="#87CEEB" />
                <rect x="41" y="65" width="18" height="4" fill="#87CEEB" />
              </svg>
              <div className="rocket-flames">
                <div className="flame flame-1"></div>
                <div className="flame flame-2"></div>
                <div className="flame flame-3"></div>
              </div>
              <div className="rocket-particles">
                <div className="particle particle-1"></div>
                <div className="particle particle-2"></div>
                <div className="particle particle-3"></div>
                <div className="particle particle-4"></div>
              </div>
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
