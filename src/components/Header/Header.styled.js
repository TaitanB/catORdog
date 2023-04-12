import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`
  width: 100%;

  padding: 0 20px;
`;

export const HeaderContent = styled.div`
  background-color: rgba(217, 217, 217, 0.2);
  width: 100%;
  height: 110px;
  position: absolute;
  left: 0;
  top: 0;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
`;

export const HeaderNav = styled.nav`
  display: flex;
  gap: 10px;
`;

export const HeaderNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  color: #f8eeee;
  font-size: 20px;
  font-weight: 700;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
  /* box-shadow: rgb(68 68 70) 0px 0px 20px 10px inset; */
  border-radius: 10px;
  background-color: rgb(68 68 70);
  transition: background-color 0.4s ease-in-out, scale 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 0.9;
    background-color: #2684ff;
    /* box-shadow: inset #2684ff 0px 0px 20px 10px; */
  }
`;
