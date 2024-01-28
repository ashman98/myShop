import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import AuthPage from "./pages/AuthPage";
import ShopPage from "./pages/ShopPage";
import BasketPage from "./pages/BasketPage";
import DevicePage from "./pages/DevicePage";

export const authRoutes = [
    {
        path: ADMIN_ROUTE, // Путь: http://localhost:3000/auth
        component:<AuthPage />, // Компонент страницы
        name: 'Auth',// Имя маршрута
    },
    {
        path: BASKET_ROUTE, // Путь: http://localhost:3000/auth
        component: <BasketPage />, // Компонент страницы
        name: 'Basket',// Имя маршрута
    }
];

export const publicRoutes = [
    {
        path: SHOP_ROUTE, // Путь: http://localhost:3000/
        component: <ShopPage />, // Компонент страницы
        name: 'Shop', // Имя маршрута
    },
    {
        path: LOGIN_ROUTE, // Путь: http://localhost:3000/login
        component: <AuthPage />, // Компонент страницы
        name: 'Login', // Имя маршрута
    },
    {
        path: REGISTRATION_ROUTE, // Путь: http://localhost:3000/registartion
        component: <AuthPage />, // Компонент страницы
        name: 'Registration', // Имя маршрута
    },
    {
        path: DEVICE_ROUTE + '/:id', // Путь: http://localhost:3000/device?id=1
        component: <DevicePage />, // Компонент страницы
        name: 'Device', // Имя маршрута
    }
]