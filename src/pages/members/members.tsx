import { useEffect, useState } from "react";

import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

import Layout from "../../layouts/Main";

// Members page styles are imported in main.scss

type Member = {
  id: string;
  name: string;
  title: string;
  graduationYear: string;
  faculty: string;
  industry: string;
  location: string;
  company: string;
  expertise: string[];
  image: string;
  bio: string;
  linkedIn: string;
  email: string;
  mentorshipAvailable: boolean;
  achievements: string[];
};

const Members = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedIndustry, setSelectedIndustry] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("/api/members");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const industries = [
    "All",
    "Healthcare",
    "Technology",
    "Academia",
    "Legal",
    "Pharmaceutical",
    "Finance",
  ];

  const filteredMembers = members.filter((member) => {
    const matchesIndustry =
      selectedIndustry === "All" || member.industry === selectedIndustry;
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.expertise.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    return matchesIndustry && matchesSearch;
  });

  if (loading) {
    return (
      <Layout>
        <Breadcrumb />
        <div className="members-page">
          <div className="container">
            <div className="members-page__loading">
              <p>Loading members...</p>
            </div>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumb />

      <section className="members-page">
        <div className="container">
          <div className="members-page__header">
            <h1 className="members-page__title">UMMAA Member Directory</h1>
            <p className="members-page__description">
              Connect with accomplished Muslim alumni across various industries.
              Our diverse community spans healthcare, technology, academia, law,
              and more.
            </p>
          </div>

          <div className="members-page__search-filter">
            <input
              type="text"
              placeholder="Search by name, title, company, or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="members-page__search-input"
            />

            <div className="members-page__industry-filters">
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  className={`members-page__industry-button ${
                    selectedIndustry === industry
                      ? "members-page__industry-button--active"
                      : ""
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          <div className="members-page__grid">
            {filteredMembers.map((member) => (
              <div key={member.id} className="members-page__card">
                <div
                  className="members-page__card-image"
                  style={{
                    backgroundImage: `url(${member.image})`,
                  }}
                >
                  <div
                    className={`members-page__badge ${
                      member.mentorshipAvailable
                        ? "members-page__badge--mentor"
                        : "members-page__badge--alumni"
                    }`}
                  >
                    {member.mentorshipAvailable ? "Mentor Available" : "Alumni"}
                  </div>
                  <div className="members-page__graduation-year">
                    Class of {member.graduationYear}
                  </div>
                </div>

                <div className="members-page__card-content">
                  <h3 className="members-page__name">{member.name}</h3>

                  <p className="members-page__title">{member.title}</p>

                  <p className="members-page__card-company">
                    {member.company} • {member.location}
                  </p>

                  <div className="members-page__card-details">
                    <p>
                      <strong>Faculty:</strong> {member.faculty}
                    </p>
                    <p>
                      <strong>Industry:</strong> {member.industry}
                    </p>
                  </div>

                  <div className="members-page__expertise-tags">
                    {member.expertise.slice(0, 3).map((skill, index) => (
                      <span key={index} className="members-page__expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p className="members-page__card-bio">
                    {member.bio.substring(0, 120)}...
                  </p>

                  <div className="members-page__card-actions">
                    <button className="members-page__button members-page__button--primary">
                      View Profile
                    </button>

                    {member.mentorshipAvailable && (
                      <button className="members-page__button members-page__button--secondary">
                        Request Mentorship
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <p className="members-page__no-results">
              No members found matching your search criteria.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Members;
