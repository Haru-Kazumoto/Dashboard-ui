import React, { useState } from 'react';
import {FaBars}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import{ SidebarData} from './SidebarData';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    
    return (
        <div className="container">
           <div style={{width: isOpen ? "250px" : "50px"}} className="sidebar">
               <div className="top_section">
                    <div className="bar">
                        <FaBars onClick={toggle}/>
                    </div>
                    {/* <div style={{display: isOpen ? "block" : "none"}} className="logo">
                        <span>Sidebar</span>
                    </div> */}
               </div>
               {
                   SidebarData.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;