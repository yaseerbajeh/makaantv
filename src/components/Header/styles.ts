import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1.5rem 1rem; /* Moderate padding like referenced site */
  width: 100%;
  box-sizing: border-box;
  direction: rtl; /* Arabic RTL support */

  .ant-row-space-between {
    align-items: center;
    justify-content: space-between; /* Logo on right, buttons on left in RTL */
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;

  img, svg {
    width: 100%; /* Respect SvgIcon width */
    height: auto; /* Maintain aspect ratio */
    max-width: 200px; /* Match referenced site */
    max-height: 120px;
    @media only screen and (max-width: 768px) {
      max-width: 150px;
      max-height: 90px;
    }
    @media only screen and (max-width: 320px) {
      max-width: 120px;
      max-height: 72px;
    }
  }
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.8rem; /* Increased from 1.5rem */
  color: #18216d;
  transition: color 0.2s ease-in;
  margin: 0 2.2rem; /* Slightly increased from 0 2rem */
  min-width: 130px; /* Increased from 120px */

  @media only screen and (max-width: 768px) {
    margin: 1rem 1.7rem; /* Adjusted from 1rem 1.5rem */
    font-size: 1.6rem; /* Increased from 1.3rem */
    min-width: 110px; /* Increased from 100px */
  }

  @media only screen and (max-width: 320px) {
    font-size: 1.4rem; /* Increased from 1.1rem */
    min-width: 90px; /* Increased from 80px */
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
    width: 30px; /* Larger burger icon */
    height: 30px;
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }

  display: flex;
  align-items: center;
`;

export const Menu = styled("h5")`
  font-size: 2.2rem; /* Increased from 2rem */
  font-weight: 600;
  text-align: center;
  margin: 1rem 0;

  @media only screen and (max-width: 768px) {
    font-size: 2rem; /* Increased from 1.8rem */
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1.5rem;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 28px; /* Larger burger icon */
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1.8rem; /* Increased from 1.5rem */

  &:hover,
  &:active,
  &:focus {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;