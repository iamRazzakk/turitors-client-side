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
import TotalAssainment from './TotalAssainment/TotalAssainment';
import AddCourse from './addCourse/AddCourse';
import AssignmintListCategory from './AssignmintListCategory/AssignmintListCategory';
import Home from './Home/Home';
import AssinmentDetail from './components/Category/AssinmentDetail';
import TotalAssainmentUpdate from './TotalAssainment/TotalAssainmentUpdate';
import SubmitedAssignment from './components/SubmitedAssignment/SubmitedAssignment';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Error from './Error/Error';
import UpdateAssignment from './components/updateAssignment/UpdateAssignment';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
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
        element: <PrivateRoute><AddCourse></AddCourse></PrivateRoute>
      },
      {
        path: '/seeAssinment/:title',
        element: <AssignmintListCategory></AssignmintListCategory>,
        loader: ({ params }) => fetch(`http://localhost:5000/createAssainment/${params.title}`)
      },
      {
        path: '/createAssainment',
        element: <PrivateRoute><TotalAssainment></TotalAssainment></PrivateRoute>
      },
      {
        path: '/assignmentDetail/:id',
        element: <PrivateRoute><AssinmentDetail></AssinmentDetail></PrivateRoute>,
        // loader: ({ params }) => fetch(`http://localhost:5000/assignmentDetail/${params.id}`)
      },
      {
        path: "/TotalassinmentUpdate/:id",
        element: <TotalAssainmentUpdate></TotalAssainmentUpdate>,
      },
      {
        path: '/submitedAssignment',
        element: <PrivateRoute><SubmitedAssignment></SubmitedAssignment></PrivateRoute>
      },
      {
        path: '/updateAssignment/:id',
        element: <PrivateRoute><UpdateAssignment></UpdateAssignment></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/createAssainment/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-gradient-to-r from-[#f1e7e7] text-black  to-[#87ceeb]'>
    <React.StrictMode>
      <HelmetProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </HelmetProvider>
    </React.StrictMode>
  </div>,
)
