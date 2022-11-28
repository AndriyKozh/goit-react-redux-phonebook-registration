import { Navigation } from 'components/navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import { AuthNav } from 'components/authNav/AuthNav';
import { useAuth } from 'components/hooks';
import { Container } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};

// FaAddressBook
