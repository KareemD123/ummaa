import Footer from "@/components/footer";
import { leadershipImages } from "@/config/imageUrls";

import Layout from "../../../layouts/Main";

// Leadership page styles are imported in main.scss

interface LeadershipMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  role: "advisor" | "founder";
  linkedinUrl?: string;
}

const Leadership = () => {
  const boardOfAdvisors: LeadershipMember[] = [
    {
      id: 1,
      name: "Ziyaad Vahed",
      title: "Deputy Chief of Staff, Intergovernmental & Agency Relations, City Manager's Office, City of Toronto",
      description:
        "Director at Ministry of Children, Community, and Social Services",
      image: leadershipImages.ziyaadVahed,
      role: "advisor",
      linkedinUrl: "https://www.linkedin.com/in/ziyaadvahed/",
    },
    {
      id: 2,
      name: "Shaheen Shaikh, P.Eng.",
      title: "Vice President, Station Engineering, Ontario Power Generation",
      description:
        "Vice President, Station Engineering, Ontario Power Generation",
      image: leadershipImages.shaheenShaikh,
      role: "advisor",
      linkedinUrl: "https://www.linkedin.com/in/shaheen-shaikh-p-eng-b033786b/",
    },
    {
      id: 3,
      name: "Dr. Fariha Khan",
      title: "Primary Care Physician",
      description: "Family Physician",
      image: leadershipImages.farihaKhan,
      role: "advisor",
      linkedinUrl: "https://www.linkedin.com/in/fariha-khan-58a18050/",
    },
  ];

  // Founders section temporarily commented out
  const executiveDirectors: LeadershipMember[] = [
    {
      id: 1,
      name: "Kareem Draz, P.Eng",
      title: "Software Engineer & College Professor",
      description: "Founder description",
      image: "/images/team/Kareem_Headshot_Small.jpg",
      role: 'founder',
    },
    {
      id: 2,
      name: "Alya Mohmood",
      title: "Clinical Research Professional",
      description: "Executive Director description",
      image: "/images/team/alya-mohmood.jpg",
      role: 'founder',
    },
    {
      id: 3,
      name: "Noor Bahsoun, PhD (c)",
      title: "Scientist | Engineer",
      description: "Executive Director description",
      image: "/images/team/noor-bahsoun.jpeg",
      role: 'founder',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <div className="leadership-hero">
        <div className="container">
          <h1>Leadership Team</h1>
          <p>
            Meet the dedicated leaders working to uphold the vision, mission,
            and global reputation of UMMAA.
          </p>
        </div>
      </div>

      <section className="leadership-page">
        <div className="container">
          <div className="leadership-page__content">
            {/* Board of Advisors Section */}
            <div className="leadership-page__section">
              <h2 className="leadership-page__section-title">
                Board of Advisors
              </h2>
              <div className="leadership-page__team-grid">
                {boardOfAdvisors.map((member) => (
                  <div key={member.id} className="leadership-page__member">
                    {member.linkedinUrl ? (
                      <a
                        href={member.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leadership-page__member-card"
                      >
                        <div className="leadership-page__hexagon-container">
                          <div className="leadership-page__hexagon">
                            <img src={member.image} alt={member.name} />
                          </div>
                        </div>
                        <div className="leadership-page__badge leadership-page__badge--advisor">
                          ADVISOR
                        </div>
                        <h3 className="leadership-page__member-name">
                          {member.name}
                        </h3>
                        <p className="leadership-page__member-title">
                          {member.title}
                        </p>
                      </a>
                    ) : (
                      <div className="leadership-page__member-card">
                        <div className="leadership-page__hexagon-container">
                          <div className="leadership-page__hexagon">
                            <img src={member.image} alt={member.name} />
                          </div>
                        </div>
                        <div className="leadership-page__badge leadership-page__badge--advisor">
                          ADVISOR
                        </div>
                        <h3 className="leadership-page__member-name">
                          {member.name}
                        </h3>
                        <p className="leadership-page__member-title">
                          {member.title}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Directors Section */}
            <div className="leadership-page__section">
              <h2 className="leadership-page__section-title">Founders</h2>
              <div className="leadership-page__team-grid">
                {executiveDirectors?.map((member) => (
                  <div key={member.id} className="leadership-page__member">
                    <div className="leadership-page__member-card">
                      <div className="leadership-page__hexagon-container">
                        <div className="leadership-page__hexagon">
                          <img src={member.image} alt={member.name} />
                        </div>
                      </div>
                      <div className="leadership-page__badge leadership-page__badge--founder">
                        FOUNDER
                      </div>
                      <h3 className="leadership-page__member-name">
                        {member.name}
                      </h3>
                      <p className="leadership-page__member-title">
                        {member.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Leadership;
