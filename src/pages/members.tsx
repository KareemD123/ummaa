import { useEffect, useState } from "react";
import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";
import Layout from "../layouts/Main";

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
        const response = await fetch("/api/products");
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

  const industries = ["All", "Healthcare", "Technology", "Academia", "Legal", "Pharmaceutical", "Finance"];
  
  const filteredMembers = members.filter(member => {
    const matchesIndustry = selectedIndustry === "All" || member.industry === selectedIndustry;
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         member.expertise.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesIndustry && matchesSearch;
  });

  if (loading) {
    return (
      <Layout>
        <Breadcrumb />
        <div className="container" style={{ padding: "50px 0", textAlign: "center" }}>
          <p>Loading members...</p>
        </div>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumb />
      
      <section className="members-page" style={{ padding: "50px 0" }}>
        <div className="container">
          <div className="page-header" style={{ marginBottom: "40px", textAlign: "center" }}>
            <h1 style={{ color: "var(--color-primary)", marginBottom: "20px" }}>UMMAA Member Directory</h1>
            <p style={{ color: "var(--color-text)", fontSize: "18px", maxWidth: "600px", margin: "0 auto" }}>
              Connect with accomplished Muslim alumni across various industries. Our diverse community 
              spans healthcare, technology, academia, law, and more.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="search-filter-section" style={{ marginBottom: "40px" }}>
            <div style={{ marginBottom: "20px", textAlign: "center" }}>
              <input
                type="text"
                placeholder="Search by name, title, company, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  padding: "12px 20px",
                  border: "2px solid var(--color-light)",
                  borderRadius: "25px",
                  fontSize: "16px",
                  outline: "none",
                  transition: "border-color 0.3s ease"
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "var(--color-light)";
                }}
              />
            </div>

            <div className="industry-filter" style={{ textAlign: "center" }}>
              {industries.map((industry) => (
                <button
                  key={industry}
                  onClick={() => setSelectedIndustry(industry)}
                  style={{
                    margin: "0 10px 10px 0",
                    padding: "8px 16px",
                    border: "2px solid var(--color-primary)",
                    backgroundColor: selectedIndustry === industry ? "var(--color-primary)" : "transparent",
                    color: selectedIndustry === industry ? "white" : "var(--color-primary)",
                    borderRadius: "20px",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "all 0.3s ease"
                  }}
                >
                  {industry}
                </button>
              ))}
            </div>
          </div>

          {/* Members Grid */}
          <div className="members-grid" style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", 
            gap: "30px" 
          }}>
            {filteredMembers.map((member) => (
              <div 
                key={member.id} 
                className="member-card" 
                style={{
                  border: "1px solid var(--color-light)",
                  borderRadius: "15px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  backgroundColor: "white"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 8px 15px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                <div 
                  className="member-image" 
                  style={{
                    height: "250px",
                    backgroundImage: `url(${member.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative"
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: "15px",
                    right: "15px",
                    backgroundColor: member.mentorshipAvailable ? "var(--color-accent)" : "var(--color-supporting)",
                    color: "var(--color-dark)",
                    padding: "5px 12px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}>
                    {member.mentorshipAvailable ? "Mentor Available" : "Alumni"}
                  </div>
                  <div style={{
                    position: "absolute",
                    bottom: "15px",
                    left: "15px",
                    backgroundColor: "var(--color-primary)",
                    color: "white",
                    padding: "5px 12px",
                    borderRadius: "15px",
                    fontSize: "12px",
                    fontWeight: "bold"
                  }}>
                    Class of {member.graduationYear}
                  </div>
                </div>

                <div className="member-content" style={{ padding: "25px" }}>
                  <h3 style={{ 
                    color: "var(--color-primary)", 
                    marginBottom: "8px", 
                    fontSize: "22px",
                    fontWeight: "600"
                  }}>
                    {member.name}
                  </h3>

                  <p style={{ 
                    color: "var(--color-secondary)", 
                    marginBottom: "5px", 
                    fontSize: "16px",
                    fontWeight: "500"
                  }}>
                    {member.title}
                  </p>

                  <p style={{ 
                    color: "var(--color-text)", 
                    marginBottom: "15px", 
                    fontSize: "14px"
                  }}>
                    {member.company} • {member.location}
                  </p>

                  <div className="member-details" style={{ marginBottom: "15px" }}>
                    <p style={{ 
                      color: "var(--color-text)", 
                      marginBottom: "8px", 
                      fontSize: "14px"
                    }}>
                      <strong>Faculty:</strong> {member.faculty}
                    </p>
                    <p style={{ 
                      color: "var(--color-text)", 
                      marginBottom: "15px", 
                      fontSize: "14px"
                    }}>
                      <strong>Industry:</strong> {member.industry}
                    </p>
                  </div>

                  <div className="expertise-tags" style={{ marginBottom: "15px" }}>
                    {member.expertise.slice(0, 3).map((skill, index) => (
                      <span
                        key={index}
                        style={{
                          display: "inline-block",
                          backgroundColor: "var(--color-light)",
                          color: "var(--color-dark)",
                          padding: "4px 10px",
                          borderRadius: "12px",
                          fontSize: "12px",
                          margin: "0 5px 5px 0",
                          fontWeight: "500"
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <p style={{ 
                    color: "var(--color-text)", 
                    marginBottom: "20px", 
                    fontSize: "14px",
                    lineHeight: "1.5"
                  }}>
                    {member.bio.substring(0, 120)}...
                  </p>

                  <div className="member-actions" style={{ 
                    display: "flex", 
                    gap: "10px"
                  }}>
                    <button style={{
                      flex: 1,
                      padding: "10px",
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--color-primary)";
                    }}
                    >
                      View Profile
                    </button>
                    
                    {member.mentorshipAvailable && (
                      <button style={{
                        flex: 1,
                        padding: "10px",
                        backgroundColor: "transparent",
                        color: "var(--color-primary)",
                        border: "2px solid var(--color-primary)",
                        borderRadius: "6px",
                        fontSize: "14px",
                        fontWeight: "600",
                        cursor: "pointer",
                        transition: "all 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "var(--color-primary)";
                        e.currentTarget.style.color = "white";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "var(--color-primary)";
                      }}
                      >
                        Request Mentorship
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredMembers.length === 0 && (
            <div style={{ textAlign: "center", padding: "50px 0" }}>
              <p style={{ color: "var(--color-text)", fontSize: "18px" }}>
                No members found matching your search criteria.
              </p>
            </div>
          )}

          {/* Stats Section */}
          <div className="member-stats" style={{ 
            marginTop: "60px", 
            padding: "40px", 
            backgroundColor: "var(--color-light)", 
            borderRadius: "15px",
            textAlign: "center"
          }}>
            <h3 style={{ color: "var(--color-primary)", marginBottom: "20px" }}>
              Our Community Impact
            </h3>
            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", 
              gap: "30px" 
            }}>
              <div>
                <h4 style={{ color: "var(--color-secondary)", fontSize: "32px", marginBottom: "5px" }}>
                  {members.length}+
                </h4>
                <p style={{ color: "var(--color-text)" }}>Active Alumni</p>
              </div>
              <div>
                <h4 style={{ color: "var(--color-secondary)", fontSize: "32px", marginBottom: "5px" }}>
                  {members.filter(m => m.mentorshipAvailable).length}
                </h4>
                <p style={{ color: "var(--color-text)" }}>Available Mentors</p>
              </div>
              <div>
                <h4 style={{ color: "var(--color-secondary)", fontSize: "32px", marginBottom: "5px" }}>
                  {industries.length - 1}
                </h4>
                <p style={{ color: "var(--color-text)" }}>Industries Represented</p>
              </div>
              <div>
                <h4 style={{ color: "var(--color-secondary)", fontSize: "32px", marginBottom: "5px" }}>
                  15+
                </h4>
                <p style={{ color: "var(--color-text)" }}>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Members;
