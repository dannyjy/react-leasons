import { Outlet, Navigate } from "react-router";

const ProtectRoutes = () => {
    const isLoggedIn = false;
    return isLoggedIn ?  <Outlet /> : <Navigate to="login" replace/>
}

export default ProtectRoutes