import { useAuth } from "components/hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operation";
import { Button, UserGreating, User, UserBox } from "./UserMenu.styled";
import {BiUserCircle}  from 'react-icons/bi'

export const UserMenu = () => {
    const dispatch = useDispatch()
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut())
    
    return <UserBox>
        <UserGreating>welcome!</UserGreating>
        <User><BiUserCircle size="30"></BiUserCircle>  {user.name}</User>
        <Button type='button' onClick={handleLogOut}>Logout</Button>
    </UserBox>;
}