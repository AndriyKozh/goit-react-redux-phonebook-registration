import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LinkStyle = styled(NavLink)`
  color: #2a404e;
  text-decoration: none;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  font-weight: bold;
  transition: all 500ms ease;

  :last-child {
    margin-left: 10px;
  }

  &.active {
    color: #1651b8;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: #1651b8;
  }
`;
