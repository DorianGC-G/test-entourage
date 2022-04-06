import styled from "styled-components";

export const Wrapper = styled.button`
  display: block;
  background: var(--lightGray);
  border: 2px solid var(--darkGray);
  width: 15%;
  min-width: 200px;
  height: 50px;
  border-radius: 10px;
  color: var(--black);
  font-size: var(--fontL);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  :hover {
    background: var(--medGray);
    color: var(--white);
  }

  &#sort-button {
    font-size: var(--fontM);
  }
`
