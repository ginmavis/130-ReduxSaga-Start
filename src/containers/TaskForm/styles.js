const styles = (theme) => ({
	btn: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 40,
		padding: "0 20px",
	},

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
