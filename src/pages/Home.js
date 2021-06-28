import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import './home.css';
import Foca from '../components/img/foca-logo_yellow.png';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        FOCA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        background: "#552583",
      },
      toolbar: {
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'space-around',
        cursor: 'pointer'
      },
    heroContent: {
      background: "#552583",
    },
    heroButtons: {
      background: "#552583",
    },
    buttonLogin: {
      background: '#fdb927'
    },
    buttonCadastro: {
      background: '#fff'
    },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div id="page-landing">
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="lg">
          <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={Foca} alt="Proffy" />
          <h2 id="typewriterText">A sua plataforma de estudos.</h2>
        </div>
      </div>
            <div className={classes.heroButtons}>
              <Grid container spacing={10} justify="center">
                <Grid item>
                  <Button variant="contained" href="/login" className={classes.buttonLogin}>
                    Fazer login
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" href="/cadastrar" className={classes.buttonCadastro}>
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </div>
  );
}