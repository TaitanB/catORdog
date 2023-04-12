import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
`;

export const ErrorMessage = styled.div`
  padding: 30px 0;
  font-size: 28px;
  font-weight: 700;
`;

// export const Overlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(0, 0, 0, 0.6);
// `;
