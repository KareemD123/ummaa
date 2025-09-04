import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

import Main from "@/layouts/Main";

interface DonationFormData {
  donationCause: string;
  amount: string;
  customAmount: string;
  isAnonymous: boolean;
  donorName: string;
  donorEmail: string;
  donorPhone: string;
  paymentMethod: string;
  message: string;
}

const Donate: NextPage = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    donationCause: "",
    amount: "",
    customAmount: "",
    isAnonymous: false,
    donorName: "",
    donorEmail: "",
    donorPhone: "",
    paymentMethod: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const donationCauses = [
    {
      value: "operations",
      label: "Support Operations & Events",
      description: "Help fund our day-to-day operations and community events",
    },
    {
      value: "scholarship",
      label: "Scholarship Funding",
      description: "Support educational opportunities for Muslim students",
    },
    {
      value: "university",
      label: "University Alumni Fund",
      description:
        "Contribute directly to University of Toronto alumni initiatives",
    },
    {
      value: "charity",
      label: "Charitable Causes",
      description:
        "Support various charitable initiatives and community outreach",
    },
  ];

  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"];

  const paymentMethods = [
    {
      value: "stripe",
      label: "Credit/Debit Card (Stripe)",
      description: "Secure online payment",
    },
    {
      value: "paypal",
      label: "PayPal",
      description: "Pay with your PayPal account",
    },
    {
      value: "etransfer",
      label: "E-Transfer",
      description: "Canadian electronic transfer",
    },
    {
      value: "call",
      label: "Book a Call",
      description: "Schedule a call to arrange donation",
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleAmountSelect = (amount: string) => {
    setFormData((prev) => ({
      ...prev,
      amount: amount,
      customAmount: "",
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // TODO: Implement actual donation processing logic
      // For now, simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Donation form submitted:", formData);

      if (formData.paymentMethod === "call") {
        // Redirect to booking system or show booking info
        alert(
          "Thank you! We'll contact you within 24 hours to arrange your donation.",
        );
      } else {
        // Process payment through selected method
        alert(`Processing donation via ${formData.paymentMethod}...`);
      }

      setSubmitStatus("success");
    } catch (error) {
      console.error("Donation submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const finalAmount =
    formData.amount === "custom" ? formData.customAmount : formData.amount;

  return (
    <>
      <Head>
        <title>Donate - University Muslim Alumni Association</title>
        <meta
          name="description"
          content="Support UMMAA's mission by donating to operations, scholarships, university initiatives, or charitable causes. Every contribution makes a difference."
        />
      </Head>
      <Main>
        <div className="donate-page">
          <div className="donate-hero">
            <div className="container">
              <h1>Support Our Mission</h1>
              <p>
                Your generous contribution helps us build a stronger Muslim
                alumni community, support students, and create meaningful
                impact. Every donation, big or small, makes a difference in
                someone's life.
              </p>
            </div>
          </div>

          <div className="donate-content">
            <div className="container">
              <div className="donation-causes">
                <h2>Choose Your Impact</h2>
                <div className="causes-grid">
                  {donationCauses.map((cause) => (
                    <div key={cause.value} className="cause-card">
                      <h3>{cause.label}</h3>
                      <p>{cause.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="donation-form-section">
                <div className="form-container">
                  <h2>Make Your Donation</h2>
                  <form onSubmit={handleSubmit} className="donation-form">
                    {/* Donation Cause Selection */}
                    <div className="form-group">
                      <label htmlFor="donationCause">
                        Select Donation Cause *
                      </label>
                      <select
                        id="donationCause"
                        name="donationCause"
                        value={formData.donationCause}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">
                          Choose where your donation goes
                        </option>
                        {donationCauses.map((cause) => (
                          <option key={cause.value} value={cause.value}>
                            {cause.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Amount Selection */}
                    <div className="form-group">
                      <label>Donation Amount *</label>
                      <div className="amount-selection">
                        <div className="predefined-amounts">
                          {predefinedAmounts.map((amount) => (
                            <button
                              key={amount}
                              type="button"
                              className={`amount-btn ${formData.amount === amount ? "selected" : ""}`}
                              onClick={() => handleAmountSelect(amount)}
                            >
                              ${amount}
                            </button>
                          ))}
                          <button
                            type="button"
                            className={`amount-btn ${formData.amount === "custom" ? "selected" : ""}`}
                            onClick={() => handleAmountSelect("custom")}
                          >
                            Custom
                          </button>
                        </div>

                        {formData.amount === "custom" && (
                          <div className="custom-amount">
                            <input
                              type="number"
                              name="customAmount"
                              value={formData.customAmount}
                              onChange={handleInputChange}
                              placeholder="Enter custom amount"
                              min="1"
                              required
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Anonymous Donation Toggle */}
                    <div className="form-group">
                      <div className="checkbox-group">
                        <input
                          type="checkbox"
                          id="isAnonymous"
                          name="isAnonymous"
                          checked={formData.isAnonymous}
                          onChange={handleInputChange}
                        />
                        <label htmlFor="isAnonymous">
                          Make this donation anonymous
                        </label>
                      </div>
                      <p className="field-note">
                        Anonymous donations will not be publicly recognized, but
                        we'll still send you a receipt.
                      </p>
                    </div>

                    {/* Donor Information (shown only if not anonymous) */}
                    {!formData.isAnonymous && (
                      <div className="donor-info-section">
                        <h3>Donor Information</h3>
                        <div className="form-row">
                          <div className="form-group">
                            <label htmlFor="donorName">Full Name *</label>
                            <input
                              type="text"
                              id="donorName"
                              name="donorName"
                              value={formData.donorName}
                              onChange={handleInputChange}
                              required={!formData.isAnonymous}
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="donorEmail">Email Address *</label>
                            <input
                              type="email"
                              id="donorEmail"
                              name="donorEmail"
                              value={formData.donorEmail}
                              onChange={handleInputChange}
                              required={!formData.isAnonymous}
                              placeholder="Enter your email address"
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="donorPhone">
                            Phone Number (Optional)
                          </label>
                          <input
                            type="tel"
                            id="donorPhone"
                            name="donorPhone"
                            value={formData.donorPhone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                          />
                        </div>
                      </div>
                    )}

                    {/* Payment Method Selection */}
                    <div className="form-group">
                      <label htmlFor="paymentMethod">Payment Method *</label>
                      <div className="payment-methods">
                        {paymentMethods.map((method) => (
                          <div key={method.value} className="payment-method">
                            <input
                              type="radio"
                              id={method.value}
                              name="paymentMethod"
                              value={method.value}
                              checked={formData.paymentMethod === method.value}
                              onChange={handleInputChange}
                              required
                            />
                            <label htmlFor={method.value}>
                              <div className="method-info">
                                <span className="method-name">
                                  {method.label}
                                </span>
                                <span className="method-description">
                                  {method.description}
                                </span>
                              </div>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Optional Message */}
                    <div className="form-group">
                      <label htmlFor="message">Message (Optional)</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Share why you're donating or leave a message for the community..."
                      />
                    </div>

                    {/* Donation Summary */}
                    {finalAmount && formData.donationCause && (
                      <div className="donation-summary">
                        <h3>Donation Summary</h3>
                        <div className="summary-details">
                          <div className="summary-row">
                            <span>Cause:</span>
                            <span>
                              {
                                donationCauses.find(
                                  (c) => c.value === formData.donationCause,
                                )?.label
                              }
                            </span>
                          </div>
                          <div className="summary-row">
                            <span>Amount:</span>
                            <span>${finalAmount}</span>
                          </div>
                          <div className="summary-row">
                            <span>Donor:</span>
                            <span>
                              {formData.isAnonymous
                                ? "Anonymous"
                                : formData.donorName || "Not specified"}
                            </span>
                          </div>
                          <div className="summary-row">
                            <span>Payment:</span>
                            <span>
                              {paymentMethods.find(
                                (p) => p.value === formData.paymentMethod,
                              )?.label || "Not selected"}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="form-submit">
                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={
                          isSubmitting ||
                          !finalAmount ||
                          !formData.donationCause ||
                          !formData.paymentMethod
                        }
                      >
                        {isSubmitting
                          ? "Processing..."
                          : formData.paymentMethod === "call"
                            ? "Schedule Donation Call"
                            : `Donate $${finalAmount || "0"}`}
                      </button>
                    </div>

                    {submitStatus === "success" && (
                      <div className="form-message success">
                        Thank you for your generous donation! We'll process your
                        contribution and send you a receipt.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="form-message error">
                        Sorry, there was an error processing your donation.
                        Please try again or contact us directly.
                      </div>
                    )}
                  </form>
                </div>

                <div className="donation-info">
                  <h3>Donation Information</h3>
                  <div className="info-cards">
                    <div className="info-card">
                      <h4>Tax Receipts</h4>
                      <p>
                        All donations are eligible for tax receipts. You'll
                        receive your receipt within 5 business days.
                      </p>
                    </div>
                    <div className="info-card">
                      <h4>Secure Processing</h4>
                      <p>
                        All payments are processed securely through encrypted
                        channels. Your financial information is protected.
                      </p>
                    </div>
                    <div className="info-card">
                      <h4>Questions?</h4>
                      <p>
                        Contact us at donations@ummaa.org or book a call to
                        discuss your donation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Donate;
