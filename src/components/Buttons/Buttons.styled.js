import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  padding: 20px 0;
  z-index: 0;
`;

export const Button = styled.button`
  font-family: inherit;
  background-color: #0b4f17;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 10px 0 #05300d;
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out,
    scale 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 0.95;
    background-color: #2684ff;
    box-shadow: 0 10px 0 rgb(15 57 112);
  }
`;

export const ButtonText = styled.p`
  color: #f8eeee;
  font-size: 28px;
  font-weight: 700;
  /* text-transform: uppercase; */
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
`;

export const Text = styled.span`
  color: #f8eeee;
  font-size: 72px;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
`;
