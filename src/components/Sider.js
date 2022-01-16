import React from 'react';
import { Link } from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';

const CustomSider=({selectedKey})=>{
    return(
        <Layout.Sider width={200} className="site-layout-background">
          <Menu style={{ display: 'inline-block' }} theme="dark" mode="inline" selectedKeys={[selectedKey]} defaultSelectedKeys={["/home/imageViewer"]}>
            <Menu.Item disabled key="1"><HomeOutlined style={{ marginRight:2 }} />Home</Menu.Item>
            <Menu.Item key="/home/imageViewer"><Link to="/">ImageViewer</Link></Menu.Item>
            <Menu.Item key="/home/report"><Link to="/home/report">ReportPage</Link></Menu.Item>
          </Menu>
          </Layout.Sider>
    )
}
export default CustomSider;