import React from "react";
import Logo from "../assets/logo.png";
import { useLocation, Link } from "react-router-dom";

const MyTopBar = (props) => {
  const location = useLocation();
  return (
    <div>
      <div className="topBar">
        <div className="left">
          <img src={Logo} alt="logo" />
          <div id="myBar">
            <Link className={`links ${location.pathname === "/" ? "blackB fw-bold" : ""}`} to="/">
              Home
            </Link>
            <Link className={`links ${location.pathname === "/tvshows" ? "blackB fw-bold" : ""}`} to="/tvshows">
              Tv Shows
            </Link>
            <Link className={`links ${location.pathname === "/movies" ? "blackB fw-bold" : ""}`} to="/movies">
              Movies
            </Link>
            <Link
              className={`links ${location.pathname === "/recentlyadded" ? "blackB fw-bold" : ""}`}
              to="/recentlyadded"
            >
              Recently Added
            </Link>
            <Link className={`links ${location.pathname === "/mylist" ? "blackB fw-bold" : ""}`} to="/mylist">
              My List
            </Link>
          </div>
        </div>
        <div className="right">
          <div>Kids</div>
        </div>
      </div>
    </div>
  );
};
export default MyTopBar;
