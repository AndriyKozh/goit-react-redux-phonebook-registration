import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { Contact } from '../../components/General.styled';
import { ContactForm } from '../../components/contactForm/ContactForm';
import { Filter } from '../../components/filter/Filter';
import { ContactList } from '../../components/contactList/ContactList';
import { useEffect } from 'react';
import Clock from 'components/Clock/Clock';

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />
      <Clock />
      <Filter />
      <Contact>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </Contact>
    </div>
  );
}
