import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from './HomePage';
import Report from './Report';

// Routing declaration.
const RouterComponent =()=>{
    return(
        <Switch>
				<Route exact path="/home/imageViewer">
					<HomePage />
				</Route>
				<Route path="/home/report">
					<Report />
				</Route>
				<Redirect from="/" to="/home/imageViewer" />
			</Switch>
    )
}
export default RouterComponent;