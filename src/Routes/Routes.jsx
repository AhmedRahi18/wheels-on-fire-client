import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Blogs from "../Blogs/Blogs";
import ErrorPage from "../ErrorPage/ErrorPage";
import AddToys from "../AddToys/AddToys";
import MyToys from "../MyToys/MyToys";
import AllToys from "../AllToys/AllToys";
import UpdateToy from "../UpdateToy/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: 'login',
        element:<Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'blogs',
        element: <Blogs></Blogs>
      },
      {
        path:'addtoys',
        element:<AddToys></AddToys>
      },
      {
        path:'mytoys',
        element:<MyToys></MyToys>
      },
      {
        path:'alltoys',
        element:<AllToys></AllToys>
      },
      {
        path: 'update/:id',
        element: <UpdateToy></UpdateToy>,
        loader:({params})=>fetch(`http://localhost:5000/singletoy/${params.id}`)
      }
    ],
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
]);

export default router;
