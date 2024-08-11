import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import './App.css';
import Root from "./routes/root";
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import Generated, { loader as GeneratedLoader } from './pages/Generated';

// Define the route objects with TypeScript types
const routes: RouteObject[] = [
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
      }
    ],
  }
];

const router = createBrowserRouter(routes);

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
