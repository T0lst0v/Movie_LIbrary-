﻿import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import { LeftArrow, RightArrow } from "./Arrows";
import "../styles/cardSmall.css";
import Card from "./Card";

// Allows scroll wheel to move the carousel
function onWheel(apiObj, ev) {
  const isTouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

  if (isTouchpad) {
    ev.stopPropagation();
    return;
  }

  if (ev.deltaY < 0) {
    apiObj.scrollNext();
  } else if (ev.deltaY > 0) {
    apiObj.scrollPrev();
  }
}

export default function Carousel(props) {
  // const [movies] = useState(fakeMovies);
  const movies = props.movieArr || [];
  console.log("+++++++++++");
  console.log(movies);

  return (
    <div className="carousel-wrap">
      <div className="card-small-list">
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} onWheel={onWheel}>
          {movies.map((movie, index) => {
            return (
              <Card
                movie={movie}
                movieSelect={props.movieSelect} // title={movie.Year}
                itemId={index} // itemId is required to track items
                key={movie.imdbID}
              />
            );
          })}
        </ScrollMenu>
      </div>
    </div>
  );
}

Carousel.defaultProps = {
  movieArr: [],
};
