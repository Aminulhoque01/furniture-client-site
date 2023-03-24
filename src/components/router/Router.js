import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main/Main";
import SingleCategory from "../../pages/SingleCategory/SingleCategory";
import ErrorPage from "../../sheard/errorPage/ErrorPage";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../regester/Register";
import Rester from "../regester/Register";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            
            {
                path: '/single_category/:id',
                element: <SingleCategory></SingleCategory>,
                loader: ({ params }) => fetch(`http://localhost:5000/product-category/${params.id}`)
            }
        ]
    }
])