import React, { useEffect, useState } from 'react';
import { Layout, Avatar } from 'antd';

// Return random hex color code
const getRandomColor=()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
// Header section of appliction. It contains title and profile(avatar).
const HomePageHeader=()=>{
    const [colorCode, setColorCode]=useState("rgb(139 102 102)");
    useEffect(()=>{
        setColorCode(getRandomColor())
    },[]);
    return(
        <Layout.Header className="header header-height">
          <div className="user-header" >AVA Video </div>
          <div className="avatar-div">
          <Avatar size="large" style={{ background: colorCode, color:"white" }}>V</Avatar>
          <span className="avartar-header">Chinna</span>
              </div>
        </Layout.Header>
    )
}
export default HomePageHeader;