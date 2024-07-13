import { createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import App from "../../App";
import Signup from "../Signup";
import ConfirmSignin from "../ConfirmSignin";

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
      children: [
        {
          
        },
        {
        }
      ]
    },
  ]);
  
  export default router;
  