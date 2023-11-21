import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "react-slideshow-image/dist/styles.css";
import Index from './routes/Index';
import Quizzes from './routes/Quizzes';
import Adopt from './routes/Adopt';
import Root from './routes/Root';
import './puppyprep.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />
      },
      {
        path: "/quizzes",
        element: <Quizzes />
      },
      {
        path: "/adopt",
        element: <Adopt />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
