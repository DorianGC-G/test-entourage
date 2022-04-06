import React from "react";

// Styles
import { Wrapper } from "./Button.styles";

const Button = ({ text, callback, id }) => (
  <Wrapper type='button' onClick={callback} id={id}>
    {text}
  </Wrapper>
);

export default Button;