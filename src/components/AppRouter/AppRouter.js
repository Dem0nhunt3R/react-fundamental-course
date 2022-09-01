import React, {useContext} from 'react';
import {AuthContext} from "../../context";
import Loader from "../UI/Loader/Loader";
import {Route, Routes} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../../router";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route => {
                    const {path, component, exact} = route;

                    return <Route
                        element={component}
                        path={path}
                        exact={exact}
                        key={path}
                    />
                })}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route => {
                    const {path, component, exact} = route;

                    return <Route
                        element={component}
                        path={path}
                        exact={exact}
                        key={path}
                    />
                })}
            </Routes>
    );
};

export default AppRouter;