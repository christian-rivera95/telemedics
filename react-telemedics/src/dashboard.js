import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import * as PropTypes from "prop-types";
import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";

const Dashboard = ({ title, description, classes, hanb }) => (
  <>
    <Grid item xs={12}>
      <Typography variant="h3" className={classes.title} align="center">
        {title}
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h2" className={classes.description} align="center">
        {description}
      </Typography>
    </Grid>
  </>
);

Dashboard.propTypes = {
  classes: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const styles = theme => ({
  title: {
    color: theme.palette.primary.main,
    fontFamily: "Merriweather",
    fontSize: "46px",
    fontWeight: "bold"
  },
  description: {
    opacity: "0.6",
    fontSize: "17px",
    fontWeight: "300",
    textAlign: "center",
    letterSpacing: "0.5px",
    lineHeight: "28px",
    marginBottom: theme.spacing(2),
    maxWidth: "800px",
    margin: "auto"
  }
});

export default withStyles(styles)(Dashboard);
