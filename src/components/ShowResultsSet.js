import React from 'react';
import { useSelector } from 'react-redux'
import * as R from 'ramda';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'antd';

const ShowResultsSet = () => {
	const nonRealImages = useSelector((state) => state.results.nonRealImages);
	return (
		<>
			<Row>
			<Col xs={24} md={12} lg={12} xl={12} >
			<h2>Non Real Images</h2>
			</Col>
			<Col xs={24} md={12} lg={12} xl={12} >
				<Link to="/home/report"> <Button disabled={R.isEmpty(nonRealImages)} className="button-properties" type="primary">Generate Report</Button></Link>
			</Col>
			</Row>
			<Row>
			<Col xs={24} md={24} lg={24} xl={24} >
			<div className="generate-report">
				<Row gutter={[16, 16]}>
					{
						nonRealImages?.map(value => <Col xs={24} md={12} lg={12} xl={6} ><img className="image-style" alt="Resultimage" src={value?.imageURL} /></Col>)
					}
				</Row>
			</div>
			</Col>
			</Row>
		</>)
}
export default ShowResultsSet;