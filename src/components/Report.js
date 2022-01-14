import React from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import * as R from 'ramda';
import { Card, Row, Col, Button } from 'antd';

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
			<Card style={{ width: 400, height: '100%', border: "1px solid gray" }}>
				<h2 style={{ textAlign: 'left' }}>Report</h2>
				<div className="report-scroll">{
					!R.isEmpty(output) && R.keys(output).map(feature => {
						if (output[feature]) {
							return <Row style={{ marginBottom: 10 }} gutter={[16, 16]}>
								<Col span={24}><h4 className="capitalize" style={{ textAlign: 'left' }} >{feature}</h4></Col>
								{
									output[feature].map(value => <Col span={8} style={{ width: 40, height: 90 }} ><img width="90" height="90" src={value} /></Col>)
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
			</Card>
		</div>
	);
}
export default Report;