import React, { Component } from "react";
import styles from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";

class SearchBox extends Component {
	render() {
		const { classes, handleChange } = this.props;
		return (
			<form className={classes.container} noValidate autoComplete="off">
				<TextField
					autoComplete="off"
					className={classes.TextField}
					onChange={handleChange}
					margin="normal"
					placeholder="Nhập từ khóa"
				/>
			</form>
		);
	}
}

SearchBox.propTypes = {
	classes: PropTypes.object,
	handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
