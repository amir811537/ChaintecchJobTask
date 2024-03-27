import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../Layouts/Mainlayout";
import Home from "../Components/pages/Home";
import Services from "../Components/pages/Services/Services";
import BusinessModel from "../Components/pages/BusinessModel/BusinessModel";
import Blogs from "../Components/pages/Blogs/Blogs";
import Contactus from "../Components/pages/ContactUs/Contactus";



const router=createBrowserRouter([
    {
        path:'/',
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/servies',
                element:<Services></Services>
            },
            {
                path:'/company',
                element:<Home></Home>
            },
            {
                path:'/businessModel',
                element:<BusinessModel></BusinessModel>
            },
            {
                path: '/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:"/contactsUs",
                element:<Contactus></Contactus>
            }
        ]
    }
]);
export default router;