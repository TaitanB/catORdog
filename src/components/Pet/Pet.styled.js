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
  border-radius: 30px;
`;

export const CatInfo = styled.div`
  display: flex;
  padding: 30px;
  justify-content: space-around;
`;

export const PetContent = styled.div`
  border: 1px solid #05300d;
`;
