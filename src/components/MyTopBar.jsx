import React from "react";
import Logo from "../assets/logo.png";

class MyTopBar extends React.Component {
  render() {
    return (
      <div>
        <div className="topBar">
          <div className="left">
            <img src={Logo} alt="logo" />
            <div id="myBar">
              <div>Home</div>
              <div>Tv Shows</div>
              <div>Movies</div>
              <div>Recently Added</div>
              <div>My List</div>
            </div>
          </div>
          <div className="right">
            <div>Kids</div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyTopBar;
