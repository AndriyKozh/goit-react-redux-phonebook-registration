import { Formik } from 'formik';
import {
  MainForm,
  Lable,
  InputField,
  ErrorMess,
  Button,
} from './RegisterForm.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operation';

const initialValues = { name: '', email: '', password: '' };
const massageName =
  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
const EmailAlert = 'Please enter valid email';
const PasswordAlert = 'Password should be at least 6 characters';
const patternName = /^[a-zA-ZÀ-ÖÙ-öù-ÿĀ-žḀ-ỿ0-9\s\-.]+$/;

let schema = yup.object().shape({
  name: yup
    .string()
    .matches(patternName, massageName)
    .required('Name is required'),
  email: yup.string().email(EmailAlert).required('Email is required'),
  password: yup
    .string()
    .min(6, PasswordAlert)
    .required('Password is requaired'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <MainForm autoComplete="off">
        <Lable>
          <InputField type="text" name="name" placeholder="Username" />
        </Lable>
        <ErrorMess name="name" component="p" />
        <Lable htmlFor="">
          <InputField type="email" name="email" placeholder="Email" />
        </Lable>
        <ErrorMess name="email" component="p" />
        <Lable htmlFor="">
          <InputField type="password" name="password" placeholder="Password" />
        </Lable>
        <ErrorMess name="password" component="p" />
        <Button type="submit">Register</Button>
      </MainForm>
    </Formik>
  );
};
