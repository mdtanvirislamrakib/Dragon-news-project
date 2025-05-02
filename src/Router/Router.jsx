import { createBrowserRouter } from "react-router";
import HomeLayouts from "../Layouts/HomeLayouts";
import Home from "../pages/Home/Home";
import CategoryNews from "../pages/CategoryNews/CategoryNews";

const router = createBrowserRouter([
    {
        path: "/",
        Component: HomeLayouts,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/category/:id",
                element: <CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path: "/auth",
        element: <div>Authentication Layout</div>
    },
    {
        path: "/news",
        element: <div>News Layout</div>
    },
    {
        path: "/about",
        element: <div>I am about</div>
    },
    {
        path: "/career",
        element: <div>I am career</div>
    }
]);
export default router