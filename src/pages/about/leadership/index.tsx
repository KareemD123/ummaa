import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

import Layout from "../../../layouts/Main";

// Leadership page styles are imported in main.scss

interface LeadershipMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
}

const Leadership = () => {
  const leadershipTeam: LeadershipMember[] = [
    {
      id: 1,
      name: "Alya Mohmood",
      title: "Co-Founder",
      description: "Masters",
      image: "/images/team/alya-mohmood.jpg",
    },
    {
      id: 2,
      name: "Noor Bahsoun",
      title: "Co-Founder",
      description: "PhD",
      image: "/images/team/noor-bahsoun.jpg",
    },
    {
      id: 3,
      name: "Kareem Draz",
      title: "Co-Founder",
      description:
        "Engineering graduate leading strategic vision and alumni growth initiatives.",
      image: "/images/team/kareem-draz.jpg",
    },
  ];

  return (
    <Layout>
      <Breadcrumb />

      <section className="leadership-page">
        <div className="container">
          <div className="leadership-page__header">
            <h1 className="leadership-page__title">Leadership Team</h1>
            <p className="leadership-page__subtitle">
              Meet the dedicated leaders working to uphold the vision, mission,
              and global reputation of UMMAA.
            </p>
          </div>

          <div className="leadership-page__content">
            <div className="leadership-page__team-grid">
              {leadershipTeam.map((member) => (
                <div key={member.id} className="leadership-page__member">
                  <div className="leadership-page__member-photo">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <h3 className="leadership-page__member-name">
                    {member.name}
                  </h3>
                  <p className="leadership-page__member-title">
                    {member.title}
                  </p>
                  <p className="leadership-page__member-description">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Leadership;
