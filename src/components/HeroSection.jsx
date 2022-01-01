import React from 'react';
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import WeatherInfo from './WeatherInfo';

const useStyles = makeStyles((theme) => ({
    section: {
        height: "90vh",
        backgroundImage: "url(https://images.unsplash.com/photo-1536244636800-a3f74db0f3cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2892&q=80)",
        backgroundSize: "cover",
        backgroundPosition: "center"
    },
    content: {
        height: "100%",
 
    },
        container: {
        height: "100%",
    },
}))

export default function HeroSection() {

    const styles = useStyles();

    return (
        <Paper className={styles.section}>
            <Container className={styles.container} maxWidth="md">
                <Grid container className={styles.content} alignItems="center" justifyContent='space-between'>
                    <Grid item sm={8}>
                        <Typography component='h1' variant='h3'>Toronto Weather</Typography>
                        <Typography variant='h5'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quia atque, tenetur sapiente eius aut assumenda corrupti recusandae, repellendus asperiores aspernatur minus libero facere nemo illum neque adipisci quasi expedita.
                        </Typography>
                        <Box my={3}>
                            <Button variant='outlined'>Refresh</Button>
                        </Box>
                    </Grid>
                    <Grid item>
                        <WeatherInfo direction="column"/>
                    </Grid>
                </Grid>
            </Container>
        </Paper>
    )
}
