import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const route = createBrowserRouter([
    {
        path:'/',
        element:<Home></Home>
    },
    { path:'/',
     element:<Root></Root>,
     children: [
        
        { 
            path:'/login',
            element:<Login></Login>
        },
        { 
            path:'/signup',
            element:<Register></Register>
        },
    ]
    }
])

export default route;