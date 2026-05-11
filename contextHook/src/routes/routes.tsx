import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import UserPage from "../pages/UserPage";
// import ProfilePage from "../pages/ProfilePage";
import CounterPage from "../pages/CounterPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <UserPage />
            },
            {
                path: "counter",
                element: <CounterPage />
            },

        ]
    },
])