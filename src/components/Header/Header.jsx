import React, { useState } from 'react'
import {Avatar, Drawer, Space} from 'antd';
const Header = () => {
  const avatar = './avatar.jpg';
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="header">
        <div className="user-name-text">
          <span>Haru Kazumoto</span>
        </div>
        <Space>
          <Avatar 
            size={50}
            src={avatar} 
            alt='avatar' 
            onClick={toggle}
          />
        </Space>
        <Drawer 
          open={isOpen} 
          title="Profile" 
          closable={false}
          placement='right'
          onClose={() => {setIsOpen(false)}} >
            <Avatar 
            size={250}
            style={
              {
                display: 'block', 
                marginLeft:'auto', 
                marginRight: 'auto'
              }
            }
            src={avatar} 
            alt='avatar' 
          />
          <div className="data-user">
            <span className="username">Username : Haru Kazumoto</span>
            <span className="email">Email: HaruKazumoto@gmail.com</span>
            <span className="gender">Gender : Male</span>
            <span className="job-role">Job Role : Backend</span>
          </div>
          </Drawer>
    </div>
  )
}

export default Header
