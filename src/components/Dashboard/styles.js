import theme from "../../commons/Theme";

const styles = () => ({
	wrapper: {
		display: "flex",
		flexDirection: "row",
	},
	wrapperContent: {
		width: "100%",
		padding: 20,
		minHeight: "90vh",
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	shiftLeft: {
		marginLeft: -240,
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeInOut,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
});

export default styles;
