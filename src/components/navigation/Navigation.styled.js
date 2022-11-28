import {NavLink } from "react-router-dom";
import styled from "styled-components";

export const LinkStyle = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 22px;
  font-weight: bold;
  transition: all 500ms ease;
  &.active {
    color: #1651B8;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #1651B8;
  }
`;