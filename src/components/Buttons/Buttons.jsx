import React from 'react';
import { FaCat, FaDog } from 'react-icons/fa';

import { Button, ButtonContainer, ButtonText, Text } from './Buttons.styled';

export default function Buttons({ selectCat, selectDog }) {
  return (
    <ButtonContainer>
      <Button type="button" onClick={selectCat}>
        <FaCat style={{ width: '24', height: '24' }} />
        <ButtonText>cat ?</ButtonText>
      </Button>
      <Text>or</Text>
      <Button type="button" onClick={selectDog}>
        <FaDog
          style={{
            width: '24',
            height: '24',
            transform: 'scale(-1, 1)',
          }}
        />
        <ButtonText>dog ?</ButtonText>
      </Button>
    </ButtonContainer>
  );
}

// export const Buttons = ({ selectCat, selectDog }) => {
//   return (
//     <ButtonContainer>
//       <Button type="button" onClick={selectCat}>
//         <p>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="#ffffff"
//             width="24"
//             height="24"
//           >
//             <path d="M17 14a5 5 0 0 0 2.71-.81L20 13a3.16 3.16 0 0 0 .45-.37l.21-.2a4.48 4.48 0 0 0 .48-.58l.06-.08a4.28 4.28 0 0 0 .41-.76 1.57 1.57 0 0 0 .09-.23 4.21 4.21 0 0 0 .2-.63l.06-.25A5.5 5.5 0 0 0 22 9V2l-3 3h-4l-3-3v7a5 5 0 0 0 5 5zm2-7a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-4 0a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"></path>
//             <path d="M11 22v-5H8v5H5V11.9a3.49 3.49 0 0 1-2.48-1.64A3.59 3.59 0 0 1 2 8.5 3.65 3.65 0 0 1 6 5a1.89 1.89 0 0 0 2-2 1 1 0 0 1 1-1 1 1 0 0 1 1 1 3.89 3.89 0 0 1-4 4C4.19 7 4 8.16 4 8.51S4.18 10 6 10h5.09A6 6 0 0 0 19 14.65V22h-3v-5h-2v5z"></path>
//           </svg>
//         </p>
//         Cat
//         <IconContext.Provider value={{ color: '#fff' }}>
//           <IoMdHelp />
//         </IconContext.Provider>
//       </Button>
//       <BtnAbout type="button">About Us</BtnAbout>
//       <AboutUs />
//       <Button type="button" onClick={selectDog}>
//         <p>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="#ffffff"
//             width="24"
//             height="24"
//             transform="scale(-1, 1)"
//           >
//             <path d="M21 6h-2l-1.27-1.27A2.49 2.49 0 0 0 16 4h-2.5A2.64 2.64 0 0 0 11 2v6.36a4.38 4.38 0 0 0 1.13 2.72 6.57 6.57 0 0 0 4.13 1.82l3.45-1.38a3 3 0 0 0 1.73-1.84L22 8.15a1.06 1.06 0 0 0 0-.31V7a1 1 0 0 0-1-1zm-5 2a1 1 0 1 1 1-1 1 1 0 0 1-1 1z"></path>
//             <path d="M11.38 11.74A5.24 5.24 0 0 1 10.07 9H6a1.88 1.88 0 0 1-2-2 1 1 0 0 0-2 0 4.69 4.69 0 0 0 .48 2A3.58 3.58 0 0 0 4 10.53V22h3v-5h6v5h3v-8.13a7.35 7.35 0 0 1-4.62-2.13z"></path>
//           </svg>
//         </p>
//         Dog
//         <IconContext.Provider value={{ color: '#fff' }}>
//           <IoMdHelp />
//         </IconContext.Provider>
//       </Button>
//     </ButtonContainer>
//   );
// };
