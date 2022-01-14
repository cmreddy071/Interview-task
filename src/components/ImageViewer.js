import React, { useEffect, useState } from 'react';
import * as R from 'ramda';
import { Button, Spin } from 'antd';
import ReasonSelection from './ReasonSelection';

const backendURL = 'http://localhost:3000/api/v1/image';

const onCreateImageUrl = blob => {
	const urlCreator = window.URL || window.webkitURL;
	const imageUrl = urlCreator.createObjectURL(blob);
	return imageUrl;
}

const ImageViewer = () => {
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const [imageURL, setImageURL] = useState("");

	const onFetchImage = () => {
		setLoading(true);
		fetch(backendURL).then(res => {
			res.blob().then(blob => {
				setLoading(false);
				const blobURL = onCreateImageUrl(blob);
				setImageURL(blobURL);
			})
		}).catch(() => {
			setLoading(false);
			setImageURL("");
			alert("Unable to load image");
		})
	}

	useEffect(() => {
		onFetchImage();
	}, [])

	const OnopentModal = () => {
		setShowModal(true);
	}
	const handleCancel = () => {
		setShowModal(false);
	}

	const handleOk = () => {
		onFetchImage();
		setShowModal(false);
	}

	return (<>
		<ReasonSelection
			showModal={showModal}
			imageURL={imageURL}
			handleCancel={handleCancel}
			handleOk={handleOk}
		/>
		<div className={!R.isEmpty(imageURL) ? '' : "height250"}>
			<Spin spinning={loading} tip="Loading...">{
				!R.isEmpty(imageURL) ? <img width="300" height="250" src={imageURL} /> : <span>No Images available</span>
			}
			</Spin>
			{!R.isEmpty(imageURL) &&
				<div className="mt-20">
					<Button onClick={onFetchImage} disabled={loading} style={{ width: 143 }} type="primary">Real</Button>
					<Button disabled={loading} style={{ width: 143 }} onClick={OnopentModal} className="ml-10">Not Real</Button>
				</div>
			}
		</div>
	</>)
}
export default ImageViewer;