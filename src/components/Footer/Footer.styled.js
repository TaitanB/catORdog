import styled from 'styled-components';

export const FooterSection = styled.footer`
  width: 100%;
  padding: 0 20px;
`;

export const FooterContent = styled.div`
  background-color: rgba(217, 217, 217, 0.2);
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px 0;
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
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out,
    scale 0.4s ease-in-out;

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
  line-height: 1.8;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
`;

export const FooterLink = styled.a`
  display: flex;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  /* text-shadow: -1px -1px 0 #f8eeee, 1px -1px 0 #f8eeee, -1px 1px 0 #f8eeee,
    1px 1px 0 #f8eeee; */
  color: #f8eeee;
  font-weight: 700;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
  border-radius: 10px;
  box-shadow: rgb(68 68 70) 0px 0px 20px 10px inset;
  transition: box-shadow 0.4s ease-in-out, scale 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 0.9;
    box-shadow: inset #2684ff 0px 0px 20px 10px;
  }
`;

export const FooterLogo = styled.p`
  font-size: 36px;
  font-weight: 800;
  color: #f8eeee;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
  transition: color 0.4s ease-in-out, scale 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 1.2;
    color: #2684ff;
  }
`;
