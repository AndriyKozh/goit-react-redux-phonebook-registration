import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operation';
import { selectContacts } from 'redux/contacts/selectors';
import { Formik } from 'formik';
// import * as yup from 'yup';
import {
  MainForm,
  Lable,
  InputField,
  ErrorMess,
  Button,
  NewContact,
} from './ContactForm.styled';
import Notiflix from 'notiflix';

// присвоюємо в константи умови для валідації
// const patternName =
//   /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
// const massageName =
//   "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan";
// const patternPhone = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/g;
// const massagePhone =
//   'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

// створюємо схему валідації для бібліотеки yap
// let schema = yup.object().shape({
//   name: yup
//     .string()
//     .matches(patternName, massageName)
//     .required('Name is required'),
//   number: yup
//     .string()
//     .matches(patternPhone, massagePhone)
//     .required('A phone number is required'),
// });

const initialValues = { name: '', number: '' };

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (values, { resetForm }) => {
    resetForm();
    if (contacts.some(contact => contact.name === values.name)) {
      Notiflix.Notify.failure('Contact is already in contact list');
    } else dispatch(addContact(values));
  };
  return (
    <>
      <NewContact>New contact</NewContact>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        // validationSchema={schema}
      >
        <MainForm>
          <Lable>
            <InputField type="text" name="name" placeholder="Name" />
          </Lable>
          <ErrorMess name="name" component="p" />
          <Lable>
            <InputField type="tel" name="number" placeholder="Number" />
          </Lable>
          <ErrorMess name="number" component="p" />
          <Button type="submit">Add contact</Button>
        </MainForm>
      </Formik>
    </>
  );
};
