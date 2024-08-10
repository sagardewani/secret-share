import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from "./routes/root";
import ErrorPage from './pages/Error';
import Home from './pages/Home';
import Generated, { loader as GeneratedLoader } from './pages/Generated';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        "path": "/",
        "element": <Home />,
      },
      {
        "path": "/generated/:id",
        "element": <Generated />,
        "loader": GeneratedLoader
      }
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
