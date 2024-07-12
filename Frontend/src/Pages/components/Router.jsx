import { createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import App from "../../App";

const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />
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
  