import styled from 'styled-components';

export const PetContainer = styled.div`
  padding: 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  align-items: center;
  width: 990px;
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
