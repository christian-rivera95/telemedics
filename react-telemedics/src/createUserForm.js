import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const styles = theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  cancel: {
    backgroundColor: theme.palette.secondary.main,
    margin: theme.spacing(3, 0, 2),
    "&:hover": {
      backgroundColor: "#b50543"
    }
  },
  title: {
    marginBottom: theme.spacing(3)
  }
});

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  getUsers = _ => {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(response => this.setState({ users: response.data }))
      .catch(err => console.err(err));
  };

  addUser = _ => {
    const { username, password } = this.state;
    console.log(
      `http://localhost:4000/users/add?username="${username}"&userpassword="${password}"`
    );
    fetch(
      `http://localhost:4000/users/add?username="${username}"&userpassword="${password}"`
    )
      .then(this.getUsers)
      .catch(err => console.error(err));
  };

  onCancel = () => {
    this.props.history.push("/dashboard");
  };

  render() {
    const { classes } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircle />
          </Avatar>
          <Typography component="h1" variant="h5" className={classes.title}>
            Creacion de Usuario
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="sucursal"
                label="Nombre de Sucursal"
                name="sucursal"
                autoComplete="sucursal"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="contraseña"
                label="Contraseña"
                type="password"
                id="contraseña"
                autoComplete="current-password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </Grid>
          </Grid>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={this.addUser}
          >
            Create User
          </Button>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.cancel}
            onClick={this.onCancel}
          >
            Cancel
          </Button>
        </div>
      </Container>
    );
  }
}

export default withStyles(styles)(SignUp);
