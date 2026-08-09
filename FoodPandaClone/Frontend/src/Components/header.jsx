import {
  Search,
  Heart,
  ShoppingBag,
  MapPin,
  Globe,
  ChevronDown,
  Bike,
  Store,
  ShoppingCart,
  ArrowRight
} from "lucide-react";

import foodpandaLogo from "../assets/foodpanda-logo-horizontal.png";

function Header({ searchText, setSearchText }) {
  return (
    <header>

      {/* Top Header */}
      <div className="top-header">

        {/* Logo */}
        <div className="logo">
          <img
            src={foodpandaLogo}
            alt="foodpanda"
          />
        </div>

        {/* Location */}
        <div className="location">

          <MapPin
            size={20}
            className="location-icon"
          />

          <span>
            New address Select your address
          </span>

        </div>

        {/* Right Side */}
        <div className="header-actions">

          <button className="login-btn">
            Log in
          </button>

          <button className="signup-btn">
            Sign up for free delivery
          </button>

          <div className="language">

            <Globe size={18} />

            <span>EN</span>

            <ChevronDown size={16} />

          </div>

          <button className="icon-btn">
            <Heart size={20} />
          </button>

          <button className="cart-btn">
            <ShoppingBag size={20} />
          </button>

        </div>
      </div>


      {/* Bottom Header */}
      <div className="bottom-header">

        <nav className="main-nav">

          <button className="nav-item active">

            <Bike size={20} />

            Delivery

          </button>

          <button className="nav-item">

            <ShoppingBag size={20} />

            Pick-up

          </button>

          <button className="nav-item">

            <ShoppingCart size={20} />

            pandamart

          </button>

          <button className="nav-item">

            <Store size={20} />

            Shops

          </button>

        </nav>


        {/* Search */}
        <div className="search-box">

          <Search
            size={20}
            className="search-icon"
          />

          <input
            type="text"
            placeholder="Search for restaurants, cuisines, and dishes"
            value={searchText}
            onChange={(event) =>
              setSearchText(event.target.value)
            }
          />

        </div>

      </div>

    </header>
  );
}

export default Header;