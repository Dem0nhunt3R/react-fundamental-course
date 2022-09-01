import React, {useContext} from 'react';
import {AuthContext} from "../../../context";
import MyButton from "../MyButton/MyButton";
import {Link} from "react-router-dom";

const NavBar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    }

    return (
        <div>
            <MyButton onClick={logout}>
                Log out
            </MyButton>
            <div>
                <Link to={'/about'}>about</Link>
                <Link to={'/posts'}>posts</Link>
            </div>
        </div>
    );
};

export default NavBar;