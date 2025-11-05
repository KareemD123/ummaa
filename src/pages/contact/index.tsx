import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import Footer from "@/components/footer";
import Main from "@/layouts/Main";

interface FormData {
  name: string;
  email: string;
  inquiryType: string;
  message: string;
}

const Contact: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const inquiryTypes = [
    { value: "volunteering", label: "Volunteering Opportunities" },
    { value: "getting-involved", label: "Getting Involved with UMMAA" },
    { value: "meet-greet", label: "Request a Meet & Greet" },
    { value: "learn-more", label: "Learn More Information" },
    { value: "connect-alumni", label: "Connect with Alumni" },
    { value: "general", label: "General Inquiry" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "admin@ummaa.org",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", inquiryType: "", message: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us - University Muslim Alumni Association</title>
        <meta
          name="description"
          content="Get in touch with UMMAA for volunteering, events, networking, and more. We're here to help connect you with our alumni community."
        />
      </Head>
      <Main>
        <div className="contact-page">
          <div className="contact-hero">
            <div className="container">
              <h1>Contact Us</h1>
              <p>
                We'd love to hear from you! Reach out to learn more about UMMAA,
                get involved, or connect with our community.
              </p>
            </div>
          </div>

          <div className="contact-content">
            <div className="container">
              <div className="inquiry-types">
                <h2>How Can We Help You?</h2>
                <div className="inquiry-grid">
                  <div className="inquiry-card">
                    <h3>Volunteering</h3>
                    <p>
                      Join our team and make a difference in the Muslim alumni
                      community
                    </p>
                  </div>
                  <div className="inquiry-card">
                    <h3>Getting Involved</h3>
                    <p>
                      Discover ways to participate in UMMAA activities and
                      initiatives
                    </p>
                  </div>
                  <div className="inquiry-card">
                    <h3>Meet & Greet</h3>
                    <p>
                      Request a casual meeting with our team or fellow alumni
                    </p>
                  </div>
                  <div className="inquiry-card">
                    <h3>Learn More</h3>
                    <p>
                      Get detailed information about our programs and services
                    </p>
                  </div>
                  <div className="inquiry-card">
                    <h3>Connect with Alumni</h3>
                    <p>
                      Network with fellow Muslim alumni in your field or area
                    </p>
                  </div>
                  <div className="inquiry-card">
                    <h3>General Inquiry</h3>
                    <p>Any other questions or feedback you'd like to share</p>
                  </div>
                </div>
              </div>

              <div className="contact-form-section">
                <div className="form-container">
                  <h2>Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name">Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="inquiryType">Inquiry Type *</label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select an inquiry type</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <div className="form-submit">
                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </button>
                    </div>

                    {submitStatus === "success" && (
                      <div className="form-message success">
                        Thank you for your message! We'll get back to you soon.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="form-message error">
                        Sorry, there was an error sending your message. Please
                        try again.
                      </div>
                    )}
                  </form>
                </div>

                <div className="contact-info">
                  <h3>Alternative Contacts</h3>
                  <div className="contact-methods">
                    <div className="contact-method">
                      <div className="method-content">
                        <h4>Email</h4>
                        <p>info@ummaa.org</p>
                      </div>
                    </div>
                    <div className="contact-method">
                      <div className="method-content">
                        <h4>Instagram</h4>
                        <p>
                          <a
                            href="https://www.instagram.com/ummaa_uoft/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            @ummaa_uoft
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="contact-method">
                      <div className="method-content">
                        <h4>LinkedIn</h4>
                        <p>
                          <a
                            href="https://www.linkedin.com/company/university-of-toronto-muslim-alumni-association"
                            target="_blank"
                            rel="noreferrer"
                          >
                            University of Toronto Muslim Alumni Association
                          </a>
                        </p>
                      </div>
                    </div>
                    {/* <div className="contact-method">
                      <div className="method-content">
                        <h4>Response Time</h4>
                        <p>We typically respond within 24-48 hours</p>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Main>
    </>
  );
};

export default Contact;
