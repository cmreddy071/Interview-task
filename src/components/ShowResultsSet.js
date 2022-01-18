import React from 'react';
import { useSelector } from 'react-redux'
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';

const ShowResultsSet = () => {
	const nonRealImages = useSelector((state) => state.results.nonRealImages);
	return (
		<>
			<h2 className="non-header">Non Real Images</h2>
			<div className="generate-button">
				<Link to="/home/report"> <Button disabled={R.isEmpty(nonRealImages)} className="button-properties" type="primary">Generate Report</Button></Link>
			</div>
			<div className="generate-report">
				<Row gutter={[16, 16]}>
					{
						nonRealImages?.map(value => <Col xs={24} md={12} lg={6} xl={6} ><img className="image-style" alt="Resultimage" src={value?.imageURL} /></Col>)
					}
				</Row>
			</div>
		</>)
}
export default ShowResultsSet;