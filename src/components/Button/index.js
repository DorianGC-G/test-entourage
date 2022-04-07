import React from "react";
import PropTypes from "prop-types";

// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback, id }) => (
  <Wrapper type="button" onClick={callback} id={id}>
    {text}
  </Wrapper>
);

Button.propType = {
  text: PropTypes.string,
  id: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
