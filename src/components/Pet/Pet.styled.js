import { FaHeart } from 'react-icons/fa';
import styled from 'styled-components';

export const PetContainer = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: center;
  width: 990px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: 20px;
  max-height: 50vh;
`;

export const PetImgContainer = styled.div`
  background-color: #21212175;
  position: relative;
  display: flex;
  border-radius: 20px;
`;

export const PetInfiContainer = styled.div`
  padding: 0 10px;
  max-height: 35vh;
  overflow: auto;
  margin-bottom: 10px;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #21212175;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2684ff;
  }
`;

export const PetImg = styled.img`
  border-radius: 20px;
  margin: 0 auto;
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

export const PetInfo = styled.p`
  display: inline-block;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 800;
`;

export const PetTest = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const PetLink = styled.a`
  display: block;
  width: 120px;
  font-size: 20px;
  font-weight: 700;
  padding: 10px 20px;
  transition: text-shadow 0.4s ease-in-out;

  :hover,
  :focus {
    text-shadow: -1px -1px 0 #2684ff, 1px -1px 0 #2684ff, -1px 1px 0 #2684ff,
      1px 1px 0 #2684ff;
  }
`;

export const PetName = styled.h2`
  display: inline;
  font-size: 28px;
  font-weight: 800;
  margin-bottom: 10px;
  padding-left: 10px;
`;

export const IconLike = styled.div`
  text-align: center;
  padding: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  position: absolute;
  top: 10px;
  left: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out, scale 0.4s ease-in-out;

  &:hover,
  &:focus {
    > svg {
      scale: 1.2;
    }
  }
`;

export const IconViewed = styled.div`
  text-align: center;
  padding: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255);
  position: absolute;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease-in-out, scale 0.4s ease-in-out,
    fill 0.4s ease-in-out;

  &:hover,
  &:focus {
    > svg {
      scale: 1.2;
      fill: #2684ff;
    }
  }
`;

export const IconHeart = styled(FaHeart)`
  transition: color 0.4s ease-in-out;
  fill: #918b8b;
`;
