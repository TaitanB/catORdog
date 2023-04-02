import styled from 'styled-components';

export const Button = styled.button`
  color: #e0eee3;
  background-color: #0b4f17;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  box-shadow: 0 10px 0 #05300d;
  text-transform: uppercase;

  :hover,
  :focus {
    scale: 0.95;
    background-color: #2684ff;
    box-shadow: 0 10px 0 rgb(15 57 112);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 50px;
`;

export const BtnAbout = styled.button`
  color: #e0eee3;
  background-color: #2684ff;
  width: 50px;
  height: 50px;
  padding: 14px 0;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  box-shadow: 0 7px 0 rgb(15 57 112);

  :hover,
  :focus {
    scale: 0.95;
    box-shadow: 0 7px 0 #05300d;
    background-color: #0b4f17;
  }
`;
