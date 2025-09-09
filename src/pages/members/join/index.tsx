import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import Footer from "@/components/footer";
import Main from "@/layouts/Main";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  graduationYear: string;
  faculty: string;
  program: string;
  currentCity: string;
  currentCountry: string;
  profession: string;
  company: string;
  linkedinProfile: string;
  interests: string[];
  volunteerInterest: string;
  hearAboutUs: string;
  additionalComments: string;
}

const JoinPage: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    graduationYear: "",
    faculty: "",
    program: "",
    currentCity: "",
    currentCountry: "",
    profession: "",
    company: "",
    linkedinProfile: "",
    interests: [],
    volunteerInterest: "",
    hearAboutUs: "",
    additionalComments: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const faculties = [
    "Applied Science & Engineering",
    "Architecture, Landscape & Design",
    "Arts & Science",
    "Dentistry",
    "Education",
    "Forestry",
    "Information",
    "Kinesiology & Physical Education",
    "Law",
    "Management (Rotman)",
    "Medicine",
    "Music",
    "Nursing",
    "Pharmacy",
    "Public Health",
    "Social Work",
    "Theology",
    "Veterinary Medicine",
    "Other",
  ];

  const interestOptions = [
    "Networking Events",
    "Professional Development",
    "Mentorship Programs",
    "Community Service",
    "Religious Activities",
    "Career Guidance",
    "Social Events",
    "Alumni Panels",
    "Fundraising Events",
    "Educational Workshops",
  ];

  const volunteerOptions = [
    "Event Planning & Coordination",
    "Mentorship Program",
    "Social Media & Marketing",
    "Fundraising Initiatives",
    "Community Outreach",
    "Professional Development Workshops",
    "Alumni Relations",
    "Board/Committee Positions",
    "Not Interested at This Time",
  ];

  const hearAboutOptions = [
    "University of Toronto Alumni Network",
    "Social Media (Instagram, Facebook, LinkedIn)",
    "Word of Mouth/Friend Referral",
    "University Events",
    "UMMAA Website",
    "Other Muslim Organizations",
    "Professional Networks",
    "Other",
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

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: keyof FormData,
  ) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [field]: checked
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter((item) => item !== value),
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        // Reset form on successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          graduationYear: "",
          faculty: "",
          program: "",
          currentCity: "",
          currentCountry: "",
          profession: "",
          company: "",
          linkedinProfile: "",
          interests: [],
          volunteerInterest: "",
          hearAboutUs: "",
          additionalComments: "",
        });
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          result.message ||
            "An error occurred while submitting your application.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Network error. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <>
        <Head>
          <title>Thank You - University Muslim Alumni Association</title>
        </Head>
        <Main>
          <div className="join-page">
            <div className="join-hero">
              <div className="container">
                <h1>Thank You for Joining UMMAA!</h1>
                <p>
                  We're excited to welcome you to our community. You'll receive
                  a confirmation email shortly with next steps and information
                  about upcoming events.
                </p>
                <div className="success-actions">
                  <a href="/events" className="btn btn--rounded btn--yellow">
                    View Upcoming Events
                  </a>
                  <a href="/members" className="btn btn--rounded">
                    Explore Member Benefits
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Join UMMAA - University Muslim Alumni Association</title>
        <meta
          name="description"
          content="Join the University Muslim Alumni Association and connect with fellow Muslim graduates from the University of Toronto. Build meaningful relationships, advance your career, and give back to the community."
        />
      </Head>
      <Main>
        <div className="join-page">
          <div className="join-hero">
            <div className="container">
              <h1>Join UMMAA</h1>
              <p>
                Connect with fellow Muslim alumni from the University of
                Toronto. Build meaningful relationships, advance your career,
                and give back to our community.
              </p>
            </div>
          </div>

          <div className="join-content">
            <div className="container">
              <div className="join-form-section">
                <div className="form-container">
                  <h2>Membership Application</h2>
                  <p className="form-intro">
                    Please fill out the form below to join our community. All
                    fields marked with * are required.
                  </p>

                  <form onSubmit={onSubmit} className="join-form">
                    {/* Personal Information */}
                    <div className="form-section">
                      <h3>Personal Information</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="firstName">First Name *</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="lastName">Last Name *</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>

                      <div className="form-row">
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
                        <div className="form-group">
                          <label htmlFor="phone">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Academic Information */}
                    <div className="form-section">
                      <h3>Academic Background</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="graduationYear">
                            Graduation Year *
                          </label>
                          <input
                            type="number"
                            id="graduationYear"
                            name="graduationYear"
                            value={formData.graduationYear}
                            onChange={handleInputChange}
                            required
                            min="1950"
                            max={new Date().getFullYear() + 10}
                            placeholder="e.g., 2020"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="faculty">Faculty/School *</label>
                          <select
                            id="faculty"
                            name="faculty"
                            value={formData.faculty}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Select your faculty</option>
                            {faculties.map((faculty) => (
                              <option key={faculty} value={faculty}>
                                {faculty}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="program">Program/Degree *</label>
                        <input
                          type="text"
                          id="program"
                          name="program"
                          value={formData.program}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g., Bachelor of Commerce, Master of Engineering, etc."
                        />
                      </div>
                    </div>

                    {/* Current Information */}
                    <div className="form-section">
                      <h3>Current Information</h3>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="currentCity">Current City *</label>
                          <input
                            type="text"
                            id="currentCity"
                            name="currentCity"
                            value={formData.currentCity}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your current city"
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="currentCountry">
                            Current Country *
                          </label>
                          <input
                            type="text"
                            id="currentCountry"
                            name="currentCountry"
                            value={formData.currentCountry}
                            onChange={handleInputChange}
                            required
                            placeholder="Enter your current country"
                          />
                        </div>
                      </div>

                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="profession">
                            Current Profession/Role
                          </label>
                          <input
                            type="text"
                            id="profession"
                            name="profession"
                            value={formData.profession}
                            onChange={handleInputChange}
                            placeholder="e.g., Software Engineer, Doctor, Student, etc."
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="company">Company/Organization</label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            placeholder="Enter your current workplace"
                          />
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="linkedinProfile">
                          LinkedIn Profile
                        </label>
                        <input
                          type="url"
                          id="linkedinProfile"
                          name="linkedinProfile"
                          value={formData.linkedinProfile}
                          onChange={handleInputChange}
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                      </div>
                    </div>

                    {/* Interests and Involvement */}
                    <div className="form-section">
                      <h3>Interests & Involvement</h3>

                      <div className="form-group">
                        <label>
                          What UMMAA activities interest you? (Select all that
                          apply)
                        </label>
                        <div className="checkbox-grid">
                          {interestOptions.map((interest) => (
                            <label key={interest} className="checkbox-label">
                              <input
                                type="checkbox"
                                value={interest}
                                checked={formData.interests.includes(interest)}
                                onChange={(e) =>
                                  handleCheckboxChange(e, "interests")
                                }
                              />
                              <span>{interest}</span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="volunteerInterest">
                          Volunteer Opportunities
                        </label>
                        <select
                          id="volunteerInterest"
                          name="volunteerInterest"
                          value={formData.volunteerInterest}
                          onChange={handleInputChange}
                        >
                          <option value="">
                            Select your volunteer interest
                          </option>
                          {volunteerOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="hearAboutUs">
                          How did you hear about UMMAA? *
                        </label>
                        <select
                          id="hearAboutUs"
                          name="hearAboutUs"
                          value={formData.hearAboutUs}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select an option</option>
                          {hearAboutOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="additionalComments">
                          Additional Comments or Questions
                        </label>
                        <textarea
                          id="additionalComments"
                          name="additionalComments"
                          value={formData.additionalComments}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Share anything else you'd like us to know about you or any questions you have..."
                        />
                      </div>
                    </div>

                    <div className="form-submit">
                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "Submitting Application..."
                          : "Submit Application"}
                      </button>
                    </div>

                    {submitStatus === "error" && (
                      <div className="form-message error">
                        {errorMessage ||
                          "There was an error submitting your application. Please try again."}
                      </div>
                    )}
                  </form>
                </div>

                <div className="join-info">
                  <h3>What Happens Next?</h3>
                  <div className="next-steps">
                    <div className="step">
                      <div className="step-number">1</div>
                      <div className="step-content">
                        <h4>Application Review</h4>
                        <p>
                          We'll review your application within 2-3 business days
                        </p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">2</div>
                      <div className="step-content">
                        <h4>Welcome Email</h4>
                        <p>
                          You'll receive a welcome email with member resources
                          and upcoming events
                        </p>
                      </div>
                    </div>
                    <div className="step">
                      <div className="step-number">3</div>
                      <div className="step-content">
                        <h4>Get Connected</h4>
                        <p>
                          Join our WhatsApp group and LinkedIn network to start
                          connecting
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="contact-info">
                    <h4>Questions?</h4>
                    <p>
                      If you have any questions about membership or the
                      application process, feel free to{" "}
                      <a href="/contact">contact us</a> or email us at{" "}
                      <a href="mailto:membership@ummaa.org">
                        membership@ummaa.org
                      </a>
                    </p>
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

export default JoinPage;
