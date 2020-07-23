import React, { Component } from "react";
import { withStyles } from "@material-ui/core";
import styles from "./styles";
import { ADMIN_ROUTES } from "./../../../constants";
import PropTypes from "prop-types";

import Drawer from "@material-ui/core/Drawer";
// import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
// import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

class Sidebar extends Component {
	toggleDrawer = (value) => {
		const { onToggleSidebar } = this.props;
		if (onToggleSidebar) {
			onToggleSidebar(value);
		}
	};

	renderList = () => {
		const { classes } = this.props;
		let xhtml = null;
		xhtml = (
			<div className={classes.list}>
				<List component="div">
					{ADMIN_ROUTES.map((route) => {
						return (
							<NavLink
								key={route.path}
								to={route.path ? route.path : null}
								exact={route.exact ? route.exact : null}
								className={classes.menuLink}
								activeClassName={classes.menuLinkActive}
							>
								<ListItem className={classes.menuItem} button>
									{route.name}
								</ListItem>
							</NavLink>
						);
					})}
				</List>
			</div>
		);
		return xhtml;
	};

	render() {
		const { classes, showSidebar } = this.props;
		return (
			<Drawer
				classes={{ paper: classes.drawerPaper }}
				open={showSidebar}
				onClose={() => this.toggleDrawer(false)}
				variant="persistent"
			>
				{this.renderList()}
			</Drawer>
		);
	}
}

Sidebar.propTypes = {
	classes: PropTypes.object,
	showSidebar: PropTypes.bool,
	onToggleSidebar: PropTypes.func,
};

export default withStyles(styles)(Sidebar);
