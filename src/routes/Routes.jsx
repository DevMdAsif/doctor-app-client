import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/home/Home";
import SingUp from "../pages/singUp/SingUp";
import Doctor from "../pages/singUp/Doctor";
import Patient from "../pages/singUp/Patient";
import Login from "../pages/login/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/singUp",
        element: <SingUp />,
      },
      {
        path: "/singUp/doctor",
        element: <Doctor />,
      },
      {
        path: "/singUp/patient",
        element: <Patient />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
