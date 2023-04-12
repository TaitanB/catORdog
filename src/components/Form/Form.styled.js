import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  width: 990px;
  height: 50vh;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LabelStyled = styled.label`
  width: 600px;
  margin-bottom: 30px;
  position: relative;
  text-align: center;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgb(15 57 112);
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: red;
  position: absolute;
  text-align: center;
  left: 50%;
  transform: translate(-50%, 0);
`;

export const CheckboxStyled = styled(Field)`
  background-color: blue;
`;

export const FormBtn = styled.button`
  font-family: inherit;
  padding: 10px;
  border-radius: 10px;
  background-color: rgb(68 68 70);
  cursor: pointer;
  border: none;
  color: #f8eeee;
  font-size: 18px;
  font-weight: 700;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
  transition: background-color 0.4s ease-in-out, scale 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 0.95;
    background-color: #2684ff;
  }
`;

export const FormTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 10px;
`;
