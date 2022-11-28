import { LinkStyle } from './AuthNav.styled';

export const AuthNav = () => {
    return <div>
    <LinkStyle to='/register'>
        Register
    </LinkStyle>
    <LinkStyle to='/login'>
        Log In
    </LinkStyle>
    </div>
}
