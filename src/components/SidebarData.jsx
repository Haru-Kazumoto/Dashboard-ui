import React from "react"
import {
    FaTh,
    FaUserAlt,
    FaUsers,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag
}from "react-icons/fa";

export const SidebarData = [
    {
        path:"/",
        name:"Dashboard",
        icon:<FaTh/>
    },
    {
        path:"/about",
        name:"About",
        icon:<FaUserAlt/>
    },
    {
        path:"/analytics",
        name:"Analytics",
        icon:<FaRegChartBar/>
    },
    {
        path:"/comment",
        name:"Comment",
        icon:<FaCommentAlt/>
    },
    {
        path:"/product",
        name:"Product",
        icon:<FaShoppingBag/>
    },
    {
        path:"/user",
        name:"User",
        icon:<FaUsers/>
    }
]