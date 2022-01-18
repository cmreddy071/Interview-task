import React from 'react';
import { useLocation } from "react-router-dom";
import { Layout } from 'antd';
import CustomBreadcrumb from './BreadCrumb';
import HomePageHeader from './HomePageHeader';
import Sider from './Sider';
import RouterComponent from './RouterComponent';

const { Content } = Layout;

const MainPage=()=>{
    const location=useLocation();
    return( <Layout style={{height: '100%'}}>
         <HomePageHeader key="header" />
        <Layout style={{height: '100%'}}>
          <Sider selectedKey={location.pathname} />
          <Layout style={{ padding: '0 0 0 24px' }}>
            <CustomBreadcrumb />
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                height:510
              }}
            >
			<RouterComponent />
            </Content>
          </Layout>
        </Layout>
      </Layout>);

}
export default MainPage;