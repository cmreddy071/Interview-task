import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import { Row, Col, Button } from 'antd';

const Report = () => {
	const nonRealImages = useSelector((state) => state.results.nonRealImages);
	const output={};
	for(let item of nonRealImages){
		for(let feature of item.features){
			if(!output[feature]){
				output[feature]=[];
			}
			output[feature].push(item.imageURL);
		}
	}

	return (
		<div className="container">
			<h2 className="report-header">Report</h2>
				<div className="report-scroll">{
					!R.isEmpty(output) && R.keys(output).map(feature => {
						if (output[feature]) {
							return <Row style={{ marginBottom: 10 }} gutter={[16, 16]}>
								<Col span={24}><h4 className="capitalize" style={{ textAlign: 'left' }} >{feature}</h4></Col>
								{
									output[feature].map(value => <Col xs={24} md={12} lg={5} xl={5}  ><img alt="Reportimage" width="190" height="190" src={value} /></Col>)
								}
							</Row>
						}
						return null;
					})
				}
				</div>
				<hr />
				<div className="generate-button">
					<Link to="/"> <Button className="button-properties" type="primary">Add more</Button></Link>
				</div>
		</div>
	);
}
export default Report;