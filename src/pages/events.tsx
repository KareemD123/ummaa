import { useEffect, useState } from "react";

import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

import Layout from "../layouts/Main";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  category: string;
  image: string;
  capacity: number;
  registered: number;
  price: string;
  organizer: string;
  speakers: string[];
  agenda: string[];
};

const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const categories = [
    "All",
    "Community",
    "Professional Development",
    "Fundraising",
    "Student Support",
  ];

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <Layout>
        <Breadcrumb />
        <div
          className="container"
          style={{ padding: "50px 0", textAlign: "center" }}
        >
          <p>Loading events...</p>
        </div>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumb />

      <section className="events-page" style={{ padding: "50px 0" }}>
        <div className="container">
          <div
            className="page-header"
            style={{ marginBottom: "40px", textAlign: "center" }}
          >
            <h1 style={{ color: "var(--color-primary)", marginBottom: "20px" }}>
              UMMAA Events
            </h1>
            <p
              style={{
                color: "var(--color-text)",
                fontSize: "18px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Join us for networking events, professional development sessions,
              community celebrations, and opportunities to give back to the next
              generation of Muslim students.
            </p>
          </div>

          {/* Category Filter */}
          <div
            className="category-filter"
            style={{ marginBottom: "40px", textAlign: "center" }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  margin: "0 10px 10px 0",
                  padding: "10px 20px",
                  border: "2px solid var(--color-primary)",
                  backgroundColor:
                    selectedCategory === category
                      ? "var(--color-primary)"
                      : "transparent",
                  color:
                    selectedCategory === category
                      ? "white"
                      : "var(--color-primary)",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "500",
                  transition: "all 0.3s ease",
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div
            className="events-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
              gap: "30px",
            }}
          >
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="event-card"
                style={{
                  border: "1px solid var(--color-light)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 15px rgba(0,0,0,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
                }}
              >
                <div
                  className="event-image"
                  style={{
                    height: "200px",
                    backgroundImage: `url(${event.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: "15px",
                      right: "15px",
                      backgroundColor: "var(--color-accent)",
                      color: "var(--color-dark)",
                      padding: "5px 12px",
                      borderRadius: "15px",
                      fontSize: "12px",
                      fontWeight: "bold",
                    }}
                  >
                    {event.category}
                  </div>
                </div>

                <div className="event-content" style={{ padding: "25px" }}>
                  <h3
                    style={{
                      color: "var(--color-primary)",
                      marginBottom: "15px",
                      fontSize: "20px",
                      lineHeight: "1.3",
                    }}
                  >
                    {event.title}
                  </h3>

                  <div
                    className="event-details"
                    style={{ marginBottom: "15px" }}
                  >
                    <p
                      style={{
                        color: "var(--color-dark)",
                        marginBottom: "8px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      📅 {formatDate(event.date)}
                    </p>
                    <p
                      style={{
                        color: "var(--color-text)",
                        marginBottom: "8px",
                        fontSize: "14px",
                      }}
                    >
                      🕐 {event.time}
                    </p>
                    <p
                      style={{
                        color: "var(--color-text)",
                        marginBottom: "8px",
                        fontSize: "14px",
                      }}
                    >
                      📍 {event.location}
                    </p>
                    <p
                      style={{
                        color: "var(--color-secondary)",
                        marginBottom: "15px",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      💰 {event.price}
                    </p>
                  </div>

                  <p
                    style={{
                      color: "var(--color-text)",
                      marginBottom: "20px",
                      fontSize: "14px",
                      lineHeight: "1.5",
                    }}
                  >
                    {event.description.substring(0, 120)}...
                  </p>

                  <div
                    className="event-registration"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "15px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "var(--color-text)",
                      }}
                    >
                      {event.registered}/{event.capacity} registered
                    </span>
                    <div
                      style={{
                        width: "100px",
                        height: "6px",
                        backgroundColor: "var(--color-light)",
                        borderRadius: "3px",
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          width: `${(event.registered / event.capacity) * 100}%`,
                          height: "100%",
                          backgroundColor: "var(--color-secondary)",
                          transition: "width 0.3s ease",
                        }}
                      />
                    </div>
                  </div>

                  <button
                    style={{
                      width: "100%",
                      padding: "12px",
                      backgroundColor: "var(--color-primary)",
                      color: "white",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "14px",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-secondary)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor =
                        "var(--color-primary)";
                    }}
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div style={{ textAlign: "center", padding: "50px 0" }}>
              <p style={{ color: "var(--color-text)", fontSize: "18px" }}>
                No events found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Events;
