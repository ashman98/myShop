import {
    HomeIcon,
    UserCircleIcon,
    TableCellsIcon,
    InformationCircleIcon,
    ServerStackIcon,
    RectangleStackIcon,
} from "@heroicons/react/24/solid";
import {ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import AuthPage from "./pages/AuthPage";
import ShopPage from "./pages/ShopPage";
import BasketPage from "./pages/BasketPage";
import DevicePage from "./pages/DevicePage";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/Home";


const icon = {
    className: "w-5 h-5 text-inherit",
};



export const authRoutes = [
    // {
    //     path: ADMIN_ROUTE, // Путь: http://localhost:3000/auth
    //     component:<AuthPage />, // Компонент страницы
    //     name: 'Auth',// Имя маршрута
    // },
    {
        path: BASKET_ROUTE, // Путь: http://localhost:3000/auth
        component: <BasketPage />, // Компонент страницы
        name: 'Basket',// Имя маршрута
    }
];

export const publicRoutes = [{
    layout: "dashboard",
    pages: [
    {
        path: SHOP_ROUTE, // Путь: http://localhost:3000/
        component: <ShopPage />, // Компонент страницы
        icon: <HomeIcon {...icon} />,
        name: 'Shop', // Имя маршрута
    },
    {
        path: LOGIN_ROUTE, // Путь: http://localhost:3000/login
        component: <AuthPage />, // Компонент страницы
        icon: <HomeIcon {...icon} />,
        name: 'Login', // Имя маршрута
    },
    {
        path: REGISTRATION_ROUTE, // Путь: http://localhost:3000/registartion
        component: <AuthPage />, // Компонент страницы
        icon: <HomeIcon {...icon} />,
        name: 'Registration', // Имя маршрута
    },
    {
        path: DEVICE_ROUTE + '/:id', // Путь: http://localhost:3000/device?id=1
        component: <DevicePage />, // Компонент страницы
        icon: <HomeIcon {...icon} />,
        name: 'Device', // Имя маршрута
    },
    {
        path: ADMIN_ROUTE, // Путь: http://localhost:3000/auth
        component:<DashboardPage />, // Компонент страницы
        icon: <HomeIcon {...icon} />,
        name: 'Auth',// Имя маршрута
    },
    {
        path: ADMIN_ROUTE + "/home",
        component: <Home />,
        icon: <HomeIcon {...icon} />,
        name: "dashboard",
    },
    ],
}]