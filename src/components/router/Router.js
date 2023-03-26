import { createBrowserRouter } from "react-router-dom";
import AddProducts from "../../DashboardLayOut/AddProduct/AddProducts";
import AllUser from "../../DashboardLayOut/AllUser/AllUser";
import Dashboard from "../../DashboardLayOut/DashboardLayOut";
import MyOrder from "../../DashboardLayOut/MyOrder/MyOrder";
import Payment from "../../DashboardLayOut/Payment/Payment";
import SellProducts from "../../DashboardLayOut/SellProduct/SellProducts";
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
                loader: ({ params }) => fetch(`https://furniture-server-site.vercel.app/product-category/${params.id}`)
            }
        ]
    },
    {
        path:'/dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/dashboard',
                element:<MyOrder></MyOrder>
            },
            {
                path:'/dashboard/My-Products',
                element:<AddProducts></AddProducts>
            },
            {
                path:'/dashboard/mySellProduct',
                element:<SellProducts></SellProducts>
            },
            {
                path:'/dashboard/all-user',
                element:<AllUser></AllUser>
            },
            {
                path:'/dashboard/payment/:id',
                element:<Payment></Payment>,
                loader:({params})=>fetch('')
            }
        ]
    }
])