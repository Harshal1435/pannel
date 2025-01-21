import React from "react";
import { FaBell, FaQuestionCircle, FaEnvelope, FaBars } from "react-icons/fa";
import "../CSS/Header.css";

const Header = ({ onToggleSidebar }) => {
  return (
    <header className="header">
      {/* Sidebar Toggle Button */}
      <button className="sidebar-toggle" onClick={onToggleSidebar}>
        <FaBars />
      </button>

      {/* Header Title */}
      <h2 className="header-title">Manufacturer Dashboard</h2>

      {/* Right-Side Icons */}
      <div className="header-icons">
        <FaBell className="icon" />
        <FaQuestionCircle className="icon" />
        <FaEnvelope className="icon" />
        <div className="profile">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKcAAACUCAMAAADBJsndAAAAMFBMVEXk5ueutLfp6+ymrbCqsbTIzM7Z3N3d3+HT1tjh4+TM0NK0ubzFycvAxce9wsS5vsFcglnSAAADvElEQVR4nO2b27KrIAxAJSIgoPz/3x6ont62tRBsojOsN9/WBBNuoesajUaj0Wg0Go1Go9G4BgDcBhkoY4w1SnN7fGZUdhZ9L2/0vZusGk8XWVA+CCnFE/EreH0uUxXEFlF1PpGpCv2m5k21n87xr0LnhfyomUyFP0NI9Z7jahr4Q2p3Y3n/Tw1vSMFnWN5MLavnlBPNRXRgjGi+ZhLlsgRfoMk39DAUaUYMi6cptIywlKdyTRnoLaEkh+6i5EkPBqEZUcSe4/YC6WtAZ+KAZk2XW6LEAcVZRkhTCbDhFMRF1KE15USoiSjxDwiLfdnE/hZQuml+xA97JJCVJlURTiF6Kk108VyQVBkPoc5zIhp4qNKk+0HHz6cKWbiRxrMujQTVoqlm0lygSaTC7dsGluQHhalSk2hVD7glMr3nXO1JoXlEPK/i2fLo2fMqdekidb5DHjE8INob64usQ6DWk0azg6rtkRBkZze1+w4qz6vs4+r2xY7uyO4i5wxwlXMb/LGikDOh5mXOFTu0J1WRXym+41ohO7RZQZYmSXdYt4L8Q6nvZXCTvPTUmnHkEZrESbSAKPbko36j9IaT7QJ+LusTYGtoGEsOljly6E6+KOm8/pfcoWdtt0lkLkV525cSGbt5yVSQXoBvYy/pNphfMG7HtJ952oG2GM2n1krpzmPZpRZvMzv52vcb1d2sTjLkd6DT1gextlFL2Yvgzfn6qFdGbezgh8EaTXTYhQKe4ZbZImlprYy1w4K1RindnctXm2F27p494pH8LnjL35sM6Q2CD+kNwucqvz5NiLHlklR2en+D8FFWunkwHKrj4MR+3/wfVyEm0nk+RdL1mH1xdPVUj1OgM3NRIN9Vw0Dy5COOd+W9THqc8ltH0ENW3nxX/eUiCmLuHGKZRGNO/Wr0h9oBfyP8ZAmwuxhGIaU9Ovfj5uJgycU0HDv4cHww/3Pk6cM4Vd5o7iDdUXMU6Lq+v2+iB7UNYDv6C0wPaVmu7l7IEK2vUNkPy+pEq1sHMK9NGESJNJNoxdIE9XYHLYrXxF66IUWxQ0+Q6S+iyCcqitQyieLeIdNG8yaKWZWUXbocRPlcX9VagaV8BtWVvVRY0cJtE2XlfKUwnL9bcO5TlvPVrb14ipbNLEm0UHQNyvZ3JvKnT82pmX/9Tbv++EtuJgGrZf7T3ur3RZVkXofSbIl2yF2I8hXPlbyBZ5raH2T25TAW+dUzr9QTbzc2PPNaXpirp8jsER1ZFvKvZCW869nJO3MAdrI0G41GIf8AzTox90KzC/sAAAAASUVORK5CYII="
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;  