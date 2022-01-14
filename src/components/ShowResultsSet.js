import React from 'react';
import { useSelector } from 'react-redux'
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';

const ShowResultsSet = () => {
	const nonRealImages = useSelector((state) => state.results.nonRealImages);
	return (
		<>
			<div className="generate-button">
				<Link to="/report"> <Button disabled={R.isEmpty(nonRealImages)} className="button-properties" type="primary">Generate Report</Button></Link>
			</div>
			<div className="generate-report">
				<Row gutter={[16, 16]}>
					{
						nonRealImages?.map(value => <Col span={8} style={{ width: 40, height: 90 }} ><img alt="Resultimage" width="90" height="90" src={value?.imageURL} /></Col>)
					}
				</Row>
			</div>
		</>)
}
export default ShowResultsSet;