import React, { useState } from "react";

import Footer from "../../../components/footer";
import MainLayout from "../../../layouts/Main";

interface PrayerSpace {
  name: string;
  address: string;
  prayerSpace: string;
  ablutionFacilities: string;
  map: string;
  amenities?: string;
  access?: string;
  prayerTimes?: string;
}

const PrayerSpacesPage = () => {
  const [activeTab, setActiveTab] = useState("st-george");

  const stGeorgeSpaces: PrayerSpace[] = [
    {
      name: "Bahen Centre for Information Technology",
      address: "40 St. George Street, Toronto, ON",
      prayerSpace: "Room 1255 (Opposite to Mega Bites Cafe)",
      ablutionFacilities: "washrooms nearby",
      map: "https://map.utoronto.ca/?id=1809#!m/494470?s/",
    },
    {
      name: "Dalla Lana School of Public Health",
      address: "155 College Street, Toronto, ON",
      prayerSpace: "Room 786",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/494459?s/",
    },
    {
      name: "Emmanuel College",
      address: "75 Queens Park Crescent East, Toronto, ON",
      prayerSpace: "Muslim Prayer Room 1st Floor Basement, Room 006",
      ablutionFacilities:
        "Ablution facilities available on same floor; Room 004 (Separate Facilities for Brothers and Sisters)",
      map: "https://maps.app.goo.gl/E8p4jdYnj8Hu2wbr9",
    },
    {
      name: "Factor-Inwentash Faculty of Social Work",
      address: "246 Bloor Street West, Toronto, ON",
      prayerSpace: "Room 419",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/494564?s/",
    },
    {
      name: "Gerald Larkin Building",
      address: "15 Devonshire Place, Toronto, ON",
      prayerSpace: "Room 508",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/494575?s/",
    },
    {
      name: "Gerstein Science Information Technology",
      address: "9 King's College Cir, Toronto, ON",
      prayerSpace: "Room B171",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/494508?s/",
    },
    {
      name: "Leslie Dan Pharmacy Building",
      address: "144 College Street, Toronto, ON",
      prayerSpace: "2nd Basement Floor – Rooms B220 and B222",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/494476?s/",
    },
    {
      name: "Medical Sciences Building (Temerty Faculty of Medicine)",
      address: "1 King's College Circle, Toronto, ON",
      prayerSpace: "Rooms 2271 and 2273",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/494491?s/",
    },
    {
      name: "Multi Faith Centre (Located in the Koffler House)",
      address: "569 Spadina Crescent, Toronto, ON",
      prayerSpace: "Meditation Room on 2nd floor",
      ablutionFacilities:
        "Available on 2nd Floor (Separate Facilities for Brothers and Sisters)",
      map: "https://map.utoronto.ca/?id=1809#!m/513790?s/",
    },
    {
      name: "Ontario Institute for Studies in Education (OISE)",
      address: "252 Bloor Street West, Toronto, ON",
      prayerSpace: "Room 3-210 (Reflection Room)",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/494563?s/",
    },
    {
      name: "Robert's Library",
      address: "130 St. George Street, Toronto, ON",
      prayerSpace: "Room 8045",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/959690?s/",
    },
    {
      name: "Rotman School of Management",
      address: "105 St George Street, Toronto, ON",
      prayerSpace: "Room 3088",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/tmzuV2BYQUBhSwbi9",
    },
    {
      name: "Sidney Smith Hall",
      address: "100 St George Street, Toronto, ON",
      prayerSpace: "Room 1091, behind Second Cup",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!ce/48654?m/494510?s/",
    },
    {
      name: "Sussex Clubhouse",
      address: "21 Sussex Avenue, Toronto, ON",
      prayerSpace: "Room 508",
      ablutionFacilities: "N/A",
      map: "https://map.utoronto.ca/?id=1809#!m/494534?s/",
    },
    {
      name: "UTSU Student Commons",
      address: "15 Devonshire Pl, Toronto, ON",
      prayerSpace: "Room 542",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/cVtDaoHWTKwnGWCFA",
    },
  ];

  const utmSpaces: PrayerSpace[] = [
    {
      name: "Communication Culture & Technology (CCIT) Building",
      address: "1800 Middle Road, Mississauga, ON",
      prayerSpace:
        "Brothers Prayer space: Rooms CC2172 and CC2174, Sisters Prayer space: Room CC2100",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/LMpGVAxzcuqJ8zB56",
    },
    {
      name: "Student Centre, Multifaith Room",
      address: "1815 Inner Cir Rd, Mississauga, ON",
      prayerSpace: "Room 290",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/aSBEfqH7K9KGpWTRA",
      access: "Elevator key available from info desk for accessibility",
    },
  ];

  const utscSpaces: PrayerSpace[] = [
    {
      name: "Student Centre",
      address: "1265 Military Trail, Scarborough, ON",
      prayerSpace: "Rooms SL 279 and SL 281",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/MHC4LVD5bJ4spH3b7",
    },
    {
      name: "Environmental Science and Chemistry Building",
      address: "1065 Military Trail, Scarborough, ON",
      prayerSpace: "Multipurpose Space, Room EV 150",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/QvoknwLpnEAgSz3T8",
    },
  ];

  const hospitalSpaces: PrayerSpace[] = [
    {
      name: "Li Ka Shing Knowledge Institute",
      address: "209 Victoria Street, Toronto, ON",
      prayerSpace: "Rooms 478 and 479, East Wing",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/EKMS1EWXZMhFQwVq7",
      access: "Access code required from Unity Health Toronto",
    },
    {
      name: "Mount Sinai Hospital",
      address: "600 University Avenue, Toronto, ON",
      prayerSpace:
        "4th floor, exit through University Ave elevators and turn right. Enter through doors right beside the registration/volunteer desk",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/YTDRksGx5FZymU7c6",
      amenities: "Quran, prayer mats, hijabs/ shawls, chairs",
      access: "Walk-In",
    },
    {
      name: "SickKids",
      address: "555 University Avenue, Toronto, ON",
      prayerSpace: "1st Floor of Atrium",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/o6S5MhutL3RMoR7Q9",
      access: "Walk-In",
    },
    {
      name: "St. Michael's Hospital – Unity Health Toronto",
      address: "30 Bond Street, Toronto, ON",
      prayerSpace: "Bond Wing, Room 3010",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/yWMLGw8KXokeWGur8",
      amenities: "Wudu area, chairs",
      access: "Code/PIN required by Unity Health Toronto",
    },
    {
      name: "Toronto General Hospital – University Health Network",
      address: "200 Elizabeth Street, Toronto, ON",
      prayerSpace: "1 GW-557, 1st Floor, Gerrard Wing",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/oMchg51UAnq3ydmT7",
      amenities: "Chairs, hijabs/ shawls",
      access: "Walk-in",
    },
    {
      name: "Toronto Western Hospital – University Health Network",
      address: "399 Bathurst Street, Toronto, ON",
      prayerSpace: "Fell Pavillion, 4th Floor, Room 108",
      ablutionFacilities: "N/A",
      map: "https://maps.app.goo.gl/7VCz1MVsvpivNUN28",
      access: "Walk-in",
    },
  ];

  const mosqueSpaces: PrayerSpace[] = [
    {
      name: "MAC Masjid Toronto",
      address: "168 Dundas Street West, Toronto, ON",
      prayerSpace: "Full mosque facilities",
      ablutionFacilities: "Available",
      map: "https://maps.app.goo.gl/g57hGfzu3U944muM6",
      prayerTimes: "https://centres.macnet.ca/masjidtoronto/",
    },
    {
      name: "Masjid Toronto - Adelaide",
      address: "86 Adelaide Street East, Toronto, ON",
      prayerSpace: "Full mosque facilities",
      ablutionFacilities: "Available",
      map: "https://maps.app.goo.gl/dRUG2vLuACoqnvPr8",
      prayerTimes: "https://centres.macnet.ca/masjidtoronto/",
    },
    {
      name: "Toronto Islamic Centre (TIC)",
      address: "817 Yonge Street, Toronto, ON",
      prayerSpace: "Full mosque facilities",
      ablutionFacilities: "Available",
      map: "https://maps.app.goo.gl/kMUfayBGxxoajxz98",
      prayerTimes: "https://torontoislamiccentre.com/",
    },
  ];

  const renderSpaceCard = (space: PrayerSpace, index: number) => (
    <div key={index} className="prayer-space-card">
      <div className="space-header">
        <h3 className="space-name">{space.name}</h3>
        <div className="space-address">
          <span className="address-icon">📍</span>
          {space.address}
        </div>
      </div>

      <div className="space-details">
        <div className="detail-item">
          <span className="detail-label">Prayer Space:</span>
          <span className="detail-value">{space.prayerSpace}</span>
        </div>

        <div className="detail-item">
          <span className="detail-label">Ablution Facilities:</span>
          <span className="detail-value">{space.ablutionFacilities}</span>
        </div>

        {space.amenities && (
          <div className="detail-item">
            <span className="detail-label">Amenities:</span>
            <span className="detail-value">{space.amenities}</span>
          </div>
        )}

        {space.access && (
          <div className="detail-item">
            <span className="detail-label">Access:</span>
            <span className="detail-value">{space.access}</span>
          </div>
        )}

        {space.prayerTimes && (
          <div className="detail-item">
            <span className="detail-label">Prayer Times:</span>
            <a
              href={space.prayerTimes}
              target="_blank"
              rel="noopener noreferrer"
              className="prayer-times-link"
            >
              View Prayer Times
            </a>
          </div>
        )}
      </div>

      <div className="space-actions">
        <a
          href={space.map}
          target="_blank"
          rel="noopener noreferrer"
          className="map-link"
        >
          <span className="map-icon">🗺️</span>
          View Map
        </a>
      </div>
    </div>
  );

  const getTabData = () => {
    switch (activeTab) {
      case "st-george":
        return { spaces: stGeorgeSpaces, title: "St. George Campus" };
      case "utm":
        return { spaces: utmSpaces, title: "UTM Campus" };
      case "utsc":
        return { spaces: utscSpaces, title: "UTSC Campus" };
      case "hospitals":
        return { spaces: hospitalSpaces, title: "Hospitals near UofT" };
      case "mosques":
        return { spaces: mosqueSpaces, title: "Mosques near UofT" };
      default:
        return { spaces: stGeorgeSpaces, title: "St. George Campus" };
    }
  };

  const { spaces, title } = getTabData();

  return (
    <MainLayout title="Prayer Spaces - UMMAA">
      <div className="prayer-spaces-page">
        <div className="hero-section">
          <div className="hero-content">
            {/* <div className="hero-icon">🕌</div> */}
            <h1>Prayer Spaces Directory</h1>
            <p className="last-updated">Last Updated August 31, 2025</p>

            <div className="quran-verse">
              <p className="verse-text">
                "...So glorify the praises of your Lord and be of those who
                always pray; And worship your Lord until certainty comes to
                you..."
              </p>
              <p className="verse-reference">Qur'an [Al Hijr 15:98-99]</p>
            </div>

            <div className="description">
              <p>
                Looking for a place to pray, attend Jumuah, or reconnect
                spiritually near the University of Toronto campuses?
              </p>
              <p>
                UMMAA has compiled a crowdsourced directory of prayer spaces
                around UofT to support our Muslim alumni and the broader Muslim
                community.
              </p>
              <p>
                We extend our heartfelt thanks to university staff, hospital
                administrators, and community partners for making these
                sanctuaries available to Toronto's growing Muslim population. We
                hope this resource helps highlight areas where inclusive
                services and spaces can be expanded across the Canadian
                landscape.
              </p>
            </div>

            <div className="contribute-section">
              <p>
                <strong>
                  Know of a prayer space that's near UofT and is not listed?
                </strong>
              </p>
              <p>
                We welcome your contributions to help grow this database and
                better serve Canadian Muslims.
              </p>
              <a href="/contact" className="contribute-btn">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="tabs-section">
          <div className="tabs-container">
            <div className="tabs-nav">
              <button
                className={`tab-btn ${activeTab === "st-george" ? "active" : ""}`}
                onClick={() => setActiveTab("st-george")}
              >
                {/* <span className="tab-icon">🏛️</span> */}
                St. George Campus
              </button>
              <button
                className={`tab-btn ${activeTab === "utm" ? "active" : ""}`}
                onClick={() => setActiveTab("utm")}
              >
                {/* <span className="tab-icon">🏫</span> */}
                UTM Campus
              </button>
              <button
                className={`tab-btn ${activeTab === "utsc" ? "active" : ""}`}
                onClick={() => setActiveTab("utsc")}
              >
                {/* <span className="tab-icon">🏛️</span> */}
                UTSC Campus
              </button>
              <button
                className={`tab-btn ${activeTab === "hospitals" ? "active" : ""}`}
                onClick={() => setActiveTab("hospitals")}
              >
                {/* <span className="tab-icon">🏥</span> */}
                Hospitals
              </button>
              <button
                className={`tab-btn ${activeTab === "mosques" ? "active" : ""}`}
                onClick={() => setActiveTab("mosques")}
              >
                {/* <span className="tab-icon">🕌</span> */}
                Mosques
              </button>
            </div>

            <div className="tab-content">
              <div className="tab-header">
                <h2>{title}</h2>
                <div className="spaces-count">{spaces.length} locations</div>
              </div>

              <div className="spaces-grid">
                {spaces.map((space, index) => renderSpaceCard(space, index))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default PrayerSpacesPage;
