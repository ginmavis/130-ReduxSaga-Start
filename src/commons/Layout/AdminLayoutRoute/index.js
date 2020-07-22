import React, { Component } from "react";
import { Route } from "react-router-dom";
import Dashboard from "./../../../components/Dashboard";

import PropTypes from "prop-types";

export default class AdminLayoutRoute extends Component {
	render() {
		const { component: YourComponent, ...remainProps } = this.props;
		// lấy name ra thì ...remainProps sẽ còn những thằng còn lại
		//  vd như (component, exact,path)

		return (
			<Route
				{...remainProps}
				// routeProps : match , history
				render={(routeProps) => {
					return (
						<Dashboard>
							<YourComponent {...routeProps} />
						</Dashboard>
					);
				}}
			/>
		);
	}
}

AdminLayoutRoute.propTypes = {
	path: PropTypes.string,
	exact: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
	name: PropTypes.string,
};
