import theme from "../../../commons/Theme";

const styles = () => ({
	drawerPaper: {
		width: 240,
		maxWidth: 240,
		zIndex: 10,
		height: "100%",
		position: "relative",
	},
	menuLink: {
		textDecoration: "none",
		color: "black",
	},
	menuItem: {
		// background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
		// border: 0,
		// borderRadius: 3,
		// boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
		// color: "white",
		// height: 48,
	},
	menuLinkActive: {
		"&>div": {
			background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
			border: 0,
			borderRadius: 3,
			boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
			color: "white",
			height: 48,
			backgroundColor: theme.color.hover,
		},
	},
});

export default styles;
