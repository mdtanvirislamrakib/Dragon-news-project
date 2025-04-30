import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
    },
    {
        path: "/auth",
        element: <div>Authentication Layout</div>
    },
    {
        path: "/news",
        element: <div>News Layout</div>
    }
]);
export default router