import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 2px solid var(--darkGray);
  border-radius: 10px;
  background: var(--lightGray);
  font-weight: 600;
`;
export const Image = styled.img`
  width: 100%;
  max-width: 720px;
  min-height: 341px;
  transition: all 0.3s;
  object-fit: cover;
  border-radius: 7px;
  animation: animateThumb 0.5s;
  :hover {
    opacity: 0.8;
  }
  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Title = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: flex-column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 20px 0px;
  padding: 0px 5px;
  &#no-title {
    display: none;
  }
`;