import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

import styles from "./style";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import { STATUSES } from "../../constants";

import TaskList from "./../../components/TaskList";

import TaskForm from "../../components/TaskForm";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as taskActions from "./../../actions/task";

class TaskBoard extends Component {
	state = {
		open: false,
	};

	componentDidMount() {
		const { taskActionsCreators } = this.props;
		const { fetchListTaskRequest } = taskActionsCreators;
		fetchListTaskRequest();
	}
	renderBoard() {
		const { listTask } = this.props;
		// console.log(this.props);
		let xhtml = null;
		xhtml = (
			<Grid container spacing={3}>
				{STATUSES.map((status, index) => {
					//  lấy các task mà task.status (listtask) =  status.value(STATUSES)
					// để đưa vào taskFiltered
					const taskFiltered = listTask.filter(
						(task) => task.status === status.value
					);

					return (
						<TaskList tasks={taskFiltered} status={status} key={index} />
					);
				})}
			</Grid>
		);
		return xhtml;
	}

	//dialog

	openForm = () => {
		this.setState({
			open: true,
		});
	};
	handleClose = () => {
		this.setState({
			open: false,
		});
	};

	renderForm() {
		const { open } = this.state;
		let xhtml = null;
		xhtml = <TaskForm open={open} onClose={this.handleClose} />;
		return xhtml;
	}

	render() {
		const { classes } = this.props;

		return (
			<div className={classes.taksboard}>
				<Button
					variant="contained"
					onClick={() => this.openForm()}
					color="primary"
					className={classes.button}
				>
					<AddIcon /> Thêm mới công việc
				</Button>

				{this.renderBoard()}
				{this.renderForm()}
			</div>
		);
	}
}

// check  dữ liệu nhận được là hợp lệ
TaskBoard.propTypes = {
	classes: PropTypes.object,
	taskActions: PropTypes.shape({
		fetchListTaskRequest: PropTypes.func,
	}),
	listTask: PropTypes.array,
};

const mapStateToProps = (state) => {
	return {
		listTask: state.task.listTask,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		taskActionsCreators: bindActionCreators(taskActions, dispatch),
	};
};

export default withStyles(styles)(
	connect(mapStateToProps, mapDispatchToProps)(TaskBoard)
);
