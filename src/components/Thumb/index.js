import React from "react";
import PropTypes from "prop-types";

// Routing
import { Link } from "react-router-dom";

// Styles
import { Image, Wrapper, Title } from "./Thumb.styles";

const Thumb = ({ image, movieId, clickable, title, id }) => (
  <Wrapper>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
    <Title id={id}>{title}</Title>
  </Wrapper>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Thumb;
