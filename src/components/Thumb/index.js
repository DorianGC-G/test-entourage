import React from "react";

// Routing
import { Link } from "react-router-dom";

// Styles
import { Image, Wrapper } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable}) => (
  <Wrapper>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (<Image src={image} alt="movie-thumb" />)};
  </Wrapper>
);

export default Thumb;