import React from 'react';
import { Card, } from 'antd';

import ShowResultsSet from './ShowResultsSet';
import ImageViewer from './ImageViewer';

const HomePage = () => {

	return (<div className="container">
		<Card style={{ height: '100%', border: "1px solid gray" }}>
			<ImageViewer />
		</Card>
		<hr/>
		<ShowResultsSet />
	</div>)
}
export default HomePage;