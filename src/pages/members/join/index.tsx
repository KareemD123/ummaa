import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import Footer from "@/components/footer";
import Main from "@/layouts/Main";

interface AcademicEntry {
  graduationYear: string;
  campus: string;
  faculty: string;
  otherFaculty?: string;
  program: string;
}

type ProfileType = "UofT Alumni" | "Current UofT Student" | "Community Member";

interface FormData {
  profileType: ProfileType;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  academicEntries: AcademicEntry[];
  currentCity: string;
  currentCountry: string;
  profession: string;
  company: string;
  linkedinProfile: string;
  interests: string[];
  hearAboutUs: string;
  additionalComments: string;
  includeInDirectory: boolean;
  friendReferrals: string[];
  favoriteMemory: string;
  agreeToTerms: boolean;
}

const JoinPage: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    profileType: "UofT Alumni",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    academicEntries: [
      {
        graduationYear: "",
        campus: "",
        faculty: "",
        otherFaculty: "",
        program: "",
      },
    ],
    currentCity: "",
    currentCountry: "",
    profession: "",
    company: "",
    linkedinProfile: "",
    interests: [],
    hearAboutUs: "",
    additionalComments: "",
    includeInDirectory: false,
    friendReferrals: [""],
    favoriteMemory: "",
    agreeToTerms: false,
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
    "Graduate Studies",
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

  const campuses = [
    "St. George (Downtown Toronto)",
    "Mississauga (UTM)",
    "Scarborough (UTSC)",
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
    if (field === "interests") {
      setFormData((prev) => ({
        ...prev,
        [field]: checked
          ? [...(prev[field] as string[]), value]
          : (prev[field] as string[]).filter((item) => item !== value),
      }));
    } else {
      // Handle boolean checkboxes like includeInDirectory, agreeToTerms
      setFormData((prev) => ({
        ...prev,
        [field]: checked,
      }));
    }
  };

  const handleAcademicChange = (
    index: number,
    field: keyof AcademicEntry,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      academicEntries: prev.academicEntries.map((entry, i) =>
        i === index ? { ...entry, [field]: value } : entry,
      ),
    }));
  };

  const addAcademicEntry = () => {
    setFormData((prev) => ({
      ...prev,
      academicEntries: [
        ...prev.academicEntries,
        {
          graduationYear: "",
          campus: "",
          faculty: "",
          otherFaculty: "",
          program: "",
        },
      ],
    }));
  };

  const removeAcademicEntry = (index: number) => {
    if (formData.academicEntries.length > 1) {
      setFormData((prev) => ({
        ...prev,
        academicEntries: prev.academicEntries.filter((_, i) => i !== index),
      }));
    }
  };

  const handleFriendReferralChange = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      friendReferrals: prev.friendReferrals.map((referral, i) =>
        i === index ? value : referral,
      ),
    }));
  };

  const addFriendReferral = () => {
    setFormData((prev) => ({
      ...prev,
      friendReferrals: [...prev.friendReferrals, ""],
    }));
  };

  const removeFriendReferral = (index: number) => {
    if (formData.friendReferrals.length > 1) {
      setFormData((prev) => ({
        ...prev,
        friendReferrals: prev.friendReferrals.filter((_, i) => i !== index),
      }));
    }
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
          profileType: "UofT Alumni",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          academicEntries: [
            {
              graduationYear: "",
              campus: "",
              faculty: "",
              otherFaculty: "",
              program: "",
            },
          ],
          currentCity: "",
          currentCountry: "",
          profession: "",
          company: "",
          linkedinProfile: "",
          interests: [],
          hearAboutUs: "",
          additionalComments: "",
          includeInDirectory: false,
          friendReferrals: [""],
          favoriteMemory: "",
          agreeToTerms: false,
        });
      } else {
        console.error(
          "Form submission failed:",
          result.message || "Unknown error",
        );
        setSubmitStatus("error");
        setErrorMessage(
          "Error submitting form. Please email info@ummaa.org with your information.",
        );
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
      setErrorMessage(
        "Error submitting form. Please email info@ummaa.org with your information.",
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
          <div className="join-page" style={{ height: "100vh" }}>
            <div className="join-hero" style={{ height: "100vh" }}>
              <div className="container" style={{ height: "100vh" }}>
                <h1>Thank You for Joining UMMAA!</h1>
                <p>
                  We're excited to welcome you to our community. You'll receive
                  a confirmation email shortly with next steps and information
                  about upcoming events.
                </p>
                {/* <div className="success-actions">
                  <a href="/events" className="btn btn--rounded btn--yellow">
                    View Upcoming Events
                  </a>
                  <a href="/members" className="btn btn--rounded">
                    Explore Member Benefits
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <Footer />
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
                    {/* Profile Type */}
                    <div className="form-section">
                      <h3>Profile Type</h3>
                      <div className="form-group">
                        <label htmlFor="profileType">
                          I am a <span className="required">*</span>
                        </label>
                        <select
                          id="profileType"
                          name="profileType"
                          value={formData.profileType}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="UofT Alumni">UofT Alumni</option>
                          <option value="Current UofT Student">
                            Current UofT Student
                          </option>
                          <option value="Community Member">
                            Community Member
                          </option>
                        </select>
                      </div>
                    </div>

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
                      <p className="section-description">
                        Please provide information about your University of
                        Toronto education. You can add multiple degrees if
                        applicable.
                      </p>

                      {formData.academicEntries.map((entry, index) => (
                        <div key={index} className="academic-entry">
                          <div className="academic-entry-header">
                            <h4>Degree {index + 1}</h4>
                            {formData.academicEntries.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeAcademicEntry(index)}
                                className="remove-entry-btn"
                              >
                                Remove
                              </button>
                            )}
                          </div>

                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor={`graduationYear-${index}`}>
                                Graduation Year *
                              </label>
                              <input
                                type="number"
                                id={`graduationYear-${index}`}
                                value={entry.graduationYear}
                                onChange={(e) =>
                                  handleAcademicChange(
                                    index,
                                    "graduationYear",
                                    e.target.value,
                                  )
                                }
                                required
                                min="1950"
                                max={new Date().getFullYear() + 10}
                                placeholder="e.g., 2020"
                              />
                            </div>
                            <div className="form-group">
                              <label htmlFor={`campus-${index}`}>
                                Campus *
                              </label>
                              <select
                                id={`campus-${index}`}
                                value={entry.campus}
                                onChange={(e) =>
                                  handleAcademicChange(
                                    index,
                                    "campus",
                                    e.target.value,
                                  )
                                }
                                required
                              >
                                <option value="">Select your campus</option>
                                {campuses.map((campus) => (
                                  <option key={campus} value={campus}>
                                    {campus}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>

                          <div className="form-row">
                            <div className="form-group">
                              <label htmlFor={`faculty-${index}`}>
                                Faculty/School *
                              </label>
                              <select
                                id={`faculty-${index}`}
                                value={entry.faculty}
                                onChange={(e) =>
                                  handleAcademicChange(
                                    index,
                                    "faculty",
                                    e.target.value,
                                  )
                                }
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
                            {entry.faculty === "Other" && (
                              <div className="form-group">
                                <label htmlFor={`otherFaculty-${index}`}>
                                  Please specify *
                                </label>
                                <input
                                  type="text"
                                  id={`otherFaculty-${index}`}
                                  value={entry.otherFaculty || ""}
                                  onChange={(e) =>
                                    handleAcademicChange(
                                      index,
                                      "otherFaculty",
                                      e.target.value,
                                    )
                                  }
                                  required
                                  placeholder="Enter your faculty/school"
                                />
                              </div>
                            )}
                          </div>

                          <div className="form-group">
                            <label htmlFor={`program-${index}`}>
                              Program/Degree *
                            </label>
                            <input
                              type="text"
                              id={`program-${index}`}
                              value={entry.program}
                              onChange={(e) =>
                                handleAcademicChange(
                                  index,
                                  "program",
                                  e.target.value,
                                )
                              }
                              required
                              placeholder="e.g., Bachelor of Commerce, Master of Engineering, etc."
                            />
                          </div>
                        </div>
                      ))}

                      <button
                        type="button"
                        onClick={addAcademicEntry}
                        className="add-entry-btn"
                      >
                        + Add Another Degree
                      </button>
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
                        <label htmlFor="favoriteMemory">
                          Favorite Memory (Optional)
                        </label>
                        <textarea
                          id="favoriteMemory"
                          name="favoriteMemory"
                          value={formData.favoriteMemory}
                          onChange={handleInputChange}
                          rows={3}
                          placeholder="Share with us a fun memory from university!"
                        />
                      </div>

                      <div className="form-group">
                        <label>Invite Friends (Optional)</label>
                        <p className="section-description">
                          Help us grow our community by recommending fellow UofT
                          Muslim alumni! You can invite multiple friends.
                        </p>

                        {formData.friendReferrals.map((referral, index) => (
                          <div key={index} className="friend-referral-entry">
                            <div className="friend-referral-input">
                              <input
                                type="text"
                                id={`friendReferral-${index}`}
                                value={referral}
                                onChange={(e) =>
                                  handleFriendReferralChange(
                                    index,
                                    e.target.value,
                                  )
                                }
                                placeholder="Enter name or email of a friend (e.g., John Doe - john@email.com)"
                              />
                              {formData.friendReferrals.length > 1 && (
                                <button
                                  type="button"
                                  onClick={() => removeFriendReferral(index)}
                                  className="remove-referral-btn"
                                >
                                  Remove
                                </button>
                              )}
                            </div>
                          </div>
                        ))}

                        <button
                          type="button"
                          onClick={addFriendReferral}
                          className="add-entry-btn"
                        >
                          + Add Another Friend
                        </button>
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

                    {/* Member Directory and Disclaimer */}
                    <div className="form-section">
                      <h3>Privacy & Directory</h3>

                      <div className="form-group checkbox-group">
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            name="includeInDirectory"
                            checked={formData.includeInDirectory}
                            onChange={(e) =>
                              handleCheckboxChange(e, "includeInDirectory")
                            }
                          />
                          <span>Include me in the UMMAA member directory</span>
                        </label>
                        <small className="field-help">
                          The member directory helps alumni connect with each
                          other. Your contact information will only be visible
                          to other verified UMMAA members.
                        </small>
                      </div>

                      <div className="disclaimer">
                        <h4>Privacy Policy</h4>
                        <div className="disclaimer-content">
                          <p>
                            The University of Toronto Muslim Alumni Association
                            respects your privacy. The information gathered
                            through the site is collected and used for the
                            administration of the association's advancement and
                            administrative activities. If you have questions,
                            please contact us at info@ummaa.org.
                          </p>
                          <p>
                            By submitting this application, you acknowledge
                            that:
                          </p>
                          <ul>
                            <li>
                              The information provided is accurate and complete
                            </li>
                            <li>
                              You agree to UMMAA's community guidelines and code
                              of conduct
                            </li>
                          </ul>
                        </div>

                        <div className="form-group checkbox-group required">
                          <label className="checkbox-label">
                            <input
                              type="checkbox"
                              name="agreeToTerms"
                              checked={formData.agreeToTerms}
                              onChange={(e) =>
                                handleCheckboxChange(e, "agreeToTerms")
                              }
                              required
                            />
                            <span>
                              I agree to the terms and conditions above *
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-submit">
                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={isSubmitting || !formData.agreeToTerms}
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
                      <a href="mailto:alumni@ummaa.org">alumni@ummaa.org</a>
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
