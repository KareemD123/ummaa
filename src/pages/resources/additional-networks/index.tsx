import React, { useState } from "react";

import MainLayout from "../../../layouts/Main";

interface Network {
  name: string;
  website: string;
  description: string;
  category: string;
  icon: string;
}

const AdditionalNetworksPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const networks: Network[] = [
    {
      name: "Canadian Muslim Lawyers Association (CMLA)",
      website: "https://www.cmla-acam.ca/",
      description:
        "CMLA is a national, non-profit organization that supports Muslim legal professionals and allies through advocacy, education, and community-building across Canada's legal landscape.",
      category: "legal",
      icon: "",
    },
    {
      name: "Canadian Race Relations Foundation (CRRF)",
      website: "https://crrf-fcrr.ca/",
      description:
        "CRRF is a federal Crown corporation that promotes public awareness of racism in Canada and strengthens social cohesion by supporting community organizations through grants, partnerships, and educational initiatives.",
      category: "advocacy",
      icon: "",
    },
    {
      name: "Islamic Relief Canada",
      website: "https://www.islamicreliefcanada.org/",
      description:
        "Islamic Relief is a global humanitarian organization that strengthens community resilience, delivers emergency aid, and supports long-term development to combat poverty and promote dignity.",
      category: "humanitarian",
      icon: "",
    },
    {
      name: "ISNA Canada",
      website: "https://www.isnacanada.com/",
      description:
        "ISNA is committed to building a vibrant Muslim community rooted in faith, service, and collaboration—empowering youth, supporting elders, and guiding all those seeking a deeper connection with Islam.",
      category: "community",
      icon: "",
    },
    {
      name: "MAX Muslims Achieving Excellence",
      website: "https://onemax.org/",
      description:
        "MAX is a platform that celebrates the achievements of Muslims in North America and fosters excellence through academic, professional, and charitable development.",
      category: "professional",
      icon: "",
    },
    {
      name: "Muslim Association of Canada",
      website: "https://www.macnet.ca/",
      description:
        "MAC is a grassroots Canadian charitable organization that empowers Muslims through faith-based education, community services, and civic engagement, while promoting a balanced and inclusive understanding of Islam.",
      category: "community",
      icon: "",
    },
    {
      name: "Muslims in Canada Archives (MiCA)",
      website: "https://www.muslimsincanadaarchives.ca/en/",
      description:
        "MiCA is a participatory archive dedicated to preserving the history and documentary heritage of Muslims in Canada by working collaboratively with individuals and organizations to acquire, organize, preserve, and provide access to records that reflect their experiences.",
      category: "education",
      icon: "",
    },
    {
      name: "Muslim Medical Association of Canada (MMAC)",
      website: "https://muslimmeds.ca/",
      description:
        "MMAC is a national non-profit organization that connects Muslim healthcare professionals across Canada to collaborate on clinical care, education, advocacy, mentorship, and community health initiatives.",
      category: "healthcare",
      icon: "",
    },
    {
      name: "The Canadian-Muslim Vote (TCMV)",
      website: "https://canadianmuslimvote.ca/",
      description:
        "TCMV is a national, non-partisan charitable organization that empowers Canadian Muslims through civic engagement and political education.",
      category: "advocacy",
      icon: "",
    },
    {
      name: "Naseeha Mental Health",
      website: "https://www.naseeha.org/",
      description:
        "Naseeha provides confidential, mental health support and educational programs to empower individuals and reduce stigma within the Muslim community.",
      category: "healthcare",
      icon: "",
    },
    {
      name: "National Council of Canadian Muslims (NCCM)",
      website: "https://nccm.ca/",
      description:
        "NCCM is Canada's leading Muslim advocacy organization, built from within the community to promote civic engagement and defend human rights through a national presence and regional offices across the country.",
      category: "advocacy",
      icon: "",
    },
    {
      name: "National Zakat Foundation (NZF)",
      website: "https://www.nzfcanada.com/",
      description:
        "National Zakat Foundation has worked to make Zakat simple, transparent, and impactful across Canada, envisioning a dignified and unified Muslim community rooted in prophetic teachings.",
      category: "humanitarian",
      icon: "",
    },
    {
      name: "Ruh Care",
      website: "https://www.ruhcare.com/",
      description:
        "Ruh Care is an online therapy platform offering Islamically aligned, culturally sensitive mental health support through a diverse team of licensed Muslim therapists serving individuals, couples, families, and children in multiple languages.",
      category: "healthcare",
      icon: "",
    },
    {
      name: "Sakeenah Canada",
      website: "https://sakeenahcanada.com/",
      description:
        "Sakeenah Canada is a national charitable organization providing culturally sensitive support services including transitional housing, mental health care, food banks, and advocacy for Muslim women and children facing domestic violence, homelessness, and other challenges.",
      category: "humanitarian",
      icon: "",
    },
    {
      name: "SMILE Canada - Support Services",
      website: "https://www.smilecan.org/",
      description:
        "SMILE is a charity dedicated to supporting children and youth with disabilities and their families.",
      category: "humanitarian",
      icon: "",
    },
  ];

  const categories = [
    { id: "all", label: "All Networks", icon: "" },
    { id: "legal", label: "Legal", icon: "" },
    { id: "healthcare", label: "Healthcare", icon: "" },
    { id: "advocacy", label: "Advocacy", icon: "" },
    { id: "humanitarian", label: "Humanitarian", icon: "" },
    { id: "community", label: "Community", icon: "" },
    { id: "professional", label: "Professional", icon: "" },
    { id: "education", label: "Education", icon: "" },
  ];

  const filteredNetworks =
    activeCategory === "all"
      ? networks
      : networks.filter((network) => network.category === activeCategory);

  const renderNetworkCard = (network: Network, index: number) => (
    <div key={index} className="network-card">
      <div className="network-header">
        <div className="network-icon">{network.icon}</div>
        <h3 className="network-name">{network.name}</h3>
      </div>

      <div className="network-description">
        <p>{network.description}</p>
      </div>

      <div className="network-actions">
        <a
          href={network.website}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-website-btn"
        >
          Visit Website
        </a>
      </div>
    </div>
  );

  return (
    <MainLayout title="Additional Professional Networks - UMMAA">
      <div className="additional-networks-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Additional Professional Networks</h1>

            <div className="description">
              <p>
                <strong>
                  Connect with Other Professional Muslim Networks!
                </strong>
              </p>
              <p>
                Explore a curated list of professional organizations and
                networks that can support and empower Muslim alumni from the
                University of Toronto. These communities offer valuable
                opportunities for mentorship, career development, and meaningful
                connections.
              </p>
              <div className="fun-fact">
                <p>
                  <span className="fun-fact-icon">✨</span>
                  <strong>Fun fact</strong> - many of these networks were
                  founded by members of UofT Muslim Alumni! Join a legacy of
                  leadership and impact!
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="networks-section">
          <div className="networks-container">
            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${activeCategory === category.id ? "active" : ""}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <span className="filter-icon">{category.icon}</span>
                  {category.label}
                  <span className="count">
                    {category.id === "all"
                      ? networks.length
                      : networks.filter((n) => n.category === category.id)
                          .length}
                  </span>
                </button>
              ))}
            </div>

            <div className="networks-content">
              <div className="section-header">
                <h2>
                  {categories.find((cat) => cat.id === activeCategory)?.label ||
                    "All Networks"}
                </h2>
                <div className="networks-count">
                  {filteredNetworks.length}{" "}
                  {filteredNetworks.length === 1 ? "network" : "networks"}
                </div>
              </div>

              <div className="networks-grid">
                {filteredNetworks.map((network, index) =>
                  renderNetworkCard(network, index),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdditionalNetworksPage;
