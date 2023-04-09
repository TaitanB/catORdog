import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyled = styled(Form)`
  width: 320px;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FieldStyled = styled(Field)`
  width: 100%;
  margin-bottom: 10px;
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  width: 100%;
  color: red;
  margin-bottom: 10px;
  text-align: center;
`;

export const CheckboxStyled = styled(Field)`
  background-color: blue;
  margin-bottom: 10px;
`;

export const FormBtn = styled.button`
  font-family: inherit;
  background-color: #0b4f17;
  width: 70px;
  height: 70px;
  padding: 14px 0;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  box-shadow: 0 7px 0 #05300d;
  transition: background-color 0.4s ease-in-out, box-shadow 0.4s ease-in-out,
    scale 0.4s ease-in-out;

  :hover,
  :focus {
    scale: 0.95;
    box-shadow: 0 7px 0 rgb(15 57 112);
    background-color: #2684ff;
  }
`;

export const BtnText = styled.p`
  color: #f8eeee;
  font-size: 11px;
  line-height: 1.8;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0px 0px 1px #212121, 2px 2px 1px #212121;
`;

export const FormTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 10px;
`;
