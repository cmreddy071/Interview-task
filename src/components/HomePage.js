import React from 'react';
import { Card, } from 'antd';

import ShowResultsSet from './ShowResultsSet';
import ImageViewer from './ImageViewer';

const HomePage = () => {

	return (<div className="container">
		<Card style={{ width: 400, height: '100%', border: "1px solid gray" }}>
			<ImageViewer />
			<hr />
			<ShowResultsSet />
		</Card>
	</div>)
}
export default HomePage;