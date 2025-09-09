import Link from "next/link";
import { useForm } from "react-hook-form";

import Footer from "../../components/footer";
import Layout from "../../layouts/Main";
import { server } from "../../utils/server";
import { postData } from "../../utils/services";

type ForgotMail = {
  email: string;
};

const ForgotPassword = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data: ForgotMail) => {
    await postData(`${server}/api/login`, {
      email: data.email,
    });
  };

  return (
    <Layout>
      <section className="forgot-password-page">
        <div className="container">
          <Link
            href="/auth/login"
            className="forgot-password-page__back-button"
          >
            <i className="icon-left" />
            Back to login
          </Link>

          <div className="forgot-password-page__form-block">
            <h2 className="forgot-password-page__title">
              Forgot your password?
            </h2>
            <p className="forgot-password-page__description">
              Enter your email address and we'll send you a link to reset your
              password.
            </p>

            <form
              className="forgot-password-page__form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="form__input-row">
                <input
                  className="form__input"
                  placeholder="email"
                  type="text"
                  name="email"
                  ref={register({
                    required: true,
                    pattern:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  })}
                />

                {errors.email && errors.email.type === "required" && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}

                {errors.email && errors.email.type === "pattern" && (
                  <p className="message message--error">
                    Please write a valid email
                  </p>
                )}
              </div>

              <div className="form__input-row">
                <input
                  className="form__input"
                  type="password"
                  placeholder="Password"
                  name="password"
                  ref={register({ required: true })}
                />
                {errors.password && errors.password.type === "required" && (
                  <p className="message message--error">
                    This field is required
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn--rounded btn--yellow btn-submit"
              >
                Reset password
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
};

export default ForgotPassword;
