import { useEffect, useState } from "react";

import Breadcrumb from "@/components/breadcrumb";
import Footer from "@/components/footer";

import Layout from "../../layouts/Main";

// Events page styles are imported in main.scss

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

  if (loading) {
    return (
      <Layout>
        <Breadcrumb />
        <div className="container">
          <div className="events-page__loading">
            <p>Loading events...</p>
          </div>
        </div>
        <Footer />
      </Layout>
    );
  }

  return (
    <Layout>
      <Breadcrumb />

      <section className="events-page">
        <div className="container">
          <div className="events-page__header">
            <h1 className="events-page__title">UMMAA Events</h1>
            <p className="events-page__description">
              Join us for networking events, professional development workshops,
              and community gatherings. Connect with fellow alumni and expand
              your network.
            </p>
          </div>

          {/* Category Filter */}
          <div className="events-page__category-filter">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`events-page__category-button ${
                  selectedCategory === category
                    ? "events-page__category-button--active"
                    : ""
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="events-page__grid">
            {filteredEvents.map((event) => (
              <div key={event.id} className="events-page__card">
                <div
                  className="events-page__card-image"
                  style={{
                    backgroundImage: `url(${event.image})`,
                  }}
                >
                  <div className="events-page__category-badge">
                    {event.category}
                  </div>
                </div>

                <div className="events-page__card-content">
                  <h3 className="events-page__card-title">{event.title}</h3>
                  <div className="events-page__card-details">
                    <p className="events-page__card-date">
                      📅{" "}
                      {new Date(event.date).toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="events-page__card-time">🕐 {event.time}</p>
                    <p className="events-page__card-location">
                      📍 {event.location}
                    </p>
                    <p className="events-page__card-price">💰 {event.price}</p>
                  </div>
                  <p className="events-page__card-description">
                    {event.description}
                  </p>
                  <div className="events-page__registration">
                    <span className="events-page__registration-count">
                      {event.registered}/{event.capacity} registered
                    </span>
                    <div className="events-page__progress-bar">
                      <div
                        className="events-page__progress-fill"
                        style={{
                          width: `${(event.registered / event.capacity) * 100}%`,
                        }}
                      />
                    </div>
                    <p>
                      <strong>Faculty:</strong> {event.organizer}
                    </p>
                  </div>
                  <button className="events-page__register-button">
                    {event.registered >= event.capacity
                      ? "Event Full"
                      : "Register Now"}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="events-page__no-results">
              <h3>No events found</h3>
              <p>Try adjusting your category filter.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </Layout>
  );
};

export default Events;
