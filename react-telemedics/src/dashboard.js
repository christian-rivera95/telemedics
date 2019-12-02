import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import CheckOut from './checkout';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Secretaria de Salud
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
        color: 'white'
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6)
    },
    heroButtons: {
        marginTop: theme.spacing(4)
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8)
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%' // 16:9
    },
    cardContent: {
        flexGrow: 1
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Dashboard() {
    const classes = useStyles();
    const [showForm, setShowForm] = useState(false);

    let onClick = () => {
        setShowForm(true);
    };

    if (!showForm) {
        return (
            <React.Fragment>
                <AppBar position="relative">
                    <Toolbar>
                        <Grid
                            item
                            container
                            direction="row"
                            alignItems="center"
                            xs={12}
                        >
                            <Grid item xs={11}>
                                <Typography
                                    variant="h6"
                                    color="inherit"
                                    noWrap
                                    style={{ marginLeft: '85px' }}
                                >
                                    Bienvenido
                                </Typography>
                            </Grid>
                            <Grid item xs={1}>
                                <Button>
                                    <SettingsApplications
                                        className={classes.icon}
                                    />
                                </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <main>
                    <div className={classes.heroContent}>
                        <Container maxWidth="md">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="textPrimary"
                                gutterBottom
                            >
                                Consulta tu Referencia
                            </Typography>
                            <div className={classes.heroButtons}>
                                <Grid
                                    container
                                    spacing={2}
                                    direction="column"
                                    justify="center"
                                >
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            onClick={onClick}
                                        >
                                            Llena tu Referencia
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                        >
                                            Consulta tu Red
                                        </Button>
                                    </Grid>
                                    <Grid item>
                                        <Button
                                            variant="outlined"
                                            color="primary"
                                        >
                                            Mapas de Redes
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </main>
                <footer className={classes.footer}>
                    <Typography variant="h6" align="center" gutterBottom>
                        Secretaria de Salud
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="textSecondary"
                        component="p"
                    >
                        Presidencia de la Republica
                    </Typography>
                    <Copyright />
                </footer>
            </React.Fragment>
        );
    } else {
        return <CheckOut />;
    }
}
