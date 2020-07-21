import React, { Component } from "react";
import {
	Card,
	CardContent,
	Grid,
	Typography,
	CardActions,
	Icon,
	Fab,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import PropTypes from "prop-types";

class TaskItem extends Component {
	render() {
		const { classes, task, status, onClickEdit } = this.props;
		const { id, title, description } = task;
		return (
			<Card key={id} className={classes.Card}>
				<CardContent>
					<Grid container justify="space-between">
						<Grid item md={8}>
							<Typography component="h2" variant="h5">
								{title}
							</Typography>
						</Grid>
						<Grid item md={4}>
							{status.label}
						</Grid>
						<p>{description} </p>
					</Grid>
				</CardContent>
				<CardActions className={classes.CardActions}>
					<Fab
						size="small"
						color="primary"
						aria-label="Add"
						className={classes.FabStyle}
						onClick={onClickEdit}
					>
						<Icon
						// fontSize="small"
						>
							edit
						</Icon>
					</Fab>

					<Fab
						size="small"
						color="primary"
						aria-label="Delete"
						className={classes.FabStyle1}
					>
						<Icon>delete</Icon>
					</Fab>
				</CardActions>
			</Card>
		);
	}
}

TaskItem.propTypes = {
	classes: PropTypes.object,
	task: PropTypes.object,
	status: PropTypes.object,
	onClickEdit: PropTypes.func,
};

export default withStyles(styles)(TaskItem);
