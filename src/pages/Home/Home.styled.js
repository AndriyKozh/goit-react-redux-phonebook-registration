import styled from 'styled-components';
import { FaAddressBook } from 'react-icons/fa';

export const MainContent = styled.div`
  display: flex;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80%;
  padding: 0 20px 0 20px;
  width: 85%;

  gap: 15px;
  border-radius: 4px;
`;
export const ContactsBookLine = styled(FaAddressBook)`
  color: rgb(251, 225, 255);
  height: 20%;
  width: 60%;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  border-radius: 5px;
  transition: all 300ms ease;

  &:hover {
    background-color: #2a404e;
    transition: all 500ms ease;
  }
`;

export const Phonebook = styled.h1`
  position: absolute;
  top: 70%;
`;

export const UseInfo = styled.h3`
  margin: 5px;
  color: #f45707;
  font-style: italic;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`;
