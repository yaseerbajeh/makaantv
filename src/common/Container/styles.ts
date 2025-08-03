import styled from "styled-components";

export const StyledContainer = styled("div")<{
  border?: boolean;
}>`
  position: relative;
  width: 100%;
  max-width: 2200px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 60px;
  overflow: hidden;
  box-sizing: border-box;
  border-top: ${(p) => (p.border ? "1px solid #CDD1D4" : "")};

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 40px);
    padding: 0 20px;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100vw;
    padding: 0 12px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100vw;
    padding: 0 8px;
  }
`;