import theme from "./../../commons/Theme/index";

const styles = () => ({
	tasksBoard: {
		// paddingTop: 50,
		padding: 20,
		// display: "flex",
		// alignItems: "center",
	},
	shape: {
		// backgroundColor: "red",
		// color: "White",
		// borderColor: "#CCCCCC",
		padding: 20,
		margin: 10,
		// borderRadius: 4,
		backgroundColor: theme.color.primary,
		color: theme.shape.textColor,
	},
	root: {
		background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		border: 0,
		borderRadius: 3,
		boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		color: "white",
		height: 48,
		padding: "0 30px",
	},
	modalConfirmTextBold: {
		fontWeight: 700,
	},
});
export default styles;
