import {
  MainContent,
  ContactsBookLine,
  Phonebook,
  UseInfo,
} from './Home.styled';
import { useState } from 'react';

export default function Home() {
  const [isClickedContacts, setIsClickedContacts] = useState('');

  const handleClick = () => {
    return setIsClickedContacts(true);
  };
  return (
    <MainContent>
      <h2 className="homePage">Home Page</h2>
      <ContactsBookLine to="/phonebook" size="70" onClick={handleClick}>
        <div>Enter</div>
      </ContactsBookLine>
      {isClickedContacts ? (
        <UseInfo>To continue you should register or log in</UseInfo>
      ) : (
        ''
      )}
      <Phonebook>Your Phonebook</Phonebook>
    </MainContent>
  );
}
