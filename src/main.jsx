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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2>Error</h2>,
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
        element: <AddCourse></AddCourse>
      },
      {
        path: '/seeAssinment/:title',
        // element: <CourseList></CourseList>,
        element: <AssignmintListCategory></AssignmintListCategory>,
        loader: ({ params }) => fetch(`http://localhost:5000/createAssainment/${params.title}`)

      },
      {
        path: '/createAssainment',
        element: <TotalAssainment></TotalAssainment>
      },
      {
        // path: '/assignmentDetail/6547d99f60e1314ad78f75ea',
        path: '/assignmentDetail/:id',
        element: <AssinmentDetail></AssinmentDetail>
      },
      {
        path:"/TotalassinmentUpdate/:id",
        element: <TotalAssainmentUpdate></TotalAssainmentUpdate>,
      }
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
