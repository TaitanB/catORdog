import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 800;
  color: #f8eeee;
  margin-top: 150px;
  /* text-shadow: -1px -1px 0 #212121, 1px -1px 0 #212121, -1px 1px 0 #212121,
    1px 1px 0 #212121; */
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
  /* -webkit-text-stroke: 1px black; */
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  z-index: 9999;
`;

export const ErrorMessage = styled.div`
  padding: 30px 0;
  font-size: 28px;
  font-weight: 700;
`;
