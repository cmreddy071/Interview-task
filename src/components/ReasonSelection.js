import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as R from 'ramda';
import {  Button, Modal, Checkbox, Row, Col, Input, Spin } from 'antd';
import { addNewFeature } from '../store/NotrealMenuSlice';
import { updateResults } from '../store/ResultSlice';

const ReasonSelection = (props) => {
	const { imageURL } = props;
	const [checkedList, setCheckedList] = useState([]);
	const [other, setOther] = useState("");
	const dispatch = useDispatch();
	const features = useSelector((state) => state.features.listOfFeature);


	const handleCancel = () => {
		setCheckedList([]);
		setOther("");
		props.handleCancel();
	}

	const onOkayChange = () => {
		let list = [...checkedList];
		if (other.trim()) {
			const index = features.findIndex(feature => {
				return feature.toLowerCase() === other.trim().toLowerCase();
			});
			if (index === -1) {
				dispatch(addNewFeature(other));
			}
			list.push(other.trim().toLowerCase());
			list = [...new Set(list)]
		}
		const resultSet={
			features: list,
			imageURL: imageURL
		}
		dispatch(updateResults(resultSet));
		setCheckedList([]);
		setOther("");
		props.handleOk();
	}
	const onChageValue = (e) => {
		setOther(e.target.value);
	}
	const onChange = checkedValues => {
		setCheckedList(checkedValues);
	}
	return (
		<Modal
			destroyOnClose
			width={300}
			title="Why"
			visible={props.showModal}
			onCancel={handleCancel}
			footer={[<div>
				<Button onClick={handleCancel} style={{ width: 125 }} >Cancel</Button>
				<Button disabled={R.isEmpty(other.trim()) && checkedList.length === 0} onClick={onOkayChange} style={{ width: 125 }} className="ml-10" type="primary">Ok</Button>
			</div>]}
		>
			<div>
				<h4>Choose features:</h4>
				<div className="feature-container">
					<Checkbox.Group value={checkedList} style={{ width: '100%' }} onChange={onChange}>
						<Row>
							{features?.map(val => <Col span={24}>
								<Checkbox value={val}><span className="capitalize">{val}</span></Checkbox>
							</Col>)}
						</Row>
					</Checkbox.Group>
				</div>
				<h4>Other:</h4>
				<Input onChange={onChageValue} placeholder="Enter your own feature" />
			</div>
		</Modal>
	)
}
export default ReasonSelection;