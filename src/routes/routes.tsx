import { RouteObject } from 'react-router-dom';
import Root from "./root";
import ErrorPage from "../pages/Error";
import Home from "../pages/Home";
import { loader as GeneratedLoader } from "../pages/Generated/loader";
import Generated from "../pages/Generated";
import RevealError from "../pages/RevealError";

// Define the route objects with TypeScript types
export const Routes: RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/generated/:id",
                element: <Generated />,
                loader: GeneratedLoader,
                errorElement: <RevealError />,
            }
        ],
    }
];
