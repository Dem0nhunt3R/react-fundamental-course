import AppRouter from "./components/AppRouter/AppRouter";
import {useEffect, useState} from "react";
import {AuthContext} from "./context";
import {BrowserRouter} from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";

function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <NavBar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
