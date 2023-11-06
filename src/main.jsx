import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Main/Main';
import SingIn from './Registetion/SingIn';
import SingUp from './Registetion/SingUp';
import AuthProvider from './Provider/AuthProvider';
import AddCourse from './add course/AddCourse';
import CourseList from './CourseList/CourseList';
import TotalAssainment from './TotalAssainment/TotalAssainment';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2>Error</h2>,
    children: [
      {
        path: '/login',
        element: <SingIn></SingIn>
      },
      {
        path: '/singup',
        element: <SingUp></SingUp>
      },
      {
        path: '/addCourse',
        element: <AddCourse></AddCourse>
      },
      {
        path: '/seeassinment',
        element: <CourseList></CourseList>
      },
      {
        path:'/createAssainment',
        element:<TotalAssainment></TotalAssainment>
      }
      // {
      //   path: "/createAssainment",
      //   element: <TotalAssainment></TotalAssainment>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
