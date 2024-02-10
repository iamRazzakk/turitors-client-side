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
import MyAssignment from './components/Myassignment/MyAssignment';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()

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
        loader: ({ params }) => fetch(`https://turitors-server-side.vercel.app/createAssainment/${params.title}`)
      },
      {
        path: '/createAssainment',
        element: <PrivateRoute><TotalAssainment></TotalAssainment></PrivateRoute>
      },
      {
        path: '/assignmentDetail/:id',
        element: <PrivateRoute><AssinmentDetail></AssinmentDetail></PrivateRoute>,
        // loader: ({ params }) => fetch(`https://turitors-server-side.vercel.app/assignmentDetail/${params.id}`)
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
        loader: ({ params }) => fetch(`https://turitors-server-side.vercel.app/updateAssignment/${params.id}`)
      },
      {
        path: '/myassignment',
        element: <PrivateRoute><MyAssignment></MyAssignment></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='bg-white lg:w-[1280px] md:w-[760px] mx-auto font-Noto'>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </HelmetProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </div>
)
