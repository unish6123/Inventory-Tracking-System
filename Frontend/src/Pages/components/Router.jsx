import { createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import App from "../../App";
import Signup from "../Signup";
import ConfirmSignin from "../ConfirmSignin";
import InsideWeeklyad from "../InsideWeeklyad";
import InWeekly from "../inweekly";

const router = createBrowserRouter([
    {
        path:'/confirmsignin',
        element:<ConfirmSignin />
    },
    {
        path:'/signup',
        element:<Signup />
    },
    {
      path: "/",
      element: <App/>,
    },
    {
      path:'/offers',
      element:<InsideWeeklyad />
    },
    {
      path:'/inweekly',
      element:<InWeekly />
    }
  ]);
  
  export default router;
  