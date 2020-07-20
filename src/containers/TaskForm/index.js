import React, { Component } from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as modalActions from "./../../actions/modal";
class TaskForm extends Component {
	render() {
		const { classes, modalActionCreators } = this.props;
		const { hideModal } = modalActionCreators;
		return (
			<form>
				<Grid container spacing={5}>
					<Grid item md={12}>
						<TextField
							autoFocus={true}
							id="standard-name"
							label="Tiêu đề"
							className={classes.TextField}
							margin="normal"
						/>
					</Grid>
					<Grid item md={12}>
						<TextField
							id="standard-name"
							label="Mô tả"
							className={classes.TextField}
							margin="normal"
							multiline
							rows="4"
						/>
					</Grid>
					<Grid item md={12}>
						<Grid container spacing={1} justify="flex-end">
							<Grid item>
								<Button className={classes.btn} onClick={hideModal}>
									Lưu lại
								</Button>
							</Grid>
							<Grid item>
								<Button className={classes.btn} onClick={hideModal}>
									Hủy bỏ
								</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>
		);
	}
}

TaskForm.propTypes = {
	classes: PropTypes.object,
	modalActionCreators: PropTypes.shape({
		hideModal: PropTypes.func,
	}),
};

const mapStateToProps = null;
const mapDispatchToProps = (dispatch) => ({
	modalActionCreators: bindActionCreators(modalActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(TaskForm);
