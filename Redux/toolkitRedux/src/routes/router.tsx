import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Profile from '../pages/Profile';
import ProtectRoutes from '../components/ProtectRoutes';
import Dashboard from '../pages/Dashboard';
import Login from '../components/Login';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: Profile
            }
        ]
    },
    {   
        element: <ProtectRoutes />,
        children: [
            {path: "/dashboard", element: <Dashboard />}
        ]
    },
    {
        path: "/login",
        element: <Login />
    }
])
