import React from 'react';
import { Row, Col } from 'antd';

import ShowResultsSet from './ShowResultsSet';
import ImageViewer from './ImageViewer';

const HomePage = () => {

	return (<Row>
		<Col xs={24} md={24} lg={8} xl={8} >
		<div style={{ padding: 10, background: 'white', width: '90%', border: "1px solid gray" }}>
			<ImageViewer />
		</div>
		</Col>
		<Col xs={24} md={24} lg={16} xl={16} >
		<ShowResultsSet />
		</Col>
		</Row>)
}
export default HomePage;