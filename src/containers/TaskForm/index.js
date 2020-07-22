import React, { Component } from "react";
import { Grid, Button, MenuItem, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";
import { compose, bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as modalActions from "./../../actions/modal";
import * as taskActions from "./../../actions/task";
import { reduxForm, Field } from "redux-form";
import renderTextField from "./../../components/FormHelper/TextField";
import validate from "./validate";
import renderSelectField from "../../components/FormHelper/Select";

class TaskForm extends Component {
	handleSubmitForm = (data) => {
		// console.log("data", data);
		const { taskActionsCreators, taskEditing } = this.props;
		const { addTask, updateTask } = taskActionsCreators;
		const { title, description, status } = data;
		if (taskEditing && taskEditing.id) {
			updateTask(title, description, status);
		} else {
			addTask(title, description);
		}
	};
	renderStatusSelection = () => {
		let xhtml = null;
		const { taskEditing, classes } = this.props;
		if (taskEditing && taskEditing.id) {
			xhtml = (
				<Grid item md={12}>
					<Field
						id="status" // sẽ đi vào custom
						label="Trạng thái"
						className={classes.select} // sẽ đi vào custom
						name="status"
						component={renderSelectField}
					>
						<MenuItem value={0}>READY</MenuItem>
						<MenuItem value={1}>IN PROGRESS</MenuItem>
						<MenuItem value={2}>COMPLETED</MenuItem>
					</Field>
				</Grid>
			);
		}
		return xhtml;
	};
	render() {
		const {
			classes,
			modalActionCreators,
			handleSubmit,
			invalid,
			submitting,
		} = this.props;

		const { hideModal } = modalActionCreators;
		return (
			<form onSubmit={handleSubmit(this.handleSubmitForm)}>
				<Grid container>
					<Grid item md={12}>
						<Field
							id="title"
							label="Tiêu đề"
							className={classes.textField}
							margin="normal"
							name="title"
							component={renderTextField}
						/>
					</Grid>
					<Grid item md={12}>
						<Field
							id="description"
							label="Mô tả"
							multiline
							rowsMax="4"
							className={classes.textField}
							margin="normal"
							name="description"
							component={renderTextField}
						/>
					</Grid>
					{this.renderStatusSelection()}
					<Grid item md={12}>
						<Box display="flex" flexDirection="row-reverse" mt={2}>
							<Box ml={1}>
								<Button variant="contained" onClick={hideModal}>
									Hủy Bỏ
								</Button>
							</Box>
							<Button
								disabled={invalid || submitting}
								variant="contained"
								color="primary"
								type="submit"
							>
								Lưu Lại
							</Button>
						</Box>
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
	taskActionsCreators: PropTypes.shape({
		addTask: PropTypes.func,
		updateTask: PropTypes.func,
	}),
	handleSubmit: PropTypes.func,
	invalid: PropTypes.bool,
	submitting: PropTypes.bool,
	taskEditing: PropTypes.object,
};

const mapStateToProps = (state) => ({
	// k cần taskEditing vì có initialValues sẽ tự động
	// thêm vào from
	// cần vì để hiện select status để sửa
	taskEditing: state.task.taskEditing,
	// initialValues: state.task.taskEditing,
	initialValues: {
		title: state.task.taskEditing ? state.task.taskEditing.title : null,
		description: state.task.taskEditing
			? state.task.taskEditing.description
			: null,
		status: state.task.taskEditing ? state.task.taskEditing.status : null,
	},
});
const mapDispatchToProps = (dispatch) => ({
	modalActionCreators: bindActionCreators(modalActions, dispatch),
	taskActionsCreators: bindActionCreators(taskActions, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const FORM_NAME = "TASK_MANAGEMENT";

const withReduxForm = reduxForm({
	form: FORM_NAME,
	validate,
});

export default compose(
	withStyles(styles),
	withConnect,
	withReduxForm
)(TaskForm);
