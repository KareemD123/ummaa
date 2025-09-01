import Link from "next/link";

import Layout from "../layouts/Main";

const RegisterPage = () => (
  <Layout>
    <section className="register-page">
      <div className="container">
        <Link href="/" className="register-page__back-button">
          <i className="icon-left" />
          Back to home
        </Link>

        <div className="register-page__form-block">
          <h2 className="register-page__title">Join the UMMAA Community</h2>
          <p className="register-page__description">
            Create your account to connect with fellow Muslim alumni, access
            exclusive events, and join our growing community.
          </p>

          <form className="register-page__form">
            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="First Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                placeholder="Last Name"
                type="text"
              />
            </div>

            <div className="form__input-row">
              <input className="form__input" placeholder="Email" type="text" />
            </div>

            <div className="form__input-row">
              <input
                className="form__input"
                type="Password"
                placeholder="Password"
              />
            </div>

            <div className="form__info">
              <div className="checkbox-wrapper">
                <label
                  htmlFor="check-signed-in"
                  className="checkbox checkbox--sm"
                >
                  <input
                    name="signed-in"
                    type="checkbox"
                    id="check-signed-in"
                  />
                  <span className="checkbox__check" />
                  <p>
                    I agree to the Google Terms of Service and Privacy Policy
                  </p>
                </label>
              </div>
            </div>

            <button
              type="button"
              className="btn btn--rounded btn--yellow btn-submit"
            >
              Sign up
            </button>

            <p className="form__signup-link">
              <Link href="/login">Are you already a member?</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  </Layout>
);

export default RegisterPage;
