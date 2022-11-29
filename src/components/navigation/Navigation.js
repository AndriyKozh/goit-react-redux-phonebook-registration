import { LinkStyle } from './Navigation.styled';
import { useAuth } from 'components/hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      {!isLoggedIn ? (
        <LinkStyle to="/">Home</LinkStyle>
      ) : (
        <LinkStyle to="/phonebook">Phonebook</LinkStyle>
      )}
    </nav>
  );
};
