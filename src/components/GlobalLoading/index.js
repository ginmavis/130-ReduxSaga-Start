import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";

import PropTypes from "prop-types";
import load from "../../assets/images/loading.gif";

import { compose } from "redux";
// import * as uiActions from "./../../actions/ui";
import { connect } from "react-redux";

class GlobalLoading extends Component {
	render() {
		const { classes, showLoading } = this.props;
		let xhtml = null;

		if (showLoading) {
			xhtml = (
				<div className={classes.globalLoading}>
					<img src={load} alt="loading" className={classes.icon} />
				</div>
			);
		}

		return xhtml;
	}
}

GlobalLoading.propTypes = {
	classes: PropTypes.object,
	showLoading: PropTypes.bool,
};
const mapStateToProps = (state) => {
	return {
		showLoading: state.ui.showLoading,
	};
};
// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		uiActions: bindActionCreators(uiActions, dispatch),
// 	};
// };

const withConnect = connect(mapStateToProps, null);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
