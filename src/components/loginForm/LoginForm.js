import { Formik } from 'formik';
import {
  MainForm,
  Lable,
  InputField,
  ErrorMess,
  Button,
} from './LoginForm.styled';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operation';

const initialValues = { email: '', password: '' };
const EmailAlert = 'Please enter valid email';
const PasswordAlert = 'Password should be at least 6 characters';

let schema = yup.object().shape({
  email: yup.string().email(EmailAlert).required('Email is required'),
  password: yup
    .string()
    .min(6, PasswordAlert)
    .required('Password is requaired'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
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
          <InputField type="email" name="email" placeholder="Email" />
        </Lable>
        <ErrorMess name="email" component="p" />
        <Lable>
          <InputField type="password" name="password" placeholder="Password" />
        </Lable>
        <ErrorMess name="password" component="p" />
        <Button type="submit">Log In</Button>
      </MainForm>
    </Formik>
  );
};
