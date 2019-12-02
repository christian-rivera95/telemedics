import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Review() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Referencias Personales
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="name"
                        label="Nombre del Referente 1?"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="phone"
                        label="Numero de Telefono"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="name"
                        label="Nombre del Referente 2?"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="phone"
                        label="Numero de Telefono"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
