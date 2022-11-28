
import { RegisterForm } from 'components/registerForm/RegisterForm';
// import { useSelector } from 'react-redux';
// import { selectError } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';
import { selectError } from 'redux/auth/selectors';
import { SectionTitle } from 'components/General.styled';

export default function Register() {
     const error = useSelector(selectError);
    return <div>
        <SectionTitle>Registration</SectionTitle>
        <RegisterForm />
        {error && <h3>{error}</h3>}
    </div>;
}