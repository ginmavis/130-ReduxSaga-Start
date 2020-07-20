import React from "react";
import { TextField } from "@material-ui/core";
import PropTypes from "prop-types";
const renderTextField = ({
	label,
	input,
	meta: { touched, invalid, error },
	...custom
	// ngoài label input meta thì những prop còn lại đều đi
	//  vào custom
}) => (
	<TextField
		label={label}
		placeholder={label}
		error={touched && invalid}
		helperText={touched && error}
		{...input}
		{...custom}

		// vd : nhận vào id, classname
		// có nghĩa là id = {id}, classname = {classname}
	/>
);

renderTextField.prototypes = {
	label: PropTypes.string,
	input: PropTypes.object,
	meta: PropTypes.object,
};

export default renderTextField;
