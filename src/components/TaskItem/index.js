import React, { Component } from "react";
import {
  withStyles,
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Icon,
  Fab,
} from "@material-ui/core";
import styles from "./styles";
class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
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
export default withStyles(styles)(TaskItem);
