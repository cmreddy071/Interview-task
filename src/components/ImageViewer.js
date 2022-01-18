import React, { useEffect, useState } from 'react';
import * as R from 'ramda';
import { Button, Spin } from 'antd';
import ReasonSelection from './ReasonSelection';

// Backend server url
const backendURL = 'http://localhost:3000/api/v1/image';

// Convert blob into blob URL
const onCreateImageUrl = blob => {
	const urlCreator = window.URL || window.webkitURL;
	const imageUrl = urlCreator.createObjectURL(blob);
	return imageUrl;
}

const ImageViewer = () => {
	const [showModal, setShowModal] = useState(false);
	const [loading, setLoading] = useState(false);
	const [imageURL, setImageURL] = useState("");

	// API integration for fetching images from server.
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

	//Initially call the api to load the image(component didmount).
	useEffect(() => {
		onFetchImage();
	}, [])

	//To show the non real popup menu.
	const OnopentModal = () => {
		setShowModal(true);
	}

	//To hide the non real popup menu.
	const handleCancel = () => {
		setShowModal(false);
	}

	// Close the non real popup menu and Load the random image.
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
		<>
			<Spin spinning={loading} tip="Loading...">{
				!R.isEmpty(imageURL) ? <img alt="realImage" style={{width: "100%"}} src={imageURL} /> : <span>No Images available</span>
			}
			</Spin>
			{!R.isEmpty(imageURL) &&
				<div className="mt-20" style={{ textAlign: 'center' }}>
					<Button onClick={onFetchImage} disabled={loading}  type="primary">Real</Button>
					<Button disabled={loading}  onClick={OnopentModal} className="ml-10">Not Real</Button>
				</div>
			}
		</>
	</>)
}
export default ImageViewer;