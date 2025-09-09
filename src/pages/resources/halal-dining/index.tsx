import React, { useState } from "react";

import Footer from "../../../components/footer";
import MainLayout from "../../../layouts/Main";

interface Restaurant {
  name: string;
  address: string;
  website?: string;
  socialMedia?: string;
  map: string;
  cuisine: string;
  isMsaFavorite: boolean;
}

const HalalDiningPage = () => {
  const [activeCuisine, setActiveCuisine] = useState("all");

  const restaurants: Restaurant[] = [
    {
      name: "Alpha's Shawarma",
      address: "245 Yonge Street, Toronto, ON",
      website: "https://alphasshawarma.ca/",
      map: "https://maps.app.goo.gl/XCUAQ3oXBsRW3m2x6",
      cuisine: "Middle Eastern",
      isMsaFavorite: false,
    },
    {
      name: "Amal Toronto",
      address: "131 Bloor Street West 2nd Floor, Toronto, ON",
      website: "https://amaltoronto.com/",
      map: "https://maps.app.goo.gl/yXrC5CuiojxnFLQz8",
      cuisine: "Middle Eastern",
      isMsaFavorite: false,
    },
    {
      name: "Burrito Bandidos",
      address: "2 Walmer Road, Toronto, ON",
      website: "https://burritobandidos.ca/",
      map: "https://maps.app.goo.gl/xm77mHm3JHDkhch27",
      cuisine: "Mexican",
      isMsaFavorite: false,
    },
    {
      name: "Byblos",
      address: "11 Duncan Street, Toronto, ON",
      website: "https://byblosdowntown.com/",
      map: "https://maps.app.goo.gl/nfDBKHPoGdXkTigS7",
      cuisine: "Middle Eastern",
      isMsaFavorite: false,
    },
    {
      name: "Cosmic Pizza & Donair",
      address: "233 College Street, Toronto, ON",
      website: "https://collegestreet.cosmicpizza.ca/",
      map: "https://maps.app.goo.gl/BYLv1JHJ7PrtWTpD7",
      cuisine: "Pizza",
      isMsaFavorite: true,
    },
    {
      name: "D Spot Dessert",
      address: "828 Bay Street, Toronto, ON",
      website: "https://dspotdessert.com/",
      map: "https://maps.app.goo.gl/e7HXs1DqK9xScFiYA",
      cuisine: "Desserts",
      isMsaFavorite: false,
    },
    {
      name: "Firefly Burgers",
      address: "355 Yonge Street, Toronto, ON",
      website: "https://www.fireflyburgers.ca/",
      map: "https://maps.app.goo.gl/KbJCYU4v585B7TKL8",
      cuisine: "Burgers",
      isMsaFavorite: false,
    },
    {
      name: "Flock Chicken",
      address: "661 University Avenue, Toronto, ON",
      website: "https://www.eatflock.com/",
      map: "https://maps.app.goo.gl/RZAbgivjWFbZ8Hhv8",
      cuisine: "Chicken",
      isMsaFavorite: false,
    },
    {
      name: "Habibz Corner",
      address: "356 Queen Street East, Toronto, ON",
      website: "https://habibzcorner.com/",
      map: "https://maps.app.goo.gl/2T8bSom8t7XY8hNf6",
      cuisine: "Fusion",
      isMsaFavorite: true,
    },
    {
      name: "Hero Certified Burgers",
      address:
        "200 Elizabeth Street (located in the food court of Toronto General Hospital)",
      website: "https://heroburgers.com/",
      map: "https://maps.app.goo.gl/KSVERGP31DDQfFYS8",
      cuisine: "Burgers",
      isMsaFavorite: false,
    },
    {
      name: "Karahi Boys",
      address: "741 Queen Street West, Toronto, ON",
      website: "https://www.karahiboys.com/",
      map: "https://maps.app.goo.gl/fwWFHZHAiDT8Cq2f7",
      cuisine: "South Asian",
      isMsaFavorite: false,
    },
    {
      name: "Lebanese Garden",
      address: "366 College Street, Toronto, ON",
      website: "https://lebanesegarden.ca/",
      map: "https://maps.app.goo.gl/zaE9MVhWEX6nKUdt5",
      cuisine: "Middle Eastern",
      isMsaFavorite: true,
    },
    {
      name: "Magical Taste of China",
      address: "476 Dundas Street West, Toronto, ON",
      website: "https://magicaltasteofchina.com/dt476",
      map: "https://maps.app.goo.gl/Yjj92E5Zz2LH64Cv7",
      cuisine: "Chinese",
      isMsaFavorite: false,
    },
    {
      name: "Naan Kabob",
      address: "240 Queen Street West, Toronto, ON",
      website: "https://naankabob.ca/",
      map: "https://maps.app.goo.gl/F8QsXFSiiJPPDG6w9",
      cuisine: "Afghan",
      isMsaFavorite: true,
    },
    {
      name: "Nando's Peri-Peri",
      address: "832 Bay Street Unit 1, Toronto, ON",
      website: "https://www.nandos.ca/find/bay-street",
      map: "https://maps.app.goo.gl/jSThxbjuz9pnghXV7",
      cuisine: "Chicken",
      isMsaFavorite: false,
    },
    {
      name: "Ozzy's Burgers",
      address: "66 Nassau Street Unit 1/ 2, Toronto, ON",
      website: "https://ozzysburgers.com/",
      map: "https://maps.app.goo.gl/LwnJMR2MvHerG5aPA",
      cuisine: "Burgers",
      isMsaFavorite: true,
    },
    {
      name: "Paramount Fine Foods",
      address: "253 Yonge Street, Toronto, ON",
      website: "https://paramountfinefoods.com/",
      map: "https://maps.app.goo.gl/zoqwC9bHx2p7dUWA8",
      cuisine: "Middle Eastern",
      isMsaFavorite: false,
    },
    {
      name: "Salad King",
      address: "224 Queen Street West, Toronto, ON",
      website: "https://saladking.com/#locations-block-2",
      map: "https://maps.app.goo.gl/GoQeDv9De7mH2Mh16",
      cuisine: "Thai",
      isMsaFavorite: false,
    },
    {
      name: "Shawarma Moose",
      address: "898 College Street, Toronto, ON",
      website: "https://www.shawarmamoose.ca/",
      map: "https://maps.app.goo.gl/MM8pZkLtkenEhzfV7",
      cuisine: "Middle Eastern",
      isMsaFavorite: false,
    },
    {
      name: "Shelby's Legendary Shawarma",
      address: "416 Queen Street West, Toronto, ON",
      website: "https://www.shelbys.ca/location/queen-spadina/",
      map: "https://maps.app.goo.gl/aRTnDxwDpgvMtCdc6",
      cuisine: "Middle Eastern",
      isMsaFavorite: false,
    },
    {
      name: "Sizzler Kabab",
      address: "381 Spadina Avenue, Toronto, ON",
      website: "https://sizzlerkababtoronto.com/",
      map: "https://maps.app.goo.gl/9qXySATKgMWUcaB87",
      cuisine: "South Asian",
      isMsaFavorite: true,
    },
    {
      name: "The Burgernator",
      address: "269 Augusta Avenue, Toronto, ON",
      socialMedia: "https://www.instagram.com/tburgernator/",
      map: "https://maps.app.goo.gl/oLwbA34tnMA2k8fv9",
      cuisine: "Burgers",
      isMsaFavorite: true,
    },
    {
      name: "Tut's Egyptian Street Food",
      address: "567 King Street West, Toronto, ON",
      website: "https://www.tutsrestaurant.ca/",
      map: "https://maps.app.goo.gl/w762dEkkpi22c1w79",
      cuisine: "Egyptian",
      isMsaFavorite: false,
    },
  ];

  const cuisines = [
    { id: "all", label: "All Cuisines" },
    { id: "msa-favorites", label: "MSA Favorites" },
    { id: "Middle Eastern", label: "Middle Eastern" },
    { id: "Burgers", label: "Burgers" },
    { id: "South Asian", label: "South Asian" },
    { id: "Chicken", label: "Chicken" },
    { id: "Pizza", label: "Pizza" },
    { id: "Mexican", label: "Mexican" },
    { id: "Chinese", label: "Chinese" },
    { id: "Thai", label: "Thai" },
    { id: "Afghan", label: "Afghan" },
    { id: "Egyptian", label: "Egyptian" },
    { id: "Fusion", label: "Fusion" },
    { id: "Desserts", label: "Desserts" },
  ];

  const filteredRestaurants = (() => {
    if (activeCuisine === "all") return restaurants;
    if (activeCuisine === "msa-favorites")
      return restaurants.filter((r) => r.isMsaFavorite);
    return restaurants.filter(
      (restaurant) => restaurant.cuisine === activeCuisine,
    );
  })();

  const renderRestaurantCard = (restaurant: Restaurant, index: number) => (
    <div
      key={index}
      className={`restaurant-card ${restaurant.isMsaFavorite ? "msa-favorite" : ""}`}
    >
      {restaurant.isMsaFavorite && (
        <div className="msa-badge">
          <span className="star">⭐</span>
          MSA Favorite
        </div>
      )}

      <div className="restaurant-header">
        <h3 className="restaurant-name">{restaurant.name}</h3>
        <div className="cuisine-tag">{restaurant.cuisine}</div>
      </div>

      <div className="restaurant-details">
        <div className="detail-item">
          <span className="detail-label">Address:</span>
          <span className="detail-value">{restaurant.address}</span>
        </div>
      </div>

      <div className="restaurant-actions">
        {restaurant.website && (
          <a
            href={restaurant.website}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn website-btn"
          >
            Visit Website
          </a>
        )}
        {restaurant.socialMedia && (
          <a
            href={restaurant.socialMedia}
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn social-btn"
          >
            Social Media
          </a>
        )}
        <a
          href={restaurant.map}
          target="_blank"
          rel="noopener noreferrer"
          className="action-btn map-btn"
        >
          View Map
        </a>
      </div>
    </div>
  );

  return (
    <MainLayout title="Halal Dining - UMMAA">
      <div className="halal-dining-page">
        <div className="hero-section">
          <div className="hero-content">
            <h1>Halal Dining Near UofT & Downtown Toronto</h1>

            <div className="description">
              <p>
                <strong>
                  Visiting the University of Toronto or attending an alumni
                  event?
                </strong>
              </p>
              <p>
                Discover a wide range of halal restaurants just steps from
                campus and throughout downtown Toronto. Whether you're craving
                comfort food, international flavors, or a quick bite, these
                spots offer delicious halal meals to suit every taste.
              </p>
              <div className="nostalgia-section">
                <p>
                  <strong>
                    Have a favorite spot that brings back memories of your time
                    at UofT?
                  </strong>
                </p>
                <p>
                  Share your recommendations with us and help fellow alumni
                  rediscover the flavors of campus life!
                </p>
                <div className="msa-highlight">
                  <p>
                    ⭐ We've highlighted some of our MSA's favorites! Nostalgia
                    guaranteed!
                  </p>
                </div>
                <a href="/contact" className="contribute-btn">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="dining-section">
          <div className="dining-container">
            <div className="cuisine-filters">
              {cuisines.map((cuisine) => (
                <button
                  key={cuisine.id}
                  className={`filter-btn ${activeCuisine === cuisine.id ? "active" : ""}`}
                  onClick={() => setActiveCuisine(cuisine.id)}
                >
                  {cuisine.label}
                  <span className="count">
                    {cuisine.id === "all"
                      ? restaurants.length
                      : cuisine.id === "msa-favorites"
                        ? restaurants.filter((r) => r.isMsaFavorite).length
                        : restaurants.filter((r) => r.cuisine === cuisine.id)
                            .length}
                  </span>
                </button>
              ))}
            </div>

            <div className="dining-content">
              <div className="section-header">
                <h2>
                  {cuisines.find((cuisine) => cuisine.id === activeCuisine)
                    ?.label || "All Cuisines"}
                </h2>
                <div className="restaurants-count">
                  {filteredRestaurants.length}{" "}
                  {filteredRestaurants.length === 1
                    ? "restaurant"
                    : "restaurants"}
                </div>
              </div>

              <div className="restaurants-grid">
                {filteredRestaurants.map((restaurant, index) =>
                  renderRestaurantCard(restaurant, index),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </MainLayout>
  );
};

export default HalalDiningPage;
