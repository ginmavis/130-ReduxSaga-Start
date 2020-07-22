import React, { Component } from "react";
import { Grid, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import TaskItem from "../TaskItem";
import PropTypes from "prop-types";

class TaskList extends Component {
	render() {
		const { classes, tasks, status, onClickEdit, onClickDelete } = this.props;
		return (
			<Grid item md={4} sm={6} xs={12} key={status.value}>
				<Box mt={3} mb={2}>
					<div className={classes.status}>{status.label}</div>
				</Box>

				<div className={classes.wrapperListTask}>
					{tasks.map((task) => {
						return (
							<TaskItem
								task={task}
								status={status}
								key={task.id}
								onClickEdit={() => onClickEdit(task)}
								onClickDelete={() => onClickDelete(task)}
							/>
						);
					})}
				</div>
			</Grid>
		);
	}
}
TaskList.propTypes = {
	classes: PropTypes.object,
	tasks: PropTypes.array,
	status: PropTypes.object,
	onClickEdit: PropTypes.func,
	onClickDelete: PropTypes.func,
};
export default withStyles(styles)(TaskList);
