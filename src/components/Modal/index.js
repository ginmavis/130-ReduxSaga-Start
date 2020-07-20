import React, { Component } from "react";
import { Modal, Icon } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import * as modalActions from "./../../actions/modal";
class CommonModal extends Component {
	render() {
		const {
			open,
			classes,
			component,
			modalActionCreators,
			title,
		} = this.props;
		const { hideModal } = modalActionCreators;
		return (
			<Modal open={open} onClose={hideModal}>
				<div className={classes.modal}>
					<div className={classes.header}>
						<div className={classes.title}> {title} </div>
						<div>
							<Icon onClick={hideModal} className={classes.icon}>
								close
							</Icon>
						</div>
					</div>
					<div className={classes.content}>{component}</div>
				</div>
			</Modal>
		);
	}
}

CommonModal.propTypes = {
	open: PropTypes.bool,
	title: PropTypes.string,
	classes: PropTypes.object,
	component: PropTypes.object,
	modalActionCreators: PropTypes.shape({
		hideModal: PropTypes.func,
	}),
};

const mapStateToProps = (state) => ({
	open: state.modal.showModal,
	component: state.modal.component,
	title: state.modal.title,
});
const mapDispatchToProps = (dispatch) => ({
	modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(CommonModal);
