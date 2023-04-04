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
  /* background-color: red; */
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
  background-color: blue;
`;

export const FormTitle = styled.h2`
  font-weight: 800;
  margin-bottom: 10px;
`;
