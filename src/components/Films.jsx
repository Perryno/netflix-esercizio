import React from "react";
import { Link } from "react-router-dom";

class Films extends React.Component {
  state = {
    elements: []
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${this.props.search}&apikey=327719c0`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.setState({ elements: data });
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const { elements } = this.state;
    return (
      <div className="row no-wrap d-flex imagesContainer ">
        {elements.Search &&
          elements.Search.map((element) => (
            <div className="col col-md-2 col-xl-3 col-sm-6 imageContainer" key={element.imdbID}>
              <Link to={"/details/" + element.imdbID}>
                <img className="imagePoster" src={element.Poster} alt="Poster" />
              </Link>
            </div>
          ))}
      </div>
    );
  }
}

export default Films;
