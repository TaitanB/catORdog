import styled from 'styled-components';

export const FooterContent = styled.div`
  background-color: rgba(217, 217, 217, 0.2);
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

export const FooterBtn = styled.button`
  font-family: inherit;
  background-color: #0b4f17;
  width: 70px;
  height: 70px;
  padding: 14px 0;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 7px 0 #05300d;

  :hover,
  :focus {
    scale: 0.95;
    box-shadow: 0 7px 0 rgb(15 57 112);
    background-color: #2684ff;
  }
`;

export const ButtonText = styled.p`
  color: #f8eeee;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
`;

export const FooterLink = styled.a`
  weight: 200px;
  font-weight: 800;
  font-size: 20px;
  text-align: center;
  color: #1d2725;
  text-shadow: -1px -1px 0 #f8eeee, 1px -1px 0 #f8eeee, -1px 1px 0 #f8eeee,
    1px 1px 0 #f8eeee;

  :hover,
  :focus {
    scale: 0.9;
    text-shadow: -1px -1px 0 #2684ff, 1px -1px 0 #2684ff, -1px 1px 0 #2684ff,
      1px 1px 0 #2684ff;
  }
`;

export const FooterLogo = styled.p`
  font-size: 28px;
  font-weight: 800;
  color: #f8eeee;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
`;
