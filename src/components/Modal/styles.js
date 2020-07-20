const styles = (theme) => ({
	modal: {
		top: "50%",
		left: "50%",
		transform: `translate(-${50}%, -${50}%)`,
		position: "absolute",
		width: 600,
		backgroundColor: theme.palette.background.paper,

		boxShadow: theme.shadows[5],
		// padding: theme.spacing(2, 4, 3),
	},
	TextField: {
		width: "100%",
	},
	header: {
		backgroundColor: theme.color.primary,
		color: theme.color.textColor,
		padding: theme.spacing(2),
		display: "flex",
		justifyContent: "space-between",
	},
	title: {
		color: theme.color.textColor,
		fontWeight: 600,
		fontSize: "25px",
	},
	content: {
		padding: theme.spacing(2, 4, 3),
	},
	icon: {
		verticalAlign: "middle",
		cursor: "pointer",
	},
});
export default styles;
