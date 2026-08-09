import "./App.css";

import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Banner from "./components/Banner";
import CuisineSection from "./components/CuisineSection";
import PromoSection from "./components/PromoSection";
import RestaurantSection from "./components/RestaurantSection";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

import restaurantsData from "./data/restaurant";

function App() {

  const [searchText, setSearchText] = useState("");

  const [filters, setFilters] = useState({
    sort: "Relevance",
    rating4Plus: false,
    cuisines: []
  });

  const [restaurants, setRestaurants] = useState(restaurantsData);

  /* =========================
     FAVORITE FUNCTION
  ========================= */

  const handleFavorite = (id) => {

    setRestaurants((previousRestaurants) => {

      return previousRestaurants.map((restaurant) => {

        if (restaurant.id === id) {

          return {
            ...restaurant,
            favorite: !restaurant.favorite
          };

        }

        return restaurant;

      });

    });
  };


  /* =========================
     SEARCH
  ========================= */

  let filteredRestaurants = restaurants.filter(
    (restaurant) => {

      const search = searchText.toLowerCase();

      const matchesSearch =
        restaurant.name
          .toLowerCase()
          .includes(search) ||

        restaurant.cuisine
          .toLowerCase()
          .includes(search);


      const matchesRating =
        !filters.rating4Plus ||
        parseFloat(restaurant.rating) >= 4;


      const matchesCuisine =
        filters.cuisines.length === 0 ||
        filters.cuisines.includes(restaurant.cuisine);


      return (
        matchesSearch &&
        matchesRating &&
        matchesCuisine
      );

    }
  );

  if (filters.sort === "Fastest") {

    filteredRestaurants.sort(
      (a, b) =>
        a.deliveryTime - b.deliveryTime
    );

  }


  if (filters.sort === "Top rated") {

    filteredRestaurants.sort(
      (a, b) =>
        parseFloat(b.rating) -
        parseFloat(a.rating)
    );

  }

  return (
    <>
      <Header
        searchText={searchText}
        setSearchText={setSearchText}
      />

      <main className="main-layout">

        <Sidebar
          filters={filters}
          setFilters={setFilters}
        />

        <div className="main-content">

          <Banner />

          <CuisineSection />

          <PromoSection />

          <RestaurantSection
            title="Most popular for groups"
            restaurants={filteredRestaurants}
            onFavorite={handleFavorite}
          />

          <RestaurantSection
            title="Recommended for you"
            restaurants={filteredRestaurants.slice(4, 8)}
            onFavorite={handleFavorite}
          />

          <RestaurantSection
            title="Fastest delivery"
            restaurants={filteredRestaurants
              .slice()
              .sort((a, b) => a.deliveryTime - b.deliveryTime)
              .slice(0, 4)}
            onFavorite={handleFavorite}
          />

        </div>

      </main>

      <InfoSection />

      <Footer />
    </>
  );
}

export default App;