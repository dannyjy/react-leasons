import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import CouterPage from "../pages/CouterPage";
import TaskManagerPage from "../pages/TaskManagerPage";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <CouterPage />
            },
            {
                path: "tasks",
                element: <TaskManagerPage />
            }
        ]
    }
])

export default router;