import styled from 'styled-components';

export const ViewedList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 150px;
`;

export const ViewedTitle = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #f8eeee;
  padding-top: 150px;
  margin-bottom: 30px;
  text-shadow: -1px -1px 0px #212121, 3px 3px 0px #212121, 4px 4px 0px #00000055;
`;

export const ViewedUp = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  bottom: 150px;
  right: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: #2684ff;
  transition: color 0.4s ease-in-out, background-color 0.4s ease-in-out,
    scale 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 1.2;
    color: #fff;
    background-color: #2684ff;
  }
`;
