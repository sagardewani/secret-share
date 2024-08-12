import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import {Routes} from "./routes/routes";


const router = createBrowserRouter(Routes);

function App() {
  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}

export default App;
