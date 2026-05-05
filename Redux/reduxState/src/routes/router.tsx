import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import CouterPage from "../pages/CouterPage";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <CouterPage />
            }
        ]
    }
])

export default router;