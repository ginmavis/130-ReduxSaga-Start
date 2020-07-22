import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import PropTypes from "prop-types";
import Header from "./Header";
import Sidebar from "./Sidebar";

class Dashboard extends Component {
	render() {
		const { children, classes } = this.props;
		return (
			<div className={classes.dashboard}>
				<Header />
				<Sidebar />
				{children}{" "}
			</div>
		);
	}
}

Dashboard.propTypes = {
	children: PropTypes.object,
	classes: PropTypes.object,
};

export default withStyles(styles)(Dashboard);
