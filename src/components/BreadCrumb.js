import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined  } from '@ant-design/icons';
import { useRouteMatch, Link } from "react-router-dom"

//Based on Routes add the custom breadcrumb item
const CustomBreadcrumb=()=>{
    const match = useRouteMatch("/home/imageViewer");
    const list=!match?.isExact ? 'Report' : 'ImageViewer';
    return(
        <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item><Link to="/"><HomeOutlined style={{marginRight:2}} />Home</Link></Breadcrumb.Item>
              <Breadcrumb.Item><Link>{list}</Link></Breadcrumb.Item>
        </Breadcrumb>
    )
}
export default CustomBreadcrumb;