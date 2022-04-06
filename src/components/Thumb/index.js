import React from "react";

// Routing
import { Link } from "react-router-dom";

// Styles
import { Image, Wrapper, Title } from './Thumb.styles';

const Thumb = ({ image, movieId, clickable, title, id }) => (
  <Wrapper>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie-thumb" />
        </Link>
      ) : (<Image src={image} alt="movie-thumb" />)}
    <Title id={id}>{title}</Title>
  </Wrapper>
);

export default Thumb;