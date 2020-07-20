import React, { Component } from "react";
import { Grid, Button } from "@material-ui/core";
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

class TaskForm extends Component {
	handleSubmitForm = (data) => {
		// console.log("data", data);
		const { taskActionsCreators } = this.props;
		const { addTask } = taskActionsCreators;
		const { title, description } = data;
		addTask(title, description);
	};

	render() {
		const {
			classes,
			modalActionCreators,
			handleSubmit,
			invalid,
			submitting,
		} = this.props;
		// console.log("prop", this.props);

		const { hideModal } = modalActionCreators;
		return (
			<form onSubmit={handleSubmit(this.handleSubmitForm)}>
				<Grid container spacing={5}>
					<Grid item md={12}>
						{/* <TextField
							autoFocus={true}
							id="standard-name"
							label="Tiêu đề"
							className={classes.TextField}
							margin="normal"
						/> */}
						<Field
							id="title" // sẽ đi vào custom
							label="tiêu đề"
							className={classes.TextField} // sẽ đi vào custom
							margin="normal"
							name="title"
							component={renderTextField}
							validate={this.required}
							autoFocus
						/>
					</Grid>

					<Grid item md={12}>
						{/* <TextField
							id="standard-name"
							label="Mô tả"
							className={classes.TextField}
							margin="normal"
							multiline
							rows="4"
						/> */}
						<Field
							id="description"
							label="Mô tả"
							multiple
							rows="4"
							className={classes.TextField}
							margin="normal"
							component={renderTextField}
							name="description"
						/>
					</Grid>
					<Grid item md={12}>
						<Grid container spacing={1} justify="flex-end">
							<Grid item>
								<Button
									//  disabled khi nhap chua dung hay chu nhap
									disabled={invalid || submitting}
									variant="contained"
									className={classes.btn}
									type="submit"
								>
									Lưu lại
								</Button>
							</Grid>
							<Grid item>
								<Button
									variant="contained"
									className={classes.btn}
									onClick={hideModal}
								>
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
	taskActionsCreators: PropTypes.shape({
		addTask: PropTypes.func,
	}),
	handleSubmit: PropTypes.func,
	invalid: PropTypes.bool,
	submitting: PropTypes.bool,
};

const mapStateToProps = null;
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
