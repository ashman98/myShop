import React, {useContext} from "react";
import { Route, Routes } from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {Context} from "../index";
import AuthPage from "../pages/AuthPage";
import {REGISTRATION_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const isAuth = false;
    const {user} = useContext(Context);
    return (
        <Routes>
            {
                user.isAuth && authRoutes.map(({path,component}) => ( //проверка на авторизацию и создание маршрутов
                    <Route
                        key={path} //ключ
                        path={path} //путь
                        element={component} //компонент
                        exact //exact - совпадение пути с путем в роуте
                    />
                ))
            }
            {
                publicRoutes.map(({path, component}) => (
                    <Route
                        key={path}
                        path={path}
                        element={component}
                        exact
                    />
                ))
            }
            <Route path={REGISTRATION_ROUTE} element={ <AuthPage /> } />
        </Routes>
    )
}

export default AppRouter;