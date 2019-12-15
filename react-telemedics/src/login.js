import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dashboard from "./dashboard";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Secretaria de Salud
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

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
  }
});

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: false,
      users: [],
      user: {
        username: "",
        password: ""
      },
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    this.getUsers();
  }

  getUsers = _ => {
    fetch("http://localhost:4000/users")
      .then(response => response.json())
      .then(response => this.setState({ users: response.data }))
      .catch(err => console.err(err));
  };

  addUser = _ => {
    const { user } = this.state;
    const { username, password } = user;
    fetch(
      `http://localhost:4000/users/add?username="${username}"&userpassword=${password}`
    )
      .then(this.getUsers)
      .catch(err => console.error(err));
  };

  onClick() {
    const { users, username, password } = this.state;
    users.map(user => {
      console.log(user);
      if (user.username === username && user.userpassword === password)
        this.setState({ showPage: true });

      return user;
    });
  }

  render() {
    const { classes } = this.props;
    if (!this.state.showPage) {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesion
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Usuario"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => this.setState({ username: e.target.value })}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => this.setState({ password: e.target.value })}
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => this.onClick()}
              >
                Iniciar Sesion
              </Button>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      );
    } else {
      return <Dashboard />;
    }
  }
}

export default withStyles(styles)(Login);
