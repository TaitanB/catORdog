import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

export const PetContainer = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: center;
  width: 990px;
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 20px;
`;

export const PetImgContainer = styled.div`
  position: relative;
`;

export const PetImg = styled.img`
  border-radius: 20px;
`;

export const CatInfoList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5px;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
  justify-content: space-around;
`;

export const PetInfo = styled.b`
  display: block;
  margin-bottom: 10px;
`;

export const PetLink = styled.a`
  font-size: 20px;
  font-weight: 700;
  transition: text-shadow 0.4s ease-in-out;

  :hover,
  :focus {
    text-shadow: -1px -1px 0 #2684ff, 1px -1px 0 #2684ff, -1px 1px 0 #2684ff,
      1px 1px 0 #2684ff;
  }
`;

export const PetName = styled.h2`
  font-size: 26px;
  font-weight: 800;
`;

export const IconLike = styled.div`
  text-align: center;
  padding: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.75);
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const IconViewed = styled.div`
  text-align: center;
  padding: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.75);
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const IconHeart = styled(FaHeart)`
  transition: color 0.4s ease-in-out;
  fill: #918b8b;

  &:hover,
  &:focus {
    scale: 1.2;
    fill: red;
  }
`;
