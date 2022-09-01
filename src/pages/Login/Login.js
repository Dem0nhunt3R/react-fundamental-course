import React, {useContext} from 'react';
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
import {AuthContext} from "../../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = (e) => {
        e.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div>

            <h1>Login Page</h1>
            <form onSubmit={login}>
                <MyInput type='text' placeholder='Enter login'/>
                <MyInput type='text' placeholder='Enter password'/>
                <MyButton>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;