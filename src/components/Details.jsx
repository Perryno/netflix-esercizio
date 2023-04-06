import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Details = () => {
  const [valore, setValore] = 
  const Params = useParams();
  console.log(Params);

  const mifetch = async () => {
    try {
      const miaresponse = await fetch(`http://www.omdbapi.com/?i=${Params.filmId}&apikey=327719c0`);
      if (miaresponse.ok) {
        const miadata = await miaresponse.json();
        console.log(miadata);
      } else {
        console.log("error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };
  mifetch();

  return (
    <div>
      <div className="title white">{}</div>
      <div className="img"></div>
      <div className="year"></div>
    </div>
  );
};

export default Details;
