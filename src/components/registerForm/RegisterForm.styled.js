import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const MainForm = styled(Form)`
  display: flex;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 75%;
  padding: 0 20px 0 20px;
  width: 89%;

  border-radius: 4px;
`;

export const Lable = styled.label`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: transparent;
`;

export const InputField = styled(Field)`
  width: 105%;
  height: 30px;
  border: transparent;
  padding: 4px 10px 4px 10px;

  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
`;
export const ErrorMess = styled(ErrorMessage)`
  margin: 5px;
  color: #f45707;
  font-style: italic;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: left;
`;
export const Button = styled.button`
  padding: 5px 10px 5px 10px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  font-weight: bold;
  font-size: large;

  width: 120px;
  border: none;
  border-radius: 10px;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
    rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;
  &:hover,
  :focus {
    background-color: #2a404e;
    color: #fafaf8;
    transition: all 300ms ease;
  }
`;
