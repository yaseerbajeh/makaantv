import styled from "styled-components";

export const Content = styled("p")`
  margin-top: 2rem; /* Increased for spacing */
  font-size: 1.6rem; /* Larger text to fill page */
  line-height: 2.2rem;
  color: #333;
  text-align: right; /* RTL alignment for Arabic */

  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }

  @media only screen and (max-width: 320px) {
    font-size: 1.2rem;
    line-height: 1.8rem;
  }
`;

export const Container = styled("div")`
  position: relative;
  width: 100%; /* Full width to fill page */
  max-width: 100%; /* Remove max-width constraint */
  padding: 0 2rem; /* Increased padding for spacious look */
  direction: rtl; /* Arabic RTL support */
`;

export const Text = styled("h6")`
  font-size: 2.5rem; /* Larger title for prominence */
  font-weight: 700;
  color: #18216d;
  text-align: right; /* RTL alignment */
  margin-bottom: 1.5rem;

  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media only screen and (max-width: 320px) {
    font-size: 1.8rem;
  }
`;

export const TextWrapper = styled("div")`
  border-radius: 3rem;
  width: 100%; /* Full width to fill page */
  max-width: 100%; /* Remove max-width constraint */
  padding: 0 1rem; /* Consistent padding */
`;